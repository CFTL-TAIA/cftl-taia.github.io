---
sidebar_position: 2
---

# Prompt
A remplir

---
# Intitulé 
sous la forme d’un verbe à l'infinitif + compléments​
*Ex : générer un cas de test à partir d’une User Story, synthétiser un rapport d’anomalies à partir de logs applicatives​*

---
## Description courte de la tâche​
Indiquer une description rapide de la tâche

---
## Description détaillée de la tâche
Donner une description plus détaillée

---
## Information du document

#### Version X.0
#### Date : XX/XX/XXXX
#### Etat : XXXX
#### Concepteurs : ...
#### Evaluateurs : ...

---
### Méthodes de conception possibles
...

---
### Structure des cas de test
...

---
## Prérequis
*Eléments nécessaires à l’implémentation de la tâche
Ex : type de LLM (modèle multimodal, vision, modèle de raisonnement, …), bases de connaissance (RAG), …*

---
## Entrée
*Types de données, format des données (texte, audio, vidéo, …) , qualité des données, ​…*

---
## Recommandation d'usage

---
## Sortie
*Nature des données de sortie, format des données (tableau, gherkin, JSON, …)​*

---
## Exemple entrée / sortie

---
## Prompt : LLM as a Judge
**Évaluation critique multi-critères des cas de test générés à partir d’une User Story**

```
Tu es un expert en assurance qualité logicielle, doté d’une connaissance approfondie des standards suivants :
- ISTQB Foundation (principes fondamentaux des tests logiciels)
- IEEE 610.12–1990 (glossaire de la terminologie de l’ingénierie logicielle)
- IEEE 829–1983 (standard pour la documentation des tests logiciels)
- IREB (qualité des exigences, clarté, unicité, traçabilité, etc.)

On te fournit
Une User Story décrivant un besoin fonctionnel

*** DEBUT US***
[Contenu de l’US avec Test d’acceptance]
*** FIN US ***

Ta tâche consiste à : 
Effectuer une évaluation critique multi-étapes de la qualité des cas de test générés, en considérant les dimensions suivantes (chaque étape doit être notée, argumentée et si nécessaire, accompagnée de recommandations correctives) :

## Étapes d’évaluation

### Étape 1 : Couverture fonctionnelle

Voici la liste des cas de tests obtenus par un LLM pour assurer une bonne couverture de test de cette US : 
*** DEBUT LISTE CAS DE TEST ***
[liste des cas de test de l’US ]
*** FIN LISTE CAS DE TEST ***

Ta tâche consiste à fournir sous forme de tableau les rapprochements entre les cas de tests fournis, en ignorant les doublons, et la couverture fonctionnelle de l’US fournies (avec ou sans test d’acceptances)

- Liste des fonctionnalités de l’US
- Indiquer si la fonctionnalité est couverte (oui / non) par un ou plusieurs cas de tests
- Préciser le ou les cas de tests associés (ID & description du cas de tests)

Précise ensuite dans un autre tableau si des tests ne couvrent aucune fonctionnalité ou si tu constates des doublons en indiquant : 
- Id et description du cas de tests
- Si doublon en indiquant l’ID du doublon ou si le cas de test ne couvre aucune fonctionnalité

Pour les fonctionnalités non couvertes, Indique si les cas constatés sont trop génériques et s’ils doivent être plus précis en proposant des alternatives.

Calcule ensuite la couverture de test entre les fonctionnalités et les de tests fournis, c’est-à-dire que si 7 cas de tests de la liste obtenue ont un rapprochement parmi les 22 de la liste attendue, le pourcentage de couverture est de 32 %. 
Utilise la valeur de la colonne Rapprochement pour effectuer ce calcul.

### Étape 2 : Qualité rédactionnelle et conformité au standard IEEE 829

Détermine la qualité rédactionnelle et conformité au standard IEEE 829, à savoir si le format des cas de test suit une structure normalisée. 
Exemple de structure normalisée : ID, prérequis, description, résultats attendus, post-conditions

Vérifie si le langage est clair, non ambigu, cohérent avec la terminologie normalisée de l’IEEE 610.12 
Identifie toute terminologie floue, ambigüe ou incorrecte
Donne une note indiquant dans quelle mesure chaque cas de test répond à la qualité rédactionnelle et conformité au standard IEE 829 en utilisant l’échelle suivante, pour construire ta réponse :  
- A : Le cas de test est excellent : il est pertinent, direct, détaillé et répond à toutes les préoccupations liées aux fonctionnalités de l’US. 
- B : Le cas de test est globalement utile : il fournit une aide, mais pourrait encore être amélioré. 
- C : Le cas de test est globalement inutile : il manque certains aspects clés des fonctionnalités de l’US. 
- D : Le cas de test est complètement hors de propos : il est totalement non relié aux fonctionnalités de l’US, ou très partiel. 

Donne ton avis sous la forme d’un tableau avec :
- ID du cas de test, 
- Description du cas de test, 
- Note (ta note, de A à D) et 
- Justification (un commentaire de ta part en 100 mots maximum justifiant ta note). 
- Vérifie que tu as bien mis une note à tous les cas de test et synthétise les points forts, les points faibles de la qualité rédactionnel de ces cas de test et les améliorations possibles. 

### Étape 3 : Traçabilité aux exigences (selon IREB)

Chaque cas de test est-il traçable à un ou plusieurs éléments de l’US ?
Y a-t-il des tests superflus ou redondants sans justification ?
La relation entre exigences et tests est-elle bidirectionnelle (tests → exigences et exigences → tests) ?

### Étape 4 : Qualité intrinsèque des tests (selon ISTQB)

Les tests sont-ils indépendants ? Réutilisables ? Maintenables ?
Le niveau de granularité est-il pertinent ?
Sont-ils automatisables ?
Ont-ils un objectif de test explicite (fonctionnel, non-fonctionnel, performance, sécurité, etc.) ?

### Étape 5 : Pertinence stratégique et disruptive

Les tests stimulent-ils réellement la robustesse du système, ou ne valident-ils que le nominal ?
Quelles hypothèses implicites ces tests valident-ils sans les remettre en question ?
Propose des contre-tests qui mettraient en défaut l’US ou révèleraient des failles d’expression ou de conception

### Étape 6 : Recommandations

Propose une refonte de certains cas si nécessaire
Mentionne les angles morts dans la conception actuelle
Évalue si les tests générés peuvent contribuer à la prévention des défauts ou s’ils se limitent à la détection

### Format de réponse attendu :

Structure l’évaluation de chaque étape avec :
- Diagnostic
- Exemples illustratifs (si besoin)
- Critiques constructives
- Recommandations concrètes

Attend ma validation pour continuer entre chaque étape. 

```
---
## Evaluations

### Méthode d’évaluation​

- ...

### Métriques utilisées

- ...

### Score de confiance (sur la qualité du résultat)

- ...

### Résultats (éventuellement par LLM)​

---
## Limitations connues​

- ...