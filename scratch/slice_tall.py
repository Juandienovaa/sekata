from PIL import Image
import os

img_path = r"C:\Users\ASUS\.gemini\antigravity\brain\b9595647-c32c-4cc9-b7b5-20be60d3e6e7\full_page_tall.png"
artifact_dir = r"C:\Users\ASUS\.gemini\antigravity\brain\b9595647-c32c-4cc9-b7b5-20be60d3e6e7"

img = Image.open(img_path)
w, h = img.size
print(f"Full page dimensions: {w}x{h}")

# Slice into 900px vertical chunks
chunk_h = 900
num_chunks = min(8, h // chunk_h)

for i in range(num_chunks):
    box = (0, i * chunk_h, w, min(h, (i + 1) * chunk_h))
    chunk = img.crop(box)
    out_name = f"slice_{i+1:02d}_{i*chunk_h}_{(i+1)*chunk_h}.png"
    chunk.save(os.path.join(artifact_dir, out_name))
    print(f"Saved {out_name}")

