---
sidebar_position: 1
---

# Analyse et amélioration de la couverture de test

<span style={{color: "red"}}>**IN PROGRESS - A RELIRE**</span>

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

