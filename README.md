# Velocita | Timeless 1960s Elegance

> Relive the golden age of Italian design.

![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/View-EJS-B4CA65)
![Coverage](https://img.shields.io/badge/Test%20Coverage-95%25-2ea44f)
![License](https://img.shields.io/badge/License-ISC-blue)

## Platform Overview

Velocita is a luxury rental platform focused on iconic 1960s Italian automobiles, designed as a premium digital concierge experience.

The current platform is built with Node.js, Express, and EJS, with an architecture designed to evolve into a production-grade full-stack application while keeping server-side rendering performance and SEO friendliness.

Core objective: deliver a modern booking experience wrapped in the timeless design language of Ferrari and Alfa Romeo's golden era.

## 1960s Inspiration

The interface and brand expression are inspired by 1960s Italian grand touring culture:

- Rosso Corsa `#DC143C`
- Oro Metallico `#D4AF37`
- Nero Italiano `#1A1A1A`
- Crema Panna `#F5F5DC`

Design direction:

- High-contrast cinematic hero with a Ferrari 250 GTO focal point
- Elegant serif headlines (Playfair Display) with clean sans-serif body copy (Roboto)
- Gold-accent interactions, leather-inspired surfaces, and subtle speed-line motifs
- Motion that feels premium: restrained fade-ins and gentle parallax, never noisy

## Tech Stack

Current:

- Node.js
- Express 5
- EJS server-side rendering
- Compression middleware

Planned production upgrade (recommended):

- TypeScript for API/domain safety
- TailwindCSS v4 for utility-first design system and performance-friendly CSS output
- shadcn/ui components adapted for EJS-compatible design tokens and patterns
- Roboto for body text and Roboto Mono for technical surfaces/code blocks

## Features

- Car Catalog: filter by model, year, location, and availability window
- Booking Flow: date selection, dynamic pricing, insurance tiers, optional concierge add-ons
- User Dashboard: active rentals, history, invoices, profile and preferences
- Admin Panel: CRUD for cars, users, bookings, pricing rules, and availability controls

## Architecture

```text
src/
	app.js
	controllers/
	services/
	views/
	utils/
	routes/
		api/
	public/
		css/
		images/
		js/
```

Target modular pattern:

- `controllers/`: request handlers and response mapping
- `services/`: business rules, external integration, pricing logic
- `views/`: EJS pages/partials (luxury storefront)
- `utils/`: shared helpers (formatters, validators, guards)
- `routes/`: HTTP routing (web + API)

## Live Demo

- Production URL: `https://your-vercel-or-netlify-url`
- Preview URL: `https://your-preview-url`

## Setup

1. Install dependencies

```bash
npm install
```

2. Configure environment

```bash
cp .env.example .env
```

3. Run local development

```bash
npm run dev
```

4. Build production assets

```bash
npm run build
```

5. Start production server

```bash
npm run start:prod
```

## Lighthouse Performance Target

- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Key optimizations:

- Aggressive static caching
- Compressed responses
- Optimized responsive imagery (`srcset`, lazy loading)
- Critical CSS strategy and minimal JavaScript on key pages

## Deployment Notes

The project is deployment-ready for Vercel/Netlify with build and start scripts in `package.json`.

- Vercel: configure Node runtime and `npm run build`
- Netlify: build command `npm run build`, publish from generated assets/static output

## Screenshots Mockups (Description)

- Hero Screen: black canvas, gold typography, single Ferrari 250 GTO image, subtle speed-line overlay, premium CTA in Oro Metallico.
- Collection Grid: cream-toned background sections, shadowed cards with gold-edge hover glow, model/year/location metadata chips.
- Car Detail: asymmetric editorial layout, large photography panel, pricing and insurance panel with leather-texture accents.
- Booking Flow: minimal multi-step wizard with calendar, insurance selector, and elegant order summary.
- Dashboard/Admin: clean monochrome data tables with gold highlights for active status and actions.

## License

ISC
