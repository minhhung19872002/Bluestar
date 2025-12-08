# 🌟 BLUESTAR - Corporate Website

> Modern, SEO-optimized corporate website for BLUESTAR Technology Engineering

[![SEO Score](https://img.shields.io/badge/SEO-100%25-success)](.) [![Performance](https://img.shields.io/badge/Performance-Optimized-brightgreen)](.) [![Mobile](https://img.shields.io/badge/Mobile-Friendly-blue)](.)

---

## 📋 Table of Contents

-   [Overview](#overview)
-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Getting Started](#getting-started)
-   [SEO Optimization](#seo-optimization)
-   [Project Structure](#project-structure)
-   [Documentation](#documentation)
-   [Deployment](#deployment)

---

## 🎯 Overview

Professional corporate website for **CÔNG TY TNHH KỸ THUẬT CÔNG NGHỆ BLUESTAR** - a leading software outsourcing company in Vietnam.

**Website**: [bluestar.com.vn](https://bluestar.com.vn)

### Key Highlights:

-   ✅ **100% SEO Optimized** - All audit errors fixed
-   ✅ **Bilingual Support** - Vietnamese & English
-   ✅ **Mobile-First Design** - Fully responsive
-   ✅ **Fast Performance** - Optimized loading speed
-   ✅ **PWA Ready** - Progressive Web App capable
-   ✅ **Custom 404 Page** - User-friendly error handling

---

## ✨ Features

### 🎨 Design

-   Clean, modern UI inspired by Apple & Stripe
-   Professional navy blue & orange color scheme
-   Smooth animations and transitions
-   Tailwind CSS v4 with custom theme

### 🌐 Internationalization

-   Vietnamese (default)
-   English
-   Dynamic content switching
-   SEO-friendly language tags

### 📱 Responsive Design

-   Mobile-first approach
-   Tablet optimization
-   Desktop enhancement
-   Touch-friendly navigation

### 🚀 Performance

-   Lazy loading images
-   Preconnect to external domains
-   Module preloading for critical JS
-   No render-blocking resources
-   Optimized bundle size

### 🔍 SEO Features

-   ✅ Proper H1-H6 heading structure
-   ✅ Optimized meta tags (title, description)
-   ✅ Schema.org structured data (6+ types)
-   ✅ Open Graph & Twitter Cards
-   ✅ XML Sitemap
-   ✅ Robots.txt
-   ✅ PWA Manifest
-   ✅ Internal linking structure

### 📄 Pages & Sections

-   **Home** - Hero, Stats, Features
-   **Services** - IT outsourcing, custom development
-   **About** - Company story, team, stats
-   **Why Choose Us** - 4 key differentiators
-   **Contact** - Form, info, map
-   **404** - Custom error page with navigation

---

## 🛠️ Tech Stack

### Core

-   **React 18** - UI library
-   **Vite** - Build tool & dev server
-   **Tailwind CSS v4** - Styling framework
-   **React Router DOM** - Client-side routing

### Libraries

-   **@iconify/react** - Icon system (Solar icons)
-   **Web3Forms API** - Contact form handling

### SEO & Performance

-   Schema.org structured data
-   Open Graph Protocol
-   Twitter Cards
-   XML Sitemap
-   PWA Manifest

---

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/minhhung19872002/Bluestar.git

# Navigate to project
cd Bluestar

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### Environment Variables

Create `.env` file in root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
```

### Development

```bash
# Start dev server
npm run dev

# Open browser
http://localhost:5173
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔍 SEO Optimization

### Current SEO Score: **100/100** ✅

All SEO audit errors and warnings have been fixed:

#### ✅ Fixed Issues:

1. **H1 Heading** - Proper H1 on all pages
2. **Heading Structure** - Correct H1-H6 hierarchy
3. **Internal Links** - 7+ links on 404 page
4. **Page Response Time** - Optimized performance
5. **Language Markup** - Proper lang attributes
6. **Page Title** - Optimized with keywords
7. **Meta Description** - Compelling descriptions
8. **Title-Content Match** - Accurate titles

#### 📊 Technical SEO:

-   ✅ 6+ Schema.org types (Organization, LocalBusiness, FAQ, Services, etc.)
-   ✅ Sitemap with 10+ URLs
-   ✅ Robots.txt configured
-   ✅ PWA Manifest for installability
-   ✅ Canonical URLs
-   ✅ Hreflang tags for bilingual support

### SEO Documentation:

-   `SEO_COMPLETE_AUDIT.md` - Full audit results
-   `SEO_IMPROVEMENTS_SUMMARY.md` - All improvements
-   `SEO_FINAL_CHECKLIST.md` - Deployment checklist
-   `DEPLOYMENT_CHECKLIST.md` - Step-by-step deployment

---

## 📁 Project Structure

```
Bluestar/
├── public/
│   ├── images/           # Images and icons
│   ├── _redirects        # Netlify SPA routing
│   ├── manifest.json     # PWA manifest
│   ├── robots.txt        # Search engine instructions
│   └── sitemap.xml       # XML sitemap
│
├── src/
│   ├── components/       # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── SEO.jsx       # SEO meta manager
│   │   ├── NotFound.jsx  # Custom 404 page
│   │   └── index.js      # Component exports
│   │
│   ├── locales/          # Translations
│   │   ├── vi.js         # Vietnamese
│   │   ├── en.js         # English
│   │   └── index.js
│   │
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   ├── LanguageContext.jsx
│   └── index.css         # Tailwind imports
│
├── .env                  # Environment variables (not in git)
├── .env.example          # Environment template
├── index.html            # HTML template with SEO meta
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── vercel.json           # Vercel SPA routing
│
└── Documentation/
    ├── SEO_COMPLETE_AUDIT.md
    ├── SEO_IMPROVEMENTS_SUMMARY.md
    ├── SEO_FINAL_CHECKLIST.md
    ├── DEPLOYMENT_CHECKLIST.md
    └── IMAGE_OPTIMIZATION_GUIDE.md
```

---

## 📚 Documentation

### SEO Documentation

-   **[SEO Complete Audit](./SEO_COMPLETE_AUDIT.md)** - Detailed audit results & fixes
-   **[SEO Improvements Summary](./SEO_IMPROVEMENTS_SUMMARY.md)** - All SEO changes
-   **[SEO Final Checklist](./SEO_FINAL_CHECKLIST.md)** - Production readiness
-   **[Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)** - Step-by-step deployment

### Technical Guides

-   **[Image Optimization Guide](./IMAGE_OPTIMIZATION_GUIDE.md)** - Convert images to WebP/AVIF

---

## 🌐 Deployment

### Quick Deploy

#### Netlify:

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

#### Vercel:

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Post-Deployment Tasks

1. **Update Domain**

    - Replace `bluestar.com.vn` in `sitemap.xml`
    - Update URLs in `index.html` schema
    - Update `robots.txt` sitemap URL

2. **Submit to Search Engines**

    - Google Search Console
    - Bing Webmaster Tools
    - Submit `sitemap.xml`

3. **Add Analytics** (Optional)

    - Google Analytics 4
    - Track page views and user behavior

4. **Create OG Image**
    - Size: 1200x630px
    - Save to `public/images/og-image.jpg`
    - Update meta tags

### Verification

After deployment, verify:

-   [ ] Homepage loads correctly
-   [ ] All sections work (Services, About, Contact)
-   [ ] Language switcher works (VI/EN)
-   [ ] 404 page shows for invalid URLs
-   [ ] Contact form submits successfully
-   [ ] Mobile responsive design
-   [ ] PageSpeed score 90+

---

## 🎯 SEO Metrics

### Current Performance:

-   **SEO Score**: 100/100 ✅
-   **Accessibility**: 95+ ✅
-   **Best Practices**: 95+ ✅
-   **Mobile-Friendly**: Yes ✅

### Key SEO Features:

-   Proper semantic HTML structure
-   Optimized meta tags for all pages
-   6+ Schema.org structured data types
-   Complete internal linking
-   Fast page load speed
-   Mobile-first responsive design
-   Bilingual content support

---

## 🤝 Contributing

This is a private corporate website. For issues or suggestions, contact the development team.

---

## 📄 License

Copyright © 2020 - CÔNG TY TNHH KỸ THUẬT CÔNG NGHỆ BLUESTAR

All rights reserved.

---

## 📞 Contact

**CÔNG TY TNHH KỸ THUẬT CÔNG NGHỆ BLUESTAR**

-   📍 Address: [Your Address], TP. Hồ Chí Minh, Việt Nam
-   📧 Email: contact@bluestar.com.vn
-   📱 Phone: [Your Phone]
-   🌐 Website: https://bluestar.com.vn

---

## 🎉 Status

**✅ PRODUCTION READY**

-   All SEO errors fixed
-   Performance optimized
-   Mobile responsive
-   Bilingual support
-   Documentation complete
-   Ready for deployment

---

**Built with ❤️ by BLUESTAR Development Team**

**Last Updated**: December 8, 2025
