# VELOCITA

Plateforme web de location de voitures italiennes d'exception, inspiree des annees 1960.

![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/View-EJS-B4CA65)
![Tailwind](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue)

## Vision

VELOCITA propose une experience premium autour des icones automobiles italiennes:

- univers visuel vintage 1960s (Rosso Corsa, Oro Metallico, Nero Italiano, Crema Panna)
- navigation rapide avec rendu serveur EJS
- catalogue enrichi avec filtres par marque
- orientation produit claire pour evoluer vers une version full production

## Stack Technique

- `Node.js` + `Express 5`
- `EJS` pour le rendu SSR
- `Tailwind CSS` + styles custom vintage (`src/public/css/vintage-1960.css`)
- structure MVC legere via `controllers`, `services`, `views`
- outillage TypeScript prepare (`tsconfig.json`, exemple route API TS)

## Fonctionnalites Actuelles

- Homepage premium style 1960s
- Collection complete de 24 modeles legendaires
- Filtres dynamiques par marque sur la page catalogue
- Pages: accueil, a propos, contact, experiences, concierge, membership, detail voiture, 404
- Version statique `code.html` modernisee pour demo immediate

## Photos Des Voitures

Le catalogue utilise des photos reelles de voitures via des URLs Wikipedia/Wikimedia Commons (pas d'images generees IA).

Note importante:

- certaines references historiques rares peuvent utiliser une photo de generation proche lorsque l'image exacte est difficilement disponible en acces direct
- les credits/licences de chaque photo restent ceux des auteurs sur Wikimedia Commons

## Arborescence

```text
src/
  app.js
  controllers/
  services/
    apiService.js
  views/
    partials/
  public/
    css/
  routes/
    api/
```

## Installation

```bash
npm install
```

## Lancement En Local

```bash
npm run dev
```

## Build Production

```bash
npm run build
```

## Variables D'environnement

Copier le fichier exemple:

```bash
cp .env.example .env
```

Sous PowerShell (Windows):

```powershell
Copy-Item .env.example .env
```

## Scripts Utiles

- `npm run dev` : demarrage en developpement
- `npm run build` : compilation CSS Tailwind
- `npm run typecheck` : verification TypeScript
- `npm run start:prod` : lancement mode production

## Deploy

Compatible Vercel / Netlify avec scripts deja prets dans `package.json`.

## Licence

ISC
