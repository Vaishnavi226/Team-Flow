# 🚀 TeamFlow — Enterprise SaaS Landing & Product Platform

> Built for precision, speed, and transparency. Streamline your team's software development lifecycle with integrated tools for planning, building, and reporting.



---

## 🌟 Key Features & Design Highlights

- **Linear / Stripe SaaS Aesthetics**: Light mode backdrop (`#f7f9fb`), 1px subtle slate borders (`#e2e8f0`), kinetic clarity animations, and glassmorphic cards.
- **📱 Device-Agnostic Task Stepper ("The Lifecycle of a Task")**:
  - **Mobile (<768px)**: 1-column vertical timeline node stack with fluid `clamp()` typography.
  - **Tablet (768px - 1024px)**: 2-across grid where Step 3 spans the full-width bottom row (`col-span-2`).
  - **Desktop (1024px+)**: 3-across horizontal stepper with dynamic progress trails and anti-gravity lift (`-translate-y-4`).
- **📱 Safe-Area Mobile Hamburger Navigation**:
  - `viewport-fit=cover` and iOS/Android safe-area notch handling (`env(safe-area-inset-top)` / `env(safe-area-inset-bottom)`).
  - Full-screen backdrop overlay (`z-index: 9999; height: 100dvh`) with body scroll locking.
  - WCAG 2.1 AAA accessible 48px+ touch targets for mobile thumbs.
- **🔷 Custom Squircle Layered Favicon**:
  - Royal blue squircle (`#2563eb`) with white stacked diamond layers (`assets/favicon.svg`).
- **⚡ High-Impact Hero Dashboard**:
  - Enlarged 1376px dashboard mockup directly overlapping the trusted logos marquee section with zero bottom empty gap.
- **🔄 Enterprise 5-Column Balanced Footer**:
  - Clean responsive 5-column layout with social links, feature links, and mandatory training credit link.

---

## 🛠️ Technology Stack

| Layer | Technology Used |
| :--- | :--- |
| **Site Generator** | [Eleventy (11ty v3.1.6)](https://www.11ty.dev/) |
| **Templating Engine** | Nunjucks (`.njk`) |
| **Styling & System** | Tailwind CSS JIT + Custom CSS (`assets/css/styles.css`) |
| **Interactivity** | Vanilla JavaScript ES6 Engine (`assets/js/main.js`) |
| **Typography & Icons**| Google Fonts Inter & Material Symbols Outlined |

---

## 📁 Repository Structure

```text
TeamFlow/
├── .eleventy.js           # Eleventy SSG configuration & passthrough rules
├── package.json           # Node.js dependencies and script runner
├── .gitignore             # Git ignore rules for node_modules & _site
├── README.md              # Project documentation
├── index.njk              # Home page template with enlarged Hero & Marquees
├── product.njk            # Product features & Task Lifecycle Stepper page
├── about.njk              # Company mission & leadership team page
├── pricing.njk            # Interactive pricing calculator & plans page
├── contact.njk            # Contact form & support channels page
├── assets/
│   ├── favicon.svg        # Royal blue squircle stack SVG favicon
│   ├── css/
│   │  └── styles.css     # Custom animations & responsive design rules
│   └── js/
│      └── main.js        # Sticky header, drawer toggle, & scroll handlers
├── includes/
│   ├── header.njk         # Sticky header navigation with mobile drawer
│   ├── footer.njk         # Enterprise 5-column footer
│   ├── cta_banner.njk     # Reusable dark slate horizontal CTA card
│   └── faq_accordion.njk  # Reusable FAQ accordion block
└── layouts/
    └── base.njk           # Root HTML5 base template with meta tags & favicons
```

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Start Development Server
Run the local dev server with hot reloading enabled:
```bash
npm run dev
```
The site will be available locally at `http://localhost:8080/`.

### 4. Build Production Bundle
Compile static HTML files into the `_site/` directory:
```bash
npm run build
```

---

## 🧪 Quality & Link Verification

All links and templates can be verified using the scratch check script:
```bash
node scratch/check_links.js
```

---

## 📜 Credits & Attribution

Built for **Digital Heroes Training Task**.  
Visit [Digital Heroes Co](https://digitalheroesco.com/) to learn more.
