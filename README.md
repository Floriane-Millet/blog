# Discover Osijek - Erasmus Blog

Blog d'expérience Erasmus à Osijek, Croatie.

## 🎯 Nouvelle Structure Simplifiée

**Un dossier par page** - Chaque page a son propre dossier contenant HTML, CSS et JavaScript ensemble. Plus besoin de chercher dans plusieurs dossiers!

## 📁 Arborescence du Projet

```
blog/
│
├── index.html                          # Page carte interactive (point d'entrée)
├── map-styles.css                      # Styles de la carte
├── map-script.js                       # Script de la carte Leaflet
├── README.md                           # Ce fichier
│
├── home/                               # Page d'accueil avec menu
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── about/                              # Page "About Us"
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── destination/                        # Guide: Destination Osijek
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── transport/                          # Guide: Transport
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── accommodation/                      # Guide: Logement
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── student-life/                       # Guide: Vie étudiante
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── blog-listing/                       # Page listing des articles
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── blog-culture/                       # Article: Culture croate
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── blog-customs/                       # Article: Coutumes sociales
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
└── blog-economy/                       # Article: Budget étudiant
    ├── index.html
    ├── styles.css
    └── script.js
```

## 🗺️ Navigation du Site

### Structure Principale
1. **Carte Interactive** (`index.html`) → Clic sur le marqueur → Page d'accueil
2. **Page d'accueil** (`home/`) → Menu avec 3 sections principales

### 3 Sections Principales

#### 1. About Us
- **Route**: `about/index.html`
- Présentation de l'équipe Erasmus

#### 2. Pre-Departure Guide (Menu Déroulant)
- **Destination: Osijek** → `destination/index.html`
- **Getting There & Around** → `transport/index.html`
- **Accommodation & Tips** → `accommodation/index.html`
- **Student Life** → `student-life/index.html`

#### 3. During Our Stay (Blog)
- **Listing des articles** → `blog-listing/index.html`
- **Article Culture** → `blog-culture/index.html`
- **Article Coutumes** → `blog-customs/index.html`
- **Article Économie** → `blog-economy/index.html`

## 🎨 Technologies

- **HTML5** - Structure sémantique
- **CSS3** - Design responsive avec animations
- **JavaScript ES6** - Interactions et navigation
- **Leaflet.js** - Carte interactive (page d'accueil uniquement)
- **Google Fonts** - Police Inter

## ✨ Caractéristiques

- ✅ **Structure simple**: Un dossier par page
- ✅ **Fichiers auto-contenus**: HTML, CSS, JS ensemble
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation avec menu hamburger sur mobile
- ✅ Menu déroulant pour le guide pré-départ
- ✅ Carte interactive Leaflet
- ✅ Thème de couleur jaune professionnel (#FDB515, #FFA500)
- ✅ Accessibilité (ARIA, HTML sémantique)
- ✅ Animations et transitions fluides

## 🚀 Utilisation

1. Ouvrir `index.html` dans un navigateur
2. Cliquer sur le marqueur jaune sur la carte
3. Naviguer à travers les 3 sections du menu

## 📝 Modifier une Page

Pour modifier une page, tout est dans son dossier:
- **Contenu HTML**: Modifier `index.html`
- **Apparence**: Modifier `styles.css`
- **Interactivité**: Modifier `script.js`

Exemple: Pour modifier la page "About Us"
```
blog/about/
├── index.html    ← Modifier le contenu ici
├── styles.css    ← Modifier les couleurs/mise en page ici
└── script.js     ← Modifier les interactions ici
```

## 🎯 Avantages de la Nouvelle Structure

✅ **Plus simple à comprendre** - Un dossier = une page
✅ **Plus facile à modifier** - Tous les fichiers d'une page ensemble
✅ **Plus rapide à trouver** - Pas besoin de chercher dans assets/
✅ **Moins de confusion** - Structure claire et logique

---

**Projet réalisé dans le cadre d'une mobilité Erasmus à Osijek, Croatie (2024)**
