import net from 'net';

// Forward incoming connections on port 3001 to Vite on port 3000
const server = net.createServer((clientSocket) => {
  const targetSocket = net.connect(3000, '127.0.0.1', () => {
    clientSocket.pipe(targetSocket);
    targetSocket.pipe(clientSocket);
  });

  targetSocket.on('error', (err) => {
    clientSocket.destroy();
  });

  clientSocket.on('error', (err) => {
    targetSocket.destroy();
  });
});

server.listen(3001, '0.0.0.0', () => {
  console.log('Port forwarder running: 0.0.0.0:3001 -> 127.0.0.1:3000');
});
