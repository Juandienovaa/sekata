# Little Amps Coffee Roasters — Production Website

> *"Vinyl record sleeve in afternoon sun. Cream paper, burnt-orange ink, a single dusty blue stamp, every label set in monospace — the interface behaves like a printed coffee zine: tactile, editorial, never sterile."*

A production-ready e-commerce & editorial web application for **Little Amps Coffee Roasters**, built in accordance with the brand guidelines defined in `DESIGN.md`.

---

## ☕ Key Features

1. **Brand Identity & Atmosphere**
   - Built on a **Cream Paper** (`#fff9f2`) canvas with **Espresso** (`#522c25`) typography and **Burnt Orange** (`#c03001`) interactive stamp accents.
   - Strictly flat surface layering (`Cream Paper` → `Linen Beige` → `Sandstone`) with `1px Taupe Hairline` (`#e6dad4`) borders — zero generic SaaS drop shadows.
   - Strict 3px button radius and 8px card/image radius.

2. **Official Assets Used Directly**
   - **Original Brand Logo** (`logo.jpg`): Rendered in the header navigation and footer colophon, strictly preserving original proportions, colors, and mascot illustration.
   - **Hero Video & Cinema Reel** (`herosection.mp4`): High-definition 1920x1080 24fps video integrated in the Hero and the dedicated Visual Storytelling section with custom play/pause, volume/mute, and fullscreen controls.
   - **Product Photography**:
     - `americano.jpg`: Classic Americano
     - `Caramel_macchiato.jpg`: Caramel Macchiato
     - `vanillalatte.jpg`: Madagascar Vanilla Latte
     - `redvelvet.jpg`: Red Velvet Botanical Latte
     - `lemon tea.jpg`: Sun-Steeped Artisan Lemon Tea
     - `Sokata_beverage_product_photography_c823fac9_2K.jpg`: Signature Slow-Drip Cold Pour
   - **Editorial & Community Photography**:
     - `konten1.jpg`: Harrisburg Vinyl Sessions & Café Counter
     - `Sokata_beverage_product_photography_c823fac9_2K.jpg`: Roastery Field Notes

3. **Typography Pairing**
   - **Display / Brand Headlines**: *DM Serif Display* (substitute for Little Amps / Recoleta), set at tight negative tracking (`-0.06em` to `-0.10em`).
   - **Body Copy**: *Inclusive Sans* / *Work Sans* with comfortable `0.03em` tracking and `1.6` line height.
   - **Structural Metadata, Nav & Buttons**: *JetBrains Mono* / *Necto Mono*, set uppercase with standard `0.05em` tracking.

4. **Functional Interactive Components**
   - **Filterable Product Menu**: Filter by *All Batches*, *Espresso & Milk*, *Cold Extraction*, and *Botanical & Tea*.
   - **Interactive Quick View Modal**: High-res product photograph, bean origins, extraction recipes, sensory dots (Roastness, Acidity, Complexity), size and temperature toggles.
   - **Full Shopping Cart Drawer**: LocalStorage-persisted cart, quantity adjustments, item removal, grind preference selector, promo codes (`VINYL10`, `AMPS15`), free shipping threshold calculation ($45), and simulated dispatch order confirmation.
   - **Interactive Wholesale Program**: Comprehensive inquiry modal for cafés and restaurants to calculate weekly poundage and submit roast requests with instant receipt confirmation.
   - **Community Board Carousel**: Article slider (`01 — 03`) with read-more dispatch modals.
   - **Analog Vinyl Turntable Player**: Interactive Web Audio API synthesizer creating authentic vinyl needle surface crackle and 33⅓ RPM warmth on toggle.
   - **Tasting Room Locator & Working Contact Form**: Harrisburg Midtown and Downtown Roastery addresses, hours, public cupping schedules, and contact dispatch form.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS + Custom CSS Variables matching `DESIGN.md`
- **Typography**: Google Fonts (*DM Serif Display*, *Inclusive Sans*, *JetBrains Mono*, *Roboto Mono*)
- **Icons**: Lucide React (clean minimal line-art)
- **Audio**: Web Audio API (zero external audio file dependency)

---

## 🚀 Running the Project

### Development Server
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

### Production Build & Preview
```bash
npm run build
npm run preview
```
Build output is optimized and bundled into the `dist/` directory.

