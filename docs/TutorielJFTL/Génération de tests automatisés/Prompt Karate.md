---
sidebar_position: 2
---

# Prompt Karate
Generer des tests API automatisés avec KARATE en prenant comme données en entrée un Swagger

---
## Description courte de la tâche​
- Rédiger des cas de test d'API complets dans la syntaxe Gherkin, sur la base de la spécification Swagger.

---
## Description détaillée de la tâche
### Eléments analysés
- Un Swagger

### Méthodes de conception possibles
- ...

### Structure des cas de test

- Formalisme Gherkin( langage structuré et lisible par l'homme)
- 
---
## Information du document

#### Version 1.0
#### Date : 03/06/2025
#### Etat : Validé
#### Concepteurs : Pierick Njila (Zenity), Nabil Idhammou (Onepoint)
#### Evaluateurs : Alain Ribault (Kereval), Michael Granier (Nocode Testing)
---
## Prérequis
- Avoir à disposition le Swagger (ou l'image GraphQL)
- Documentation du Swagger à jour

---
## Entrée
- Un Swagger ou un GraphQL
- Les tests en Gherkin (étapes 2)

---
## Recommandation d'usage
- Tests d'API indépendants de l'interface utilisateur
- Une vérification humaine reste nécessaire 

---
## Sortie
- Des tests API en Gherkin
- Les features Karate
- Un projet complet karate à partir de l'API et des tests en Gherkin


---
## Exemple entrée / sortie

### Entrée

(https://petstore.swagger.io/)

### Sortie 

```
karate-api-tests/
├── pom.xml
├── src/
│   ├── test/
│   │   ├── java/
│   │   │   └── examples/
│   │   │       └── runners/
│   │   │           └── TestRunner.java
│   │   └── resources/
│   │       ├── features/
│   │       │   ├── pet/
│   │       │   │   ├── PetCrud.feature
│   │       │   │   └── PetErrorsAndSearch.feature
│   │       │   ├── store/
│   │       │   │   └── StoreOrder.feature
│   │       │   └── user/
│   │       │       └── UserAccount.feature
│   │       └── karate-config.js

== POM ==
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.example</groupId>
  <artifactId>karate-api-tests</artifactId>
  <version>1.0.0</version>
  <packaging>jar</packaging>

  <name>karate-api-tests</name>

  <properties>
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
    <karate.version>1.4.1</karate.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>com.intuit.karate</groupId>
      <artifactId>karate-junit5</artifactId>
      <version>$\{karate.version\}</version>
      <scope>test</scope>
    </dependency>

    <dependency>
      <groupId>io.cucumber</groupId>
      <artifactId>cucumber-java</artifactId>
      <version>7.14.0</version>
      <scope>test</scope>
    </dependency>

    <dependency>
      <groupId>io.cucumber</groupId>
      <artifactId>gherkin</artifactId>
      <version>26.0.0</version>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>3.1.2</version>
        <configuration>
          <includes>
            <include>**/TestRunner.java</include>
          </includes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>

== Karate-config.js ==

function fn() {
  var config = {
    baseUrl: 'https://petstore.swagger.io/v2'
  \};
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 10000);
  return config;
}
== TestRunner.java ==
package examples.runners;

 import com.intuit.karate.junit5.Karate;

public class TestRunner {

    @Karate.Test
    Karate testAll() {
        return Karate.run("classpath:features/pet",
                          "classpath:features/store",
                          "classpath:features/user")
                      .relativeTo(getClass());
    }
}


```

== Feature ==
Feature: Pet API - CRUD Operations for High-Impact Functionality

Background:
  * url baseUrl
  * def petId = 1001

Scenario: Create a new pet with valid data
  Given request \{ id: #(petId), name: 'Fluffy', status: 'available' \}
  When method POST
  And path '/pet'
  Then status 200
  And match response == \{ id: #(petId), name: 'Fluffy', status: 'available' \}

Scenario: Retrieve pet by ID after creation
  Given path '/pet', petId
  When method GET
  Then status 200
  And match response.id == petId
  And match response.name == 'Fluffy'
  And match response.status == 'available'

Scenario: Update an existing pet's status
  Given request \{ id: #(petId), name: 'Fluffy', status: 'sold' \}
  When method PUT
  And path '/pet'
  Then status 200
  And match response.id == petId
  And match response.status == 'sold'

Scenario: Delete an existing pet
  Given path '/pet', petId
  When method DELETE
  Then status 200

Scenario: Attempt to retrieve a deleted pet
  Given path '/pet', petId
  When method GET
  Then status 404


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
