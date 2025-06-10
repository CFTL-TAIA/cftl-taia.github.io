---
sidebar_position: 2
---

# Prompt Karate
Generer des tests API automatisé avec KARATE avec un Swagger

---
## Description courte de la tâche​
- ...

---
## Description détaillée de la tâche
### Eléments analysés
- ...

### Méthodes de conception possibles
- ...

### Structure des cas de test

- ...

---
## Prérequis
- ...

---
## Entrée
- Un Swagger ou un GraphQL
- Les tests en Gherkin (étapes 2)

---
## Recommandation d'usage
- ...

---
## Sortie
- Des tests API en Gherkin
- Un projet complet karate à partir de l'API et des tests en Gherkin
- Les features Karate

---
## Exemple entrée / sortie

### Entrée

...

### Sortie 

...

---
## Prompt

---
### ETAPE 1

#### SWAGGER

```
Ignore all previous instructions.
You are a world-class test automation engineer with over 25 years of hands-on experience.
Your task is to write comprehensive API test cases in Gherkin syntax, based on the Swagger specification located at:
https://petstore.swagger.io/v2/swagger.json
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

#### GRAPQL

```
Ignore all previous instructions.
You are a world-class test automation engineer with over 25 years of hands-on experience.
Your task is to write comprehensive API test cases in Gherkin syntax, based on the GraphQL specifications located at:
https://countries.trevorblades.com/
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
### ETAPE 2

```
Your task now is to generate comprehensive Karate feature files based on the previously defined Gherkin-style API test cases.
Requirements:
Output must be precise, technically accurate, and production-ready.

Each feature file must have a clear, descriptive title and logically structured scenarios.

Implement a risk-based testing approach, prioritizing high-impact API functionality.

Follow best practices from the ISO/IEC/IEEE 29119 standards as guidance for quality, structure, and automation design:

Standard Focus Automation Relevance
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
### ETAPE 3

```
Your task now is to generate a complete test automation project using Karate, based on the previously defined Karate feature files.
Requirements:
The output must be precise, technically accurate, and ready for execution in a production-grade environment.


Include a fully configured pom.xml file with all necessary dependencies and plugins required to build and run the Karate tests.


Apply a risk-based testing strategy, prioritizing critical API functionality that has the highest business or operational impact.

Structure the project and test logic in alignment with the following ISO/IEC/IEEE 29119 software testing standards:

Standard Focus Automation Relevance
29119-1 Concepts Foundational context for test activities
29119-2 Processes Embedding automation in structured workflows
29119-3 Documentation Structured, reusable, automation-friendly docs
29119-4 Techniques Criteria for what and how to automate
29119-5 Keyword-Driven Testing Framework-oriented automation design

Instructions:
Do not include any commentary, explanation, or descriptive text.

Only return the full Karate test automation project, including folder structure, files, and all required configurations.

```