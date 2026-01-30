# WashOnline — COS Junior

## Présentation
**WashOnline** est un prototype fullstack inspiré d’une plateforme de gestion de laveries connectées.  
L’objectif est de proposer une application moderne permettant de consulter les machines disponibles, réserver un créneau, suivre l’état d’une machine et gérer son profil utilisateur.

## Origine du projet
J’ai découvert le système WashOnline dans mon logement étudiant.  
En l’utilisant régulièrement, je me suis dit :  
**“Pourquoi ne pas m’inspirer de ce concept pour créer ma propre version pédagogique, fullstack, avec une vraie logique métier ?”**  
Ce projet m’a permis de consolider mes compétences en React, Spring Boot, PostgreSQL et Docker, tout en structurant un dépôt professionnel.

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

## 📎 Prérequis
- Node.js et npm  
- Java 17+ et Maven  
- Docker (optionnel)

## 🖥️ Frontend
cd washonline-front  
npm install  
npm start

## ⚙️ Backend
cd washonline-back  
./mvnw spring-boot:run

## 🐳 Docker (optionnel)
docker-compose up --build
