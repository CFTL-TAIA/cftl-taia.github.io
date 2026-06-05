# US007 - Connexion Admin

## User Story

En tant qu'administrateur du projet API TAIA, je veux obtenir un JWT quotidien avec deux niveaux d'acces afin de modifier, creer ou supprimer des ressources metier sans exposer les mots de passe dans le code ou la documentation.

## Valeur attendue

- securiser l'acces admin sans stocker les secrets dans le depot
- distinguer clairement les actions de mise a jour des actions de creation et suppression
- permettre un usage coherent depuis l'interface admin et Swagger

## Criteres d'acceptation

1. `GET /api/admin/token` retourne uniquement des informations publiques de configuration.
2. `POST /api/admin/token` accepte un mot de passe configure cote serveur et renvoie un JWT du jour avec un `scope` et une liste de `permissions`.
3. Le scope `editor` autorise `PUT` et la rubrique `Modifier`.
4. Le scope `admin-plus` autorise `POST`, `PUT`, `DELETE` et les rubriques `Modifier`, `Creer`, `Supprimer`.
5. L'interface admin masque les formulaires de gestion tant qu'aucun token valide n'a ete genere.
6. La documentation de configuration mentionne `taia_bdd_DATABASE_URL` comme variable principale pour les CRUD metier, avec `DATABASE_URL` comme alias de compatibilite.