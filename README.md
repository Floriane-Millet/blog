# Discover Osijek - Erasmus Blog

Blog d'expérience Erasmus à Osijek, Croatie.

## Arborescence du Projet

```
blog/
│
├── index.html                          # Page d'accueil avec carte interactive Leaflet
├── about.html                          # Page "About Us" - Présentation de l'équipe
├── README.md                           # Ce fichier
│
├── pre-departure/                      # Guide pré-départ (4 pages)
│   ├── destination.html                # Présentation d'Osijek
│   ├── transport.html                  # Se rendre à Osijek et se déplacer
│   ├── accommodation.html              # Logement et conseils pratiques
│   └── student-life.html               # Vie étudiante et activités
│
├── blog/                               # Section blog
│   ├── index.html                      # Page listing des articles
│   └── posts/                          # Articles de blog
│       ├── culture.html                # Découverte de la culture croate
│       ├── customs.html                # Coutumes et étiquette sociale
│       └── economy.html                # Vivre avec un budget étudiant
│
└── assets/                             # Ressources
    │
    ├── css/                            # Feuilles de style
    │   ├── global.css                  # Styles globaux (navigation, footer, base)
    │   ├── home.css                    # Styles spécifiques page d'accueil
    │   ├── about.css                   # Styles page "About"
    │   ├── pre-departure.css           # Styles pages guide pré-départ
    │   ├── blog-listing.css            # Styles page listing blog
    │   └── blog-post.css               # Styles articles de blog
    │
    ├── js/                             # JavaScript
    │   └── script.js                   # Script global (navigation, menu, carte Leaflet)
    │
    └── images/                         # Images
        └── .gitkeep
```

## Structure des Pages

### Navigation

- **Home** → `index.html`
- **About Us** → `about.html`
- **Pre-Departure Guide** (menu déroulant)
  - Destination: Osijek → `pre-departure/destination.html`
  - Getting There & Around → `pre-departure/transport.html`
  - Accommodation & Practical Tips → `pre-departure/accommodation.html`
  - Student Life → `pre-departure/student-life.html`
- **During Our Stay** → `blog/index.html`

### Blog Posts

- Culture croate → `blog/posts/culture.html`
- Coutumes sociales → `blog/posts/customs.html`
- Budget étudiant → `blog/posts/economy.html`

## Technologies

- **HTML5** - Structure sémantique
- **CSS3** - Design responsive avec variables CSS
- **JavaScript ES6** - Interactions et navigation
- **Leaflet.js** - Carte interactive sur la page d'accueil
- **Google Fonts** - Police Inter

## Caractéristiques

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation avec menu hamburger sur mobile
- ✅ Menu déroulant pour le guide pré-départ
- ✅ Carte interactive Leaflet centrée sur l'Europe
- ✅ Architecture CSS modulaire
- ✅ Accessibilité (ARIA, HTML sémantique)
- ✅ Animations et transitions fluides

## Utilisation

Ouvrir `index.html` dans un navigateur pour visualiser le site.
