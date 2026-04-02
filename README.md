# 🥐 Juno The Bakery & Kitchen

A premium, fully responsive, artisan-style e-commerce and brand experience website built for Juno Bakery (Tangutur, Andhra Pradesh). 

This project utilizes a lightning-fast **Vite + Vanilla JavaScript** environment without leveraging heavy frontend frameworks—ensuring rapid load times, stellar SEO, and highly maintainable components.

---

## ✨ Features

- **Dynamic Menu Rendering:** Fetches over 100+ unique bakery, chai, and biryani items dynamically from a centralized `menuData.js` infrastructure.
- **Mobile First & Responsive:** Custom responsive sidebars, smooth animated hamburger menus, and adaptive multi-column grid layouts for seamless scaling.
- **Interactive Search Ecosystem:** Real-time dish filtering logic built natively traversing complex DOM configurations for lightning-fast catalog browsing.
- **Smooth Scroll Integration:** Silky smooth scrolling dynamics natively integrated using **Lenis** framework.
- **Day/Night Theme Aesthetics:** Rich brand identity adhering to Juno's premium Navy Blue and Golden Yellow color palettes fused with glassmorphism interactions.
- **Vercel Deployment Ready:** Multi-page compilation configurations bundled cleanly via `vite.config.js`.

---

## 🛠️ Technology Stack

- **Core Structure:** HTML5 Semantic Markup
- **Styling Execution:** Vanilla CSS (CSS Variables, Flexbox/Grid, Animations)
- **Logic & Functionality:** Modern ES6+ JavaScript modules
- **Build Tool:** [Vite.js](https://vitejs.dev/)

---

## 🚀 Local Development Setup

To run this project on your local machine:

1. **Install dependencies:**
   Ensure you have Node.js installed. Open your terminal in the project root and run:
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   > The site will run typically run at `http://localhost:5173/`

3. **Build for Production:**
   To generate the bundled, minified output ready for live hosting:
   ```bash
   npm run build
   ```

---

## 📂 Project Architecture

```text
juno-bakery/
├── index.html           # Landing Page
├── menu.html            # Dynamic Product & Search Catalog
├── about.html           # Brand Story & Heritage
├── blog.html            # Journal Entry List
├── article.html         # Individual Journal Entry Renderer
│
├── css/                 
│   ├── about.css        # Story specific styles
│   ├── footer.css       # Global sticky footer & overlay navs
│   ├── hero-carousel.js # Hero layouts
│   └── menu.css         # Filtering & Mobile sidebar layouts
│
├── js/                  
│   ├── carousel.js      # Global JS Swiper/Carousel
│   ├── menuData.js      # Global JSON object mapping images & menus
│   └── mobileMenu.js    # Navbar global hamburger tracking
│
├── package.json         # Node Scripts
├── vite.config.js       # Vercel Map Configuration
└── vercel.json          # Deployment rules
```

---

## ☁️ Deployment (Vercel)

This repository is tailored for zero-configuration deployments on **Vercel**.

1. Sync this project with a GitHub Repository.
2. Link the repository via the Vercel Dashboard.
3. Vercel automatically detects the **Vite Framework**.
4. Deploy the application.

> *Note:* The included `vite.config.js` properly configures Vercel's bundler to construct **all** HTML pages synchronously within the `/dist` output folder.

---

*Find The Best Brew • Since 1975*
