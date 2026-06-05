# US006 - Entreprises

## User Story

En tant qu'utilisateur du projet API TAIA, je veux consulter les entreprises via `GET /api/entreprise` afin d'identifier les organisations rattachees aux speakers, aux demonstrations et aux conferences du programme.

## Valeur attendue

- exposer un nouveau referentiel metier aligne sur les speakers
- faciliter la navigation entre entreprises, speakers et conferences
- documenter les logos placeholder et les liens publics des entreprises, y compris les URLs Blob quand le stockage distant est actif

## Criteres d'acceptation

1. L'appel `GET /api/entreprise` repond avec un JSON `200` contenant une collection d'entreprises.
2. Les filtres `id`, `nomEntreprise` et `speakerId` sont acceptes en query params.
3. Chaque entreprise expose `id`, `nomEntreprise`, `logo` et `siteUrl`, avec un `logo` qui peut etre un chemin local ou une URL publique Blob.
4. Le service est visible dans Swagger.
5. La page front `entreprises` permet d'ouvrir une entreprise et de voir les speakers et conferences associes.