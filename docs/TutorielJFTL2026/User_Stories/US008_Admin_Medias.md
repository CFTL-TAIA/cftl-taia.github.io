# US008 - Upload medias admin

## User Story

En tant qu'administrateur du projet API TAIA, je veux charger et nettoyer automatiquement les photos de speakers et les logos d'entreprises depuis l'interface admin afin de garder des medias conformes, visibles rapidement et sans fichiers orphelins.

## Valeur attendue

- fiabiliser les uploads admin en local comme sur Vercel
- publier les medias vers Blob en environnement cible tout en gardant un fallback local propre pour le preview
- eviter les images trop lourdes ou trop grandes pour l'affichage cible
- supprimer automatiquement les medias geres par TAIA quand la ressource metier disparait

## Criteres d'acceptation

1. `POST /api/admin/media` exige un JWT admin avec permission `update`.
2. Une photo de speaker inferieure ou egale a `2 Mo` et a `1200 x 1600 px` est acceptee.
3. Un logo d'entreprise inferieur ou egal a `2 Mo` et a `1600 x 800 px` est accepte.
4. Une image trop lourde ou trop grande est refusee avec un message explicite cote UI et cote API.
5. Si `taia_READ_WRITE_TOKEN` est present, l'URL retournee pointe vers Blob public ; sinon le fallback local utilise `/assets/media/photos/` ou `/assets/media/logos/`.
6. Apres un create, update ou delete reussi depuis l'admin, la page se recharge automatiquement avec un delai d'environ `1 s`.
7. Lors de la suppression d'un `speaker` ou d'une `entreprise`, le media associe est aussi supprime s'il est gere par TAIA ; une URL externe reste intacte.