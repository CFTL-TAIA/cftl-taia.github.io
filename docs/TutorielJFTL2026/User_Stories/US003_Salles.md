# US003 - Salles

## User Story

En tant qu'utilisateur du projet API TAIA, je veux consulter les salles via `GET /api/salle` afin d'identifier facilement les espaces disponibles dans la base du projet.

## Valeur attendue

- exposer les caracteristiques des salles
- filtrer rapidement par identifiant, nom ou etage
- rendre l'API plus utile pour les futurs croisements conference-speaker-salle

## Criteres d'acceptation

1. L'appel `GET /api/salle` repond avec un JSON `200` contenant une collection de salles.
2. Les filtres `id`, `nom` et `etage` sont acceptes en query params.
3. Les informations `nom`, `etage` et `contenance` sont disponibles dans la reponse.
4. Le service est visible dans Swagger.
5. Le service peut etre execute depuis Swagger.