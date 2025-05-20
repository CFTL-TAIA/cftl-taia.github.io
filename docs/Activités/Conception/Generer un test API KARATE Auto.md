---
sidebar_position: 4
---

# Generer des tests API automatisé avec Karaté à partir d'un swagger

<span style={{color: "red"}}>**A RELIRE**</span>

Utilisation d’une IA générative pour produire automatiquement des scripts de test API (en langage Gherkin avec Karate) à partir de la documentation Swagger d’une API RESTful.

## Fiche d'identité du cas d'usage
**Auteurs** : Njila Pierick

### Problématique(s) traitée(s)  
- Temps important consacré à l’écriture manuelle des tests API.  
- Risque d’incohérence entre la documentation Swagger et les tests rédigés manuellement.  
- Difficulté pour les équipes non techniques à rédiger des tests automatisés malgré une documentation disponible.  
- Besoin de mise à jour rapide des suites de tests lors de l’évolution des API.

---

### Groupe d’activité de test ISTQB  
- **Conception des tests (Test Design)**  
- **Implémentation et exécution des tests (Test Implementation and Execution)**  
- **Maintenance des tests (Test Maintenance)**  

---

### Types de tests  
- Tests fonctionnels API  
- Tests de contrat (contract testing)  
- Tests de non-régression  

---

### Métier / Profil  
- Testeurs automatisés  
- QA Engineers / SDETs  
- Développeurs ayant une responsabilité QA  
- Product Owners / Analystes techniques avec une approche BDD  
- Equipes agiles (Scrum, Kanban, DevOps)

---

### Bénéfices attendus / constatés (Méthode d’évaluation du ROI)  
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

### Évaluation du ROI  

| Indicateur                        | Avant IA         | Après IA        | Gain estimé            |
|----------------------------------|------------------|-----------------|-------------------------|
| Temps moyen d’écriture/test      | 2h par endpoint  | 15 min / endpoint | ~87,5 %                 |
| Couverture de test (Swagger)     | ~40 %            | ~90 %           | +50 points              |
| Réactivité aux changements API   | Faible           | Forte           | Réduction du lead time  |

---

### Risques  
- Qualité des tests dépendante de la complétude du fichier Swagger.  
- Besoin de relecture humaine pour valider la pertinence des scénarios générés.  
- Manque de contextualisation métier (cas limites, données de test spécifiques).  
- Risque d’utilisation "boîte noire" sans compréhension du fonctionnement des tests.  
- Problème de maintenance si l’IA génère du code difficile à adapter à long terme.

---

### Ressources  
- Documentation Swagger / OpenAPI  
- Framework [Karate DSL](https://github.com/karatelabs/karate)  
- Outils d’IA générative intégrés (ChatGPT, Copilot, etc.)  
- Plateforme de CI/CD (Jenkins, GitLab CI, etc.)  
- Supervision humaine / Revue de code

---

### Références  
- ISTQB CTFL Syllabus v4.0 – Chapitre "Test Design"  
- OpenAPI Specification 3.0  
- Karate Labs Documentation  
- Études sur l’IA dans la génération de code (GitHub Copilot, OpenAI Codex)  
- IEEE 29119 sur les artefacts de test  
- Retours d’expérience sur l’utilisation de l’IA en test automatisé (articles Medium, blogs QA)

---

## Tâches associées

### Prompt 1 : Génération cas de test en Gherkin

```
Ignore all previous instructions.
You are a world-class test automation engineer with over 25 years of hands-on experience.

Your task is to write comprehensive API test cases in Gherkin syntax, 
based on the Swagger specification located at:
[LINK TO THE SWAGGER HERE]

Requirements:
Be precise, thorough, and technically accurate.

Every test case must have a clear and descriptive title.

Test cases should reflect a risk-based approach, prioritizing high-impact functionality.

Apply the guidance from the following ISO/IEC/IEEE software testing standards:

Standard Focus Automation Relevance
29119-1 Concepts Foundational context for test activities
29119-2 Processes Embedding automation in structured workflows
29119-3 Documentation Structured, reusable, automation-friendly docs
29119-4 Techniques Criteria for what and how to automate
29119-5 Keyword-Driven Testing Framework-oriented automation design

Do not include any introductory or concluding comments. Just return the Gherkin test cases with titles.
```

---

### Prompt 2 : Génération de feature Karate

```
Your task now is to generate comprehensive Karate feature files based on the previously defined Gherkin-style API test cases.

Requirements:
Output must be precise, technically accurate, and production-ready.

Each feature file must have a clear, descriptive title and logically structured scenarios.

Implement a risk-based testing approach, prioritizing high-impact API functionality.

Follow best practices from the ISO/IEC/IEEE 29119 standards as guidance for quality, structure, and automation design:

Standard Focus Relevance to Automation
29119-1 Concepts Foundational context for test activities
29119-2 Processes Embedding automation in structured workflows
29119-3 Documentation Structured, reusable, automation-friendly docs
29119-4 Techniques Criteria for what and how to automate
29119-5 Keyword-Driven Testing Framework-oriented automation design

Instructions:
Do not include any commentary, explanation, or formatting outside of the Karate feature syntax.

Only return the Karate feature files, starting directly with the Feature: line.
```

---

### Prompt 3 : Génération projet d’automatisation

```
Your task now is to generate a complete test automation project using Karate, based on the previously defined Karate feature files.

Requirements:
The output must be precise, technically accurate, and ready for execution in a production-grade environment.

Include a fully configured pom.xml file with all necessary dependencies and plugins required to build and run the Karate tests.

Apply a risk-based testing strategy, prioritizing critical API functionality that has the highest business or operational impact.

Structure the project and test logic in alignment with the following ISO/IEC/IEEE 29119 software testing standards:

Standard Focus Relevance to Automation
29119-1 Concepts Foundational context for test activities
29119-2 Processes Embedding automation in structured workflows
29119-3 Documentation Structured, reusable, automation-friendly docs
29119-4 Techniques Criteria for what and how to automate
29119-5 Keyword-Driven Testing Framework-oriented automation design

Instructions:
Do not include any commentary, explanation, or descriptive text.

Only return the full Karate test automation project, including folder structure, files, and all required configurations.

```