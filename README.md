# WashOnline — COS Junior

## Présentation
**WashOnline** est un prototype fullstack inspiré d’une plateforme de gestion de laveries.  
Ce dépôt fait partie du projet **COS Junior** et utilise des noms de fichiers sénégalais pour les pages et composants afin d’apporter une identité personnelle et cohérente.

## Stack technique
- **Frontend** : React, TypeScript, Tailwind CSS, React Router  
- **Backend** : Spring Boot, Java, Spring Security (JWT)  
- **Base de données** : PostgreSQL  
- **Conteneurisation** : Docker, Docker Compose  
- **CI/CD** : GitHub Actions (build, tests, déploiement)

## Fonctionnalités MVP
- Authentification utilisateur (JWT)  
- Liste des laveries et page détail (machines, statut)  
- Réservation d’une machine (création et suivi)  
- Administration simple pour changer le statut des machines  
- Profil utilisateur et historique des réservations

## Installation et lancement local

### Prérequis
- Node.js et npm  
- Java 17+ et Maven  
- Docker (optionnel)

### Frontend
```bash
cd Cos_junior/washonline-front
npm install
npm start