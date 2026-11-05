import React from 'react';
import ReactDOM from 'react-dom/client';
// Self-hosted fonts: guarantees identical typography on Android, iOS, Windows, Mac without CDN network failure
import '@fontsource/plus-jakarta-sans/latin.css';
import '@fontsource/plus-jakarta-sans/latin-italic.css';
import '@fontsource/jetbrains-mono/latin.css';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

