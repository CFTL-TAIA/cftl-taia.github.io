# US001 - Conference

## User Story

En tant qu'utilisateur du projet API TAIA, je veux appeler le service `GET /api/conference` avec des filtres optionnels afin de consulter rapidement les conferences persistees dans la base du projet.

## Valeur attendue

- valider le bon fonctionnement du socle technique
- disposer d'un endpoint de lecture riche pour les premiers tests
- verifier l'integration front, Swagger, filtres et GitHub Pages

## Criteres d'acceptation

1. La page front s'affiche sur GitHub Pages.
2. L'appel `GET /api/conference` repond avec un JSON `200` contenant une collection de conferences.
3. Les filtres `id`, `nom`, `speakerId`, `salleId` et `horaire` sont acceptes en query params.
4. Le service est visible dans Swagger.
5. Le service peut etre execute depuis Swagger.