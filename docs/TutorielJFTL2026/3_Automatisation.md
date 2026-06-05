---
sidebar_position: 3
---

# 3 - Création de cas de tests automatisés
Utilisation de l'IA pour générer des cas de tests automatisés à partir d'une spécification openAPI, en suivant une approche structurée et rigoureuse.

## Agent GenTestAuto

````
# Objectif de l’application
Créer une application web agentique permettant de tester automatiquement une API à partir d’une spécification OpenAPI (Swagger JSON), en générant, exécutant et analysant des scénarios de test.

# Entrées de l’application
L’utilisateur fournit :
* Un fichier Swagger/OpenAPI au format JSON
* L’URL de base de l’API à tester (ex : https://api.example.com)

# Fonctionnalités attendues

## Analyse du Swagger
* Parser la spécification OpenAPI
* Extraire :
  * Endpoints
  * Méthodes HTTP
  * Paramètres
  * Schémas de requêtes et réponses
  * Codes de réponse

## Génération de tests

Générer des cas de test structurés et modifiables couvrant 
* Tous les endpoints disponibles
* Tous les codes de réponses documentés
* Trois types de scénarios :
  * Cas nonimal (requête valide)
  * Cas d’erreur (données invalides, paramètres manquants)
  * Cas limites (valeurs extrêmes, champs optionnels)

Chaque test doit inclure :
* Nom et description du test
* Endpoint + méthode HTTP
* Requête complète
* Résultat attendu

## Exécution des tests
* Exécuter les requêtes HTTP vers l’API cible
* Comparer la réponse réelle avec l’attendu

## Visualisation des résultats
Afficher les résultats de manière claire :
* Résumé global
* Détail par test

## Génération d’un rapport de test téléchargeable
Générer un rapport téléchargeable

# Interface utilisateur
Créer une interface simple et moderne, en français, permettant de :
* Charger le swagger
* Renseigner l’URL de l’API 
* Générer et afficher les tests
  * Par endpoint
  * En totalité
* Exécuter les tests et afficher les résultats
  * Unitairement
  * Par endpoint
  * En totalité
* Télécharger le rapport 

````

## Agent TestAutoKarate

````
# Objectif de l’application
Créer une application web agentique permettant de tester automatiquement une API à partir d’une spécification OpenAPI (Swagger JSON), en générant, exécutant et analysant des scénarios de test développés pour le framework Karate.

# Entrées de l’application
L’utilisateur fournit :
* Un fichier Swagger/OpenAPI au format JSON
* L’URL de base de l’API à tester (ex : https://api.example.com)

# Fonctionnalités attendues

## Analyse du Swagger
* Parser la spécification Swagger/OpenAPI
* Extraire et analyser :
  * tous les endpoints de l'API
  * toutes les méthodes HTTP
  * tous les paramètres
  * tous les schémas de requêtes et réponses
  * tous les codes de réponse

## Génération de tests
Générer des cas de test, pour le framework Karate, structurés et modifiables couvrant 
* Tous les endpoints
* Tous les codes de réponses documentés
Trois types de scénarios doivent être générés
  * Cas nonimal (requête valide)
  * Cas d’erreur (données invalides, paramètres manquants)
  * Cas limites (valeurs extrêmes, champs optionnels)

Chaque test doit inclure :
* Nom et description du test
* Endpoint + méthode HTTP testé
* Requête complète
* Résultat attendu

## Génération du projet Maven
Générer la structure du projet Maven comprenant tous les tests Karate générés

## Exécution des tests
* Exécuter tous les tests Karate générés (toutes les requêtes vers l'API cible)
* Comparer le résultat du test exécuté avec le résultat attendu

## Visualisation des résultats
Afficher les résultats de manière claire :
* Résumé global
* Détail par test

## Génération d’un rapport de test téléchargeable
Générer un rapport au format HTML téléchargeable
Rapport global
Rapport par endpoint

# Interface utilisateur
Créer une interface simple et moderne, en français, permettant de :
* Charger le swagger
* Renseigner l’URL de l’API 
* Générer et afficher les tests pour le framework Karate
  * Par endpoint
  * En totalité
* Exécuter les tests et afficher les résultats
  * Unitairement
  * Par endpoint
  * En totalité
* Télécharger le rapport

# Utiliser :
- Java 20+
- Maven
- Framework Karate

# Frontend
Le frontend doit contenir :
- le téléchargement du fichier swagger/OpenAPI
- un viewer de génération des tests
- un dashboard d'exécution des tests
- un viewer de rapports de tests

# Backend
Le backend doit contenir :
- l'API Gemini
- un runner maven

````

## Analyse statique du swagger

````
Fait une analyse statique du swagger et remonte les erreurs et incohérences. Génère un rapport PDF avec le résultat de ton analyse.

````

## Consolidation des étapes précèdentes

````
....

````