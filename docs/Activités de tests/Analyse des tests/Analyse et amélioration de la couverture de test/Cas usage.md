---
sidebar_position: 3
---

# Analyse et amélioration de la couverture de test

<span style={{color: "red"}}>**A RELIRE**</span>

Ce cas d’usage consiste à utiliser l’IA générative pour analyser automatiquement la couverture de test (fonctionnelle, exigentielle ou code) et identifier les zones non testées. L’objectif est d’optimiser les efforts de test en renforçant la qualité et la traçabilité tout en réduisant les risques liés aux oublis.

## Fiche d'identité du cas d'usage
**Auteurs** : Jean-Christophe Poutet, Michael Granier

### Problématique(s) traitée(s)  
- Manque de visibilité sur ce qui est effectivement couvert par les tests (fonctionnalités, exigences, code).  
- Difficulté à prioriser les efforts de test et d’automatisation en fonction des zones critiques ou non testées.  
- Faible traçabilité entre les exigences métier et les cas de test.  
- Absence de méthode fiable pour identifier les lacunes de couverture dans les projets Agile ou en CI/CD.  

---

### Groupe d’activité de test ISTQB  
- **Évaluation des critères de sortie et reporting (Evaluating Exit Criteria and Reporting)**  
- **Contrôle des tests (Test Monitoring and Control)**  
- **Analyse des tests (Test Analysis)**  
- **Amélioration continue des processus de test (Test Process Improvement)**  

---

### Types de tests  
- Tests fonctionnels (manuels ou automatisés)  
- Tests basés sur les exigences  
- Tests de non-régression  
- Tests structuraux (tests boîte blanche – condition, décision, chemin)  
- Tests exploratoires (via ciblage intelligent de zones non couvertes)  

---

### Métier / Profil  
- Test managers / QA leads  
- Test analysts / testeurs manuels  
- Testeurs automatisés / SDETs  
- Product Owners / Business Analysts  
- Développeurs impliqués dans la qualité  
- Responsables qualité / auditeurs internes  

---

### Bénéfices attendus / constatés (Méthode d’évaluation du ROI)  
- **Identification des lacunes de test** (fonctionnalités non testées, exigences non couvertes).  
- **Optimisation des efforts de test** : recentrage sur les zones critiques ou exposées.  
- **Amélioration de la qualité produit** via une meilleure couverture fonctionnelle et structurelle.  
- **Gain de temps** dans les audits de test, grâce à des rapports automatisés et contextualisés.  
- **Renforcement de la traçabilité** exigences → tests → exécutions.  
- **Support à la stratégie de test basée sur le risque** grâce à l’analyse historique des tests.  

---

**Méthodes d’évaluation du ROI :**  
- Taux de couverture des exigences avant/après usage de l’IA.  
- Réduction des défauts détectés en production liés à des zones non testées.  
- Temps nécessaire pour produire un rapport de couverture.  
- Nombre d’actions correctrices ou de cas de test supplémentaires identifiés par l’IA.  
- Feedback des parties prenantes sur la lisibilité des rapports.

---

### Evaluation du ROI  

| Indicateur                              | Avant IA        | Après IA       | Gain estimé             |
|----------------------------------------|------------------|----------------|--------------------------|
| Couverture fonctionnelle (spécifications) | ~60 %            | ~90 %          | +30 points               |
| Détection des trous de test              | Manuel, incomplet | Automatisée    | +80 % de rapidité        |
| Temps de production des rapports         | 2 jours          | 1h             | -95 %                    |
| Bugs en production liés à une mauvaise couverture | Fréquents | Rares         | -70 %                    |

---

### Risques  
- Mauvaise interprétation des rapports générés par l’IA (faux positifs ou négatifs).  
- Dépendance excessive aux suggestions automatiques sans validation humaine.  
- Nécessité d’un alignement sur une stratégie de test claire pour tirer parti des recommandations.  
- Difficulté à intégrer l’outil d’IA aux outils existants (ALM, gestion des exigences, CI/CD).  
- Données de base incomplètes (exigences non formalisées, code non instrumenté).  

---

### Ressources  
- IA générative avec capacité d’analyse de code, de référentiel de test, de backlog et de trace d’exécution.  
- Outils de gestion de tests (TestLink, Xray, Zephyr, TestRail…).  
- Outils de couverture de code (Jacoco, Istanbul, Coverage.py…).  
- Backlog Agile (Jira, Azure DevOps…)  
- Référentiels d’exigences ou user stories.  
- Collaboration entre testeurs, PO et développeurs.  

---

### Références  
- ISTQB CTFL v4.0 – Chapitres sur la couverture de test, la mesure, l’analyse de risque  
- IEEE 829 – Standard for Software Test Documentation  
- IEEE 29119 – Software Testing Standards (Test process, Test design techniques)  
- ISO/IEC/IEEE 29148 – Ingénierie des exigences  
- Études de cas sur l’optimisation de la couverture de test assistée par IA (blogs QA, rapports industriels)  

---

## Tâches associées

### Prompt : LLM as a Judge
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

