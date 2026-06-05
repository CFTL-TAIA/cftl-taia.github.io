---
sidebar_position: 6
---

# US Tutoriel

## EPIC : Gestion des Annonces
> **Note** : Cette US est intentionnellement incomplète pour permettre l'exercice de clarification à l'étape 3.

```
En tant qu'utilisateur connecté,
Je veux pouvoir publier une annonce
Afin de vendre ou proposer un service.

CRITÈRES D'ACCEPTATION :

Scénario : Publication réussie
  Étant donné que je suis connecté
  Quand je remplis tous les champs obligatoires du formulaire de publication
  Et que je valide
  Alors l'annonce est publiée avec succès

Scénario : Champs obligatoires manquants
  Étant donné que je remplis partiellement le formulaire
  Quand j'essaie de valider
  Alors un message d'erreur indique les champs manquants

Scénario : Ajout de photos
  Étant donné que je publie une annonce
  Quand j'ajoute des photos
  Alors je peux en ajouter jusqu'à 4
```