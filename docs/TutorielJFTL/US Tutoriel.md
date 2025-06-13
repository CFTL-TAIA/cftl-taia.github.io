---
sidebar_position: 1
---

# US Tutoriel

## EPIC : Gestion des Annonces

```
## US3 - Publier une annonce

En tant qu’utilisateur connecté,
Je veux pouvoir publier une annonce
Afin de vendre ou proposer un service.
✅ Critères d’acceptation (Gherkin)

**Scénario**: Publication réussie
  Étant donné que je suis connecté
  Quand je remplis tous les champs obligatoires du formulaire de publication
  Et que je valide
  Alors l’annonce est publiée avec succès

**Scénario**: Champs obligatoires manquants
  Étant donné que je remplis partiellement le formulaire
  Quand j’essaie de valider
  Alors un message d’erreur indique les champs manquants
Le Champ Category est obligatoire, si une catégorie n’est pas sélectionnée dans la liste déroulante alors afficher le message d’erreur « Choose one category. ».
Le Champ Title est obligatoire, si le titre n’est pas saisi alors afficher le message d’erreur « Title: this field is required ». Si le titre contient moins de 5 caractères alors afficher le message d’erreur « Title: enter at least 5 characters ». Si le titre contient plus de 100 caractères alors afficher le message d’erreur « Title too long (en_US). ».
Le champ « Description » devient obligatoire si les champs Category et Title sont renseignés ; dans ce cas si la description contient moins de 3 caractères alors afficher le message d’erreur « Description too short (en_US). » et si la description contient plus de 4994 caractères alors afficher le message d’erreur « Description too long (en_US). ». 

**Scénario**: Ajout de photos
  Étant donné que je publie une annonce
  Quand j’ajoute des photos
  Alors je peux en ajouter jusqu’à 4


Si l’image n’est pas au format .png, .gif, .jpg ou .jpeg alors afficher le message d’erreur « You can only upload: image/png, image/gif, image/jpg, image/jpeg ».
Si la taille de l’image dépasse 4096kb alors afficher le message d’erreur « exceeds maximum allowed size of 4 MB ».
Si on tente d’insérer une cinquième image alors afficher le message d’erreur « You cannot upload more images. Image limit reached ! ».
```