# 🎂 ESAI CAKES

> **★ The unique taste of cakes ★**  
> Premium handcrafted cakes, custom birthday cakes, multi-tier wedding cakes, 100% eggless delights, edible photo prints, and brownies baked fresh daily in Palavoor, Tamil Nadu.

---

## 📍 Bakery Information & Address
- **Shop Name**: ESAI CAKES
- **WhatsApp & Phone**: [+91 78454 54969](https://wa.me/917845454969)
- **Address**: GDS COMPLEX, High school Street, Pazhvoor, Palavoor, Tamil Nadu 627114
- **Working Hours**: Open Daily: 9:00 AM – 9:30 PM
- **Google Maps Location**: [ESAI CAKES on Google Maps](https://www.google.com/maps/place/ESAI+CAKES/@8.2039157,77.5743268,17z/data=!4m14!1m7!3m6!1s0x3b048bbf6f6dabcf:0x94bb3f0b1abce792!2sGDS+complex!8m2!3d8.2039157!4d77.5743268!16s%2Fg%2F11gsn41s1h!3m5!1s0x3b048b415cfe04bb:0xca898d08f03bb19a!8m2!3d8.2029379!4d77.5746567!16s%2Fg%2F11wjdh6hf6)

---

## ✨ Features
- **50 Cakes Across 5 Categories**:
  - 💍 **Wedding Cakes** (10 items)
  - 🎈 **Kids' Birthday** (10 items)
  - 🌱 **100% Eggless** (10 items)
  - 📸 **Custom Photo Cakes** (10 items)
  - 🧁 **Brownies & Cupcakes** (10 items)
- **Interactive Shopping Cart System**:
  - Add to cart with live item count badge
  - Slide-over shopping cart drawer
  - In-cart quantity adjustment (`+` / `−`), item totals, and subtotal calculation
  - LocalStorage persistence across page reloads
- **1-Tap WhatsApp Checkout**:
  - Formats all cart items, quantities, and pricing into a pre-filled WhatsApp order message
  - 1-Click single-item quick WhatsApp booking on each card
- **Custom Cake Inquiry Form**:
  - Weight selection (0.5kg, 1kg, 2kg, multi-tier 3kg+)
  - Egg / eggless preference
  - Flavour selection, custom messages, and theme notes
- **Responsive & Modern UI**:
  - Built with Tailwind CSS, Google Fonts, and zero framework overhead
  - Full-size uncropped hero cake showcase
  - Offline-first local images with automatic fallback

---

## 🚀 How to Run Locally
Simply open `index.html` in any web browser, or serve with any static web server:
```bash
# Using Python
python -m http.server 8080

# Or using Node
npx serve
```
Then open `http://localhost:8080` in your browser.

---

## 📁 Project Structure
```text
├── index.html        # Main storefront layout & cart drawer
├── app.js            # Catalog rendering, cart logic & WhatsApp integration
├── cakes.json        # 50 cakes catalog data with prices & categories
├── README.md         # Documentation
└── images/
    ├── logo.png      # Official ESAI CAKES badge logo
    ├── hero-cake.jpg # Full-size uncropped hero signature cake
    └── cakes/        # 50 high-resolution cake images (WC01-WC10, KB01-KB10, etc.)
```
