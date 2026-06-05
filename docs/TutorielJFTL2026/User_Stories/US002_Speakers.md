# US002 - Speakers

## User Story

En tant qu'utilisateur du projet API TAIA, je veux consulter les speakers via `GET /api/speaker` afin d'identifier rapidement les intervenants disponibles dans la base du projet.

## Valeur attendue

- exposer la liste des speakers de maniere centralisee
- permettre une recherche simple par identifiant ou nom
- permettre un filtre par etage deduit des conferences et des salles associees
- exposer aussi l'entreprise rattachee a chaque speaker

## Criteres d'acceptation

1. L'appel `GET /api/speaker` repond avec un JSON `200` contenant une collection de speakers.
2. Les filtres `id`, `nom` et `etage` sont acceptes en query params.
3. Le filtre `etage` sur les speakers s'appuie sur les salles associees a leurs conferences.
4. Le champ `entreprise` est present dans chaque speaker pour relier l'intervenant a son entreprise.
4. Le service est visible dans Swagger.
5. Le service peut etre execute depuis Swagger.