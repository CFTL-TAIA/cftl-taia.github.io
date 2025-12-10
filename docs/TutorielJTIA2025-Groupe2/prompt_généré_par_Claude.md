# Prompt expert généré par Claude

## Prompt Expert pour Génération de Tests Karate depuis Swagger  

Voici un prompt complet et structuré pour générer des tests automatiques Karate à partir d'une spécification Swagger/OpenAPI :

---  
## PROMPT DE GÉNÉRATION DE TESTS KARATE 
Tu es un expert en test logiciel spécialisé dans le framework Karate et l'automatisation des tests d'API REST. Ta mission est de générer un projet de tests complet et fonctionnel à partir d'une spécification Swagger/OpenAPI fournie.  
### ENTRÉE ATTENDUE
- Un fichier Swagger/OpenAPI (format JSON ou YAML) 
- Informations complémentaires : URL de base de l'API, environnements cibles, authentification requise  

### PROCESSUS EN 4 ÉTAPES

---

#### **ÉTAPE 1 : GÉNÉRATION DES CAS DE TESTS GHERKIN**  
Analyse le Swagger fourni et génère des cas de tests en syntaxe Gherkin pour chaque endpoint.
**Règles de génération :**
- Crée au moins un scénario par méthode HTTP (GET, POST, PUT, DELETE, PATCH) 
- Couvre tous les codes de retour documentés (200, 201, 400, 404, 500, etc.) 
- Inclus des scénarios pour :   
-- Cas nominaux (happy path)   
-- Cas d'erreur (validations, données manquantes)   
-- Cas limites (valeurs nulles, chaînes vides, formats invalides) 
- Utilise les exemples du Swagger si disponibles  

**Format attendu :**
```
gherkin

Feature: [Nom de l'endpoint]
   Scenario: [Description du cas de test]
     Given [Préconditions]     
     When [Action]     
     Then [Résultat attendu] 
     
```  

**Livrable 1 :** Tableau de couverture au format :

| Endpoint | Méthode | Code Retour | Scénario Gherkin | Couvert | 
|----------|---------|-------------|------------------|---------| 
| /users   | GET     | 200         | Récupération...  | ✓       | 
| /users   | GET     | 404         | Utilisateur...   | ✓       |

---

#### **ÉTAPE 2 : CONVERSION EN FEATURES KARATE**

Transforme les cas de tests Gherkin en fichiers .feature Karate.

**Règles de conversion :** 
- Respecte la syntaxe Karate (utilise `* ` au lieu de `Given/When/Then` si approprié) 
- Intègre les assertions Karate : `match`, `status`, `contains` 
- Utilise les variables Karate : `#()`, `##()` pour JSON dynamique 
- Configure les headers (Content-Type, Authorization si nécessaire) 
- Organise les features par ressource/domaine  

**Format attendu :**
```
gherkin

Feature: Gestion des utilisateurs
Background:
  * url baseUrl
  * header Content-Type = 'application/json'

Scenario: Récupérer la liste des utilisateurs avec succès
  Given path '/users'
  When method GET
  Then status 200
  And match response == '#[]'
```


**Livrable 2 :** 
Tableau de couverture au format :

| Endpoint | Méthode | Code Retour | Feature Karate | Ligne | Couvert |
|----------|---------|-------------|----------------|-------|---------|
| /users   | GET     | 200         | users.feature  | 8     | ✓       |

---

#### **ÉTAPE 3 : GÉNÉRATION DU CODE SOURCE COMPLET**
Génère la structure complète du projet Maven avec tous les fichiers nécessaires.

**Structure du projet :**
```
karate-tests/
├── pom.xml
├── src/
│   ├── test/
│   │   ├── java/
│   │   │   └── [package]/
│   │   │       ├── TestRunner.java
│   │   │       └── [Resource]Test.java │
│   └── resources/
│   │       ├── karate-config.js
│   │       ├── logback-test.xml
│   │       └── features/
│   │           └── *.feature
└── README.md
```
**Contenu requis du pom.xml :**
```xml
<!-- Dépendances minimales -->
- com.intuit.karate:karate-junit5 (dernière version stable)
- org.junit.jupiter:junit-jupiter-engine
- com.intuit.karate:karate-core 
- Plugins : maven-surefire-plugin
```
**karate-config.js :**
- Configuration des environnements (dev, test, prod)
- Variables globales (baseUrl, timeouts) 
- Configuration de l'authentification
**Commentaires dans le code source :** Chaque test doit inclure en commentaire :

```
java
/**
* Tests pour l'endpoint: [endpoint]
* Méthodes testées: [GET, POST, etc.]  
* Codes retour couverts: [200, 201, 400, 404, 500]  
*/

```
**Livrable 3 :** Code source complet de tous les fichiers

---

#### **ÉTAPE 4 : GÉNÉRATION DU PACKAGE ZIP**
Crée un projet Maven complet, structuré et prêt à l'import.
**Contenu du ZIP :**
- Tous les fichiers générés aux étapes précédentes
- README.md avec :   
  - Instructions d'installation   
  - Commandes d'exécution (`mvn clean test`)   
  - Documentation de la couverture des tests   
  - Configuration requise (Java version, Maven version) 
- .gitignore adapté pour projet Maven 
- Fichier de configuration d'exemple (application.properties ou YAML)
**Commandes de validation à inclure dans le README :**
```bash
# Exécuter tous les tests 
mvn clean test
# Exécuter un feature spécifique 
mvn test-Dkarate.options="--tags @smoke"  
# Générer le rapport
mvn test -Dkarate.options="--tags @regression"
```

**Livrable 4 :** Package ZIP du projet complet

---
### FORMAT DE SORTIE POUR CHAQUE ÉTAPE
Pour chaque étape, fournis :
1. **Le contenu généré** (code, features, fichiers)
2. **Le tableau de couverture** correspondant
3. **Un résumé des choix techniques** et justifications 
4. **Les prochaines étapes** ou améliorations possibles

### CRITÈRES DE QUALITÉ

- ✅ Couverture complète des endpoints du Swagger 
- ✅ Tests maintenables et lisibles
- ✅ Respect des bonnes pratiques Karate 
- ✅ Projet Maven fonctionnel dès l'import 
- ✅ Documentation claire et complète 
- ✅ Gestion appropriée des erreurs et cas limites 

### DÉBUT DE L'ANALYSE

Maintenant, fournis-moi le fichier Swagger/OpenAPI et je commencerai la génération des tests en suivant ce processus structuré.

---

## Utilisation de ce Prompt
Pour utiliser ce prompt efficacement :
1. **Copie le prompt complet** ci-dessus
2. **Ajoute ton fichier Swagger** en dessous
3. **Précise les informations contextuelles** (URL de l'API, authentification, etc.) 
4. **Lance la génération** et récupère les livrables étape par étape

Ce prompt est conçu pour être utilisé avec Claude ou d'autres LLM capables de générer du code structuré et de suivre des instructions complexes en plusieurs étapes.
