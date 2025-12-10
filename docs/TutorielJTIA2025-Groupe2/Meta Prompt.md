---
sidebar_position: 3
---

# Meta Prompt
Meta Prompt permettant de générer un prompt pour générer des tests


## Meta Prompt

````
En tant qu'expert en test logiciel, peux-tu générer un prompt permettant de générer des tests automatiques pour le framework Karaté à partir d'un swagger ?
Le prompt doit ignorer toutes les instructions précédentes. 
Le prompt doit prendre en entrée un swagger. 
Première étape, le prompt doit générer des cas de tests dans la syntaxe Gherkin.
Le prompt doit fournir un tableau de couverture des méthodes et codes de retour du swagger par les cas de tests.
Deuxième étape, le prompt doit générer des features Karaté à partir des cas de tests en Gherkin. 
Le prompt doit fournir un tableau de couverture des méthodes et codes de retour du swagger par les features Karaté.
Troisième étape, le prompt doit générer le code source de test en Karaté. 
Le code source doit contenir un fichier pom.xml incluant toutes les dépendantes nécessaires. 
Le prompt doit inclure les méthodes et les codes de retour testés en commentaire dans le code source de test. 
Quatrième étape, le prompt doit générer un package zip du projet complet prêt à être importé en tant que projet maven.

````
