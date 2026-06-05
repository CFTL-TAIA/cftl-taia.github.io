# US005 - Navigation Contextualisee

## User Story

En tant que visiteur du projet API TAIA, je veux ouvrir des pages separees pour les conferences, les speakers, les salles et les entreprises afin de consulter une vue contextualisee a partir des elements cliques dans le programme.

## Valeur attendue

- rendre la navigation front plus lisible que l'ancien tableau de bord unique
- valoriser les liaisons JSON entre conferences, speakers, salles et entreprises
- permettre une exploration coherente du programme complet

## Criteres d'acceptation

1. Un clic sur une conference du programme ouvre la page `conferences` avec la conference selectionnee.
2. Un clic sur un speaker du programme ouvre la page `speakers` avec le profil selectionne.
3. Un clic sur une salle du programme ouvre la page `salles` avec la salle selectionnee.
4. Un clic sur une entreprise du programme ou d'une page detaillee ouvre la page `entreprises` avec l'entreprise selectionnee.
5. Les pages detaillees affichent les relations associees depuis la base du projet et toutes les informations rattachees sont cliquables.
6. L'espace API reste accessible depuis le header de ces pages.