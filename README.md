# Kasa

Site de location de logements / plateforme d’hébergement développé par Sandrine Pham. Projet frontend utilisant Vite, SCSS, JavaScript.

---

## 🌐 Aperçu

Site web statique proposant une interface utilisateur pour consulter des logements, voir les détails, etc. Hébergé avec GitHub Pages. Le projet est organisé avec Vite pour le bundling, SCSS pour les styles, et JavaScript pour les interactions.

---

## 📂 Structure du projet

Kasa/
├── public/ # Fichiers statiques accessibles directement (favicon, manifest, etc.)
├── src/ # Code source
│ ├── assets/ # Images, fontes, icônes, etc.
│ ├── components/ # Composants réutilisables (UI)
│ ├── styles/ # SCSS / styles globaux
│ ├── views/ # Pages / vues principales
│ ├── router/ # Routes (si navigation configurée)
│ └── main.js # Point d’entrée JS
├── index.html # Page template / accueil
├── package.json # Dépendances & scripts
├── vite.config.js # Configuration de Vite
├── .gitignore
└── README.md # Ce fichier


---

## 🛠️ Technologies utilisées

- **Vite** — bundler / dev server rapide  
- **JavaScript (ES6+)** — logique et interactions front-end  
- **SCSS** — styles modulaires et organisés  
- **HTML5** — structure du site  
- **GitHub Pages** — hébergement du site statique  

---

## 🚀 Installation & exécution locale

Voici les étapes pour travailler sur le projet en local :

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/SandrinePham/Kasa.git
   cd Kasa

2. Installer les dépendances :
  npm install

3. Lancer le mode développement :
   npm run dev

4. Générer la version de production :
   npm run build

✨ Fonctionnalités principales

Liste de logements avec filtres ou tri (prix, localisation, etc.)

Page de détail pour chaque logement, avec galerie d’images

Navigation entre les logements, aperçu, et informations complémentaires

Interface responsive — s’adapte aux mobiles / tablettes / écrans larges

Utilisation de SCSS pour modularisation des styles, gestion des variables, mixins, etc.






