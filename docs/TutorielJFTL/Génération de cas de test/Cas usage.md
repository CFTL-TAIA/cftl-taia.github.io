---
sidebar_position: 1
---

# Cas d'usage
Utiliser l'IA générative pour transformer automatiquement des User Stories exprimées en langage naturel en cas d'utilisation structurés (use cases), afin d'améliorer la compréhension fonctionnelle et la couverture des scénarios métier.

---
## Fiche d'identité du cas d'usage
**Auteurs** : David James (AXA France) & Etienne Dufour (AXA France)

---
### Problématique(s) traitée(s) 
- Traduction imprécise des User Stories en cas d’utilisation exploitables pour les tests.
- Perte d’informations ou interprétations divergentes entre PO, testeurs et développeurs.
- Manque de temps pour formaliser les use cases dans les équipes agiles.    
- Faible réutilisation des cas d’utilisation pour les tests automatisés ou manuels.

---

### Groupe d’activité de test ISTQB
- Analyse des tests
- *Conception des tests*
- exécution des tests

---

### Types de tests
- Tests fonctionnels
- Tests d’acceptation
- Tests basés sur les scénarios utilisateur
- Tests automatisés (modèle réutilisable pour les scripts)

---

### Métier / Profil
- Product Owners
- Testeurs fonctionnels / QA Analysts
- Testeurs automatisation
- Business Analysts
- Développeurs (pour intégration dans des pipelines BDD / TDD)

---

### Bénéfices attendus / constatés 
- Gain de temps dans la formalisation des cas d'utilisation.
- Amélioration de la couverture fonctionnelle.
- Réduction des écarts d'interprétation métier/technique.
- Support à la conception de tests automatisés via des cas d'utilisation clairs.
- Réduction des anomalies liées à une mauvaise compréhension du besoin.

---

### Evaluation du ROI (KPI) 
- % de couverture des exigences via les use cases générés.
- Temps moyen gagné par User Story analysée.
- Réduction du taux d’anomalies de compréhension en phase de recette.
- Taux de réutilisation des use cases dans les scripts de test automatisés.

---

### Risques
- Mauvaise interprétation des User Stories si mal rédigées.
- Biais dans la génération automatique (non-exhaustivité, redondances).
- Risque de surconfiance : validation humaine indispensable.
- Problèmes de confidentialité si les données sont traitées hors des systèmes internes.

---

### Ressources 
- Outils d’IA générative (ex : ChatGPT, Claude, Gemini, etc.)
- User Stories bien rédigées, dans un format clair (Given/When/Then, ou INVEST)
- Template de use case (nom, acteurs, scénario principal, extensions, préconditions)
- Scripts de validation humaine (revue PO/testeur)

---

### Références

- ISTQB Glossaire & syllabus Fondation & Agile
- IEEE 830 – Software Requirements Specifications
- Articles spécialisés sur la transformation NLP vers modèle UML / BDD
- Retours d’expérience de la communauté (ex. Ministry of Testing, forums Agiles)

---