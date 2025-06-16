---
sidebar_position: 1
---

# Cas d'usage
Utiliser l'IA générative pour générer des cas de test fonctionnels et non fonctionnels à partir:
De tout type de spécifications : exigences fonctionnelles, non fonctionnelles, spécifications, user stories (avec/sans critères d’acceptance), capture d’écran(s)/d’IHM, diagrammes de spécification (diagrammes de transition d’état, modèle de données, …), d’éléments techniques (swagger d’API, description d’interface de service, …),
D’éléments de contexte (contexte Métier, fonctionnel, applicatif, technique, …)
Les éléments générés pourraient être, par exemple, des conditions de test (liste des éléments à tester), des cas de test (étapes, préconditions, données, résultats attendus), des titres de test, des scénarios de test (regroupement de cas de test), ...

Les formats peuvent être variés : langage naturel, format Gherkin, tableau, …
La génération de script de tests automatisés est hors périmètre.

---
## Fiche d'identité du cas d'usage
**Auteurs** : David James (AXA France) - Etienne Dufour (AXA France)

---
### Problématique(s) traitée(s) 
- Standardisation des éléments générés
- Automatisation de la génération de cas de test

---

### Groupe d’activité de test ISTQB
- Analyse des tests
- Conception des tests

---

### Types de tests
- **Potentiellement tout niveau de test** : tests de composant, d’intégration de composants, tests système, d’intégration de système, d’acceptation
- **Potentiellement tout type de test** : tests fonctionnels, tests non fonctionnels (performance, sécurité, résilience, accessibilité, …), tests boite blanche / boite noire, tests exploratoires (chartes)

---

### Métier / Profil
- Testeurs fonctionnels 
- Testeurs automatisation
- Éventuellement développeurs , Product Owners, Analystes Métier

---

### Bénéfices attendus / constatés 
- Analyse fine des exigences
- Réduction des écarts d'interprétation des spécifications 
- Choix justifié des méthodes de conception de cas de test
- Gain de temps dans la génération des cas de test
- Facilité à intégrer les résultats générés dans un gestionnaire de test (Xray, ALM, …).
- Amélioration de la couverture
- Réduction des anomalies liées à une mauvaise compréhension du besoin

---

### Evaluation du ROI (KPI) 
- % de couverture des exigences
- Temps moyen gagné (avec / sans IA)
- Réduction du taux d’anomalies dans les différentes phases de test

---

### Risques
- Exigences pas assez précises pour pouvoir générer des cas de tests pertinents
- Mauvaise génération du fait d’exigences de mauvaise qualité ou par manque d’informations de contexte (les exigences ne suffisent pas)
- Perte de connaissance de la part des testeur (le rôle du testeur se réduit à la validation des cas de test générés)

---

### Ressources 
- Spécifications (fonctionnelles ou techniques)
- Informations de contexte (Métier, fonctionnel, applicatif, technique, …)
- Outils d’IA générative (ex : ChatGPT, Claude, Gemini, etc.)


---

### Références

- Qualité Logicielle & Tests : ISTQB (Fondation et niveau avancé Analyste de test), normes IEEE (610.12, 830), normes - ISO (29119, 29148, 25010), IREB (critères de qualité des exigences). 	
- Sécurité : ISO 27001, IEC 61508-3, GDPR/RGPD, NIST, OWASP, PTES.
- Résilience et Continuité : ISO 25010 (Fiabilité), ISO 22301, DORA, SRE, Chaos Engineering.
- Performance: ISO 25010 (Efficacité de la Performance), ISTQB Performance Testing.
- Accessibilité : RGAA, WCAG.

---