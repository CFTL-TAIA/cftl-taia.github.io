---
sidebar_position: 1
---

# Fiche cas d'usage 
<span style={{color: "red"}}>**A RELIRE**</span>

Utilisation d’une IA générative pour produire automatiquement des scripts de test API (en langage Gherkin avec Karate) à partir de la documentation Swagger d’une API RESTful.

---
## Fiche d'identité du cas d'usage
**Auteurs** : Njila Pierick & Nabil Idhammou

---
## Problématique(s) traitée(s)  
- Temps important consacré à l’écriture manuelle des tests API.  
- Risque d’incohérence entre la documentation Swagger et les tests rédigés manuellement.  
- Difficulté pour les équipes non techniques à rédiger des tests automatisés malgré une documentation disponible.  
- Besoin de mise à jour rapide des suites de tests lors de l’évolution des API.

---

## Groupe d’activité de test ISTQB  
- **Conception des tests (Test Design)**  
- **Implémentation et exécution des tests (Test Implementation and Execution)**  
- **Maintenance des tests (Test Maintenance)**  

---

## Types de tests  
- Tests fonctionnels API  
- Tests de contrat (contract testing)  
- Tests de non-régression  

---
## Métier / Profil  
- Testeurs automatisés  
- QA Engineers / SDETs  
- Développeurs ayant une responsabilité QA  
- Product Owners / Analystes techniques avec une approche BDD  
- Equipes agiles (Scrum, Kanban, DevOps)

---
## Bénéfices attendus / constatés (Méthode d’évaluation du ROI)  
- **Réduction du temps de conception et d’implémentation** : automatisation d'une tâche répétitive.  
- **Augmentation de la couverture de test** grâce à l’exploitation systématique des endpoints documentés.  
- **Réduction des erreurs humaines** dans la mise en œuvre des tests.  
- **Meilleur alignement test / documentation** : les tests reflètent fidèlement le Swagger.  
- **Montée en compétence rapide de profils non techniques** grâce à la simplicité du format généré (Gherkin).

**Méthodes d’évaluation du ROI :**  
- Comparaison du temps homme/jour avant et après implémentation.  
- Nombre de cas générés automatiquement vs manuellement.  
- Analyse des bugs détectés en préproduction ou production.  
- Feedback qualitatif des utilisateurs (équipes QA/Dev).

---
## Évaluation du ROI  

| Indicateur                        | Avant IA         | Après IA        | Gain estimé            |
|----------------------------------|------------------|-----------------|-------------------------|
| Temps moyen d’écriture/test      | 2h par endpoint  | 15 min / endpoint | ~87,5 %                 |
| Couverture de test (Swagger)     | ~40 %            | ~90 %           | +50 points              |
| Réactivité aux changements API   | Faible           | Forte           | Réduction du lead time  |

---
## Risques  
- Qualité des tests dépendante de la complétude du fichier Swagger.  
- Besoin de relecture humaine pour valider la pertinence des scénarios générés.  
- Manque de contextualisation métier (cas limites, données de test spécifiques).  
- Risque d’utilisation "boîte noire" sans compréhension du fonctionnement des tests.  
- Problème de maintenance si l’IA génère du code difficile à adapter à long terme.

---
## Ressources  
- Documentation Swagger / OpenAPI  
- Framework [Karate DSL](https://github.com/karatelabs/karate)  
- Outils d’IA générative intégrés (ChatGPT, Copilot, etc.)  
- Plateforme de CI/CD (Jenkins, GitLab CI, etc.)  
- Supervision humaine / Revue de code

---
## Références  
- ISTQB CTFL Syllabus v4.0 – Chapitre "Test Design"  
- OpenAPI Specification 3.0  
- Karate Labs Documentation  
- Études sur l’IA dans la génération de code (GitHub Copilot, OpenAI Codex)  
- IEEE 29119 sur les artefacts de test  
- Retours d’expérience sur l’utilisation de l’IA en test automatisé (articles Medium, blogs QA)
