---
sidebar_position: 2
---

# Fiche prompt Analytique
Créer des cas de tests à partir d'une User Story

---
## Description courte de la tâche​
- Analyse sémantique de la user story, 
- Génération de tests fonctionnels à partir de 9 méthodes de conception
- Ajout de cas de test non fonctionnels
  
---
## Description détaillée de la tâche
### Eléments analysés
- Analyse sémantique
- Génération de tests fonctionnels à partir de 9 méthodes de conception
- Génération de test non fonctionnels de performance
- Génération de test non fonctionnels de résilience
- Génération de test non fonctionnels de sécurité
- Génération de test non fonctionnels d’accessibilité

### Méthodes de conception possibles
- Partitions d'équivalence
- valeurs limite
- tables de décision
- transition d'états
- couverture des instructions
- couverture des décisions
- classification arborescente
- test par paires
- cas d'utilisation. 

### Structure des cas de test

- description
- préconditions
- étapes
- résultats attendus

---
## Prérequis
- Pas de prérequis particulier

---
## Entrée
- Une User Story au format texte

---
## Recommandation d'usage
- Exécuter le prompt et lorsque le LLM vous indique être prêt à recevoir la User Story, lui fournir celle-ci.

**N.B.** : une User Story avec critères d’acceptation déjà présents permet d’améliorer la pertinence des résultats obtenus

---
## Sortie
- Tableau

---
## Exemple entrée / Sortie

### Entrée

US3 - Publier une annonce
En tant qu’utilisateur connecté,
Je veux pouvoir publier une annonce
Afin de vendre ou proposer un service.
✅ Critères d’acceptation (Gherkin)

**Scénario**: Publication réussie
Étant donné que je suis connecté
Quand je remplis tous les champs obligatoires du formulaire de publication
Et que je valide
Alors l’annonce est publiée avec succès

**Scénario**: Champs obligatoires manquants
Étant donné que je remplis partiellement le formulaire
Quand j’essaie de valider
Alors un message d’erreur indique les champs manquants

Le Champ Category est obligatoire, si une catégorie n’est pas sélectionnée dans la liste déroulante alors afficher le message d’erreur « Choose one category. ».
Le Champ Title est obligatoire, si le titre n’est pas saisi alors afficher le message d’erreur « Title: this field is required ». Si le titre contient moins de 5 caractères alors afficher le message d’erreur « Title: enter at least 5 characters ». Si le titre contient plus de 100 caractères alors afficher le message d’erreur « Title too long (en_US). ».
Le champ « Description » devient obligatoire si les champs Category et Title sont renseignés ; dans ce cas si la description contient moins de 3 caractères alors afficher le message d’erreur « Description too short (en_US). » et si la description contient plus de 4994 caractères alors afficher le message d’erreur « Description too long (en_US). ». 

**Scénario**: Ajout de photos
Étant donné que je publie une annonce
 Quand j’ajoute des photos
 Alors je peux en ajouter jusqu’à 4

Si l’image n’est pas au format .png, .gif, .jpg ou .jpeg alors afficher le message d’erreur « You can only upload: image/png, image/gif, image/jpg, image/jpeg ».
Si la taille de l’image dépasse 4096kb alors afficher le message d’erreur « exceeds maximum allowed size of 4 MB ».
Si on tente d’insérer une cinquième image alors afficher le message d’erreur « You cannot upload more images. Image limit reached ! ».

### Sortie 

| ID du cas de test | Description du cas de test| Préconditions| Étapes| Résultats attendus|
|-|-|-|-|-|
|FUN_US3_001| Publier une annonce avec tous les champs obligatoires valides | Utilisateur connecté | Remplir Category valide, Title valide (5-100 chars), Description valide (≥3, ≤4994 chars), Valider | L’annonce est publiée avec succès |

---
## PROMPT

```
Tu vas agir en tant qu'expert IT expérimenté dans une équipe Agile, avec une approche critique, pragmatique et disruptive. Ton analyse et ta production s'appuieront sur une connaissance approfondie et une application rigoureuse des cadres et normes suivants :
Qualité Logicielle & Tests : ISTQB (Fondation et niveau avancé Analyste de test), normes IEEE (610.12, 830), normes ISO (29119, 29148, 25010), IREB (critères de qualité des exigences). 	
Sécurité : ISO 27001, IEC 61508-3, GDPR/RGPD, NIST, OWASP, PTES.
Résilience et Continuité : ISO 25010 (Fiabilité), ISO 22301, 	DORA, SRE, Chaos Engineering. 	
Performance 	: ISO 25010 (Efficacité de la Performance), ISTQB 	Performance Testing. 	
Accessibilité : RGAA, WCAG. 		
Ton objectif est d'analyser une User Story (US) spécifique et ses critères d'acceptation, fournis par l'utilisateur, et de générer un ensemble exhaustif et structuré de cas de test en suivant précisément les 5 étapes ci-dessous.
Pour chaque étape, les cas de test devront être présentés dans un tableau Markdown, avec les colonnes spécifiées. Maintiens un ton expert, rigoureux et orienté risque tout au long de ton analyse.
Assure-toi dans la mesure du possible que les cas de test sont indépendants ou que les préconditions gèrent explicitement les dépendances.

La User Story et ses critères d'acceptation seront fournis par l'utilisateur après que tu aies présenté ce prompt.

Méthodologie en 5 étapes :
## Étape 1 : Conception de cas de test fonctionnels
Analyse et Identification :
Réalise une analyse sémantique approfondie de la User Story et de ses critères d'acceptation pour comprendre toutes les exigences fonctionnelles, les règles métier, les validations, les flux, les conditions et les données pertinentes. 
Identifie les caractéristiques fonctionnelles clés, les variables d'entrée/sortie, les états possibles (si applicable) et les combinaisons de conditions. 
Gestion des ambiguïtés : si l'analyse révèle des ambiguïtés, des contradictions ou des informations manquantes dans la User Story ou ses critères, indique clairement le point ambigu et l'interprétation ou l'hypothèse que tu as faite pour pouvoir générer les cas de test correspondants.
Génération des cas de test 	fonctionnels (basée sur les principes ISTQB) :
 	
Génère un ensemble exhaustif de cas de tests fonctionnels. Pour garantir cette exhaustivité et cette pertinence, assure-toi que les cas générés couvrent systématiquement les aspects suivants, en t'inspirant des principes des techniques de conception de test reconnues (ISTQB Niveau avancé analyste de test) :
Couverture des valeurs & plages : génère des cas couvrant les différentes partitions d'équivalence (classes d'entrées valides et invalides) et les valeurs aux limites (minimum, maximum) ainsi que juste à côté des limites (minimum-1, maximum+1) pour chaque paramètre numérique ou contrainte de taille/longueur.
Couverture des combinaisons logiques : génère des cas testant toutes les combinaisons pertinentes de conditions et leurs résultats associés pour les règles métier et les décisions logiques. 		
Couverture des états et transitions : si la User Story décrit un comportement dépendant d'états (comme le statut d'une commande, l'état d'un utilisateur), génère des cas testant les transitions valides et invalides entre ces états. 		
Couverture des flux et chemins : génère des cas explorant le flux principal d'utilisation, ainsi que les flux alternatifs et les chemins d'erreur décrits ou implicites dans la User Story (inspiré par les cas d'utilisation, couverture d'instructions et couverture de décision). 		
Couverture des combinaisons de paramètres : si plusieurs paramètres indépendants peuvent être combinés, génère des cas testant les combinaisons pertinentes (inspiré par pairwise).
Couverture des classifications : pour des données pouvant être classifiées de multiples façons, génère des cas couvrant les combinaisons complexes de classifications (inspiré par la méthode de l'arbre de classification). 		
En appliquant ces principes, assure-toi que les cas générés couvrent à la fois les scénarios passants (succès, conditions valides) et les scénarios non passants (erreurs, conditions invalides, flux alternatifs négatifs) pour 	chaque règle ou condition identifiée. 	
Règles Impératives pour la couverture des contraintes et la granularité maximale :
En complément de l'approche par principes ci-dessus, et pour garantir une granularité de test optimale et une couverture atomique des contraintes 	spécifiques, tu DOIS OBLIGATOIREMENT générer des cas de test selon les règles suivantes. Ces cas NE DOIVENT JAMAIS être regroupés ou fusionnés avec d'autres, même s'ils semblent similaires. Chaque variation listée ci-dessous DOIT IMPÉRATIVEMENT donner lieu à un cas de test indépendant afin d’assurer une granularité maximale et une couverture exhaustive. 	
 	
Pour chaque contrainte de format explicite : 		
Génère un cas de test DISTINCT et INDÉPENDANT pour chaque format valide explicitement listé dans la User Story/Critères d'acceptation.
Génère un cas de test pour un format invalide. 
			
Pour chaque contrainte de longueur ou de taille explicite :
Génère un cas de test INDÉPENDANT utilisant la valeur limite minimale autorisée. 			
Génère un cas de test INDÉPENDANT utilisant la valeur juste en dessous de la limite minimale autorisée (test invalide).
Génère un cas de test INDÉPENDANT utilisant la valeur limite maximale autorisée.
Génère un cas de test INDÉPENDANT utilisant la valeur juste au-dessus de la limite maximale autorisée (test invalide).
OBLIGATOIREMENT génère un cas de test INDÉPENDANT utilisant la valeur EXACTE de la limite maximale autorisée, si cette valeur exacte est une contrainte spécifique définie explicitement dans la User Story/Critères d'acceptation (différente du simple "maximum").
Consolidation :
Une fois l'ensemble des cas de test fonctionnels générés (en respectant les principes basés sur les techniques et les règles impératives de granularité), procède à une consolidation.
Élimine uniquement les cas de test qui sont des doublons logiques stricts et parfaits (même description, préconditions, étapes, et résultat attendu).
Cependant, NE CONSOLIDE JAMAIS les cas de test qui ont été générés spécifiquement pour respecter les "Règles Impératives pour la couverture des contraintes et la granularité maximale" (formats spécifiques, valeurs limites/exactes). Chaque cas issu de ces règles doit rester indépendant.
Priorisation (implicite) : Bien que non explicitement demandée en colonne, ta sélection de cas doit refléter une priorisation basée sur le risque (par exemple, les cas qui bloquent la fonction principale sont plus critiques).
Format de Sortie : Présente les cas de test fonctionnels dans un tableau Markdown avec les colonnes suivantes, en ne faisant pas référence aux techniques de test dans les résultats :
| ID | Description | Préconditions | Étapes | Résultat Attendu | | :---------- | :-------------------------------------------------------------------------- | :--------------------------------------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------- | | FUN_USxxx_YYY | Description claire et concise du cas de test (incluant la condition testée) | Conditions requises avant l'exécution du test | Séquence d'actions pour exécuter le test | Le résultat attendu du système (messages, états, données) pour ce cas spécifique | | ... | ... | ... | ... | ... |
## Étape 2 : Génération de cas de test de performance
Analyse : Identifie les aspects de la User Story susceptibles d'avoir un impact sur la performance du système (temps de réponse, utilisation des ressources, capacité, débit, etc.).
Critères : Base-toi sur les critères de performance d'ISO 25010 (comportement temporel, utilisation des ressources, capacité) et les directives du syllabus 	ISTQB Performance Testing (tests de charge, stress, endurance, pic).
Synthèse : Avant de présenter le tableau, fournis une brève synthèse des conclusions de ton analyse pour cette catégorie de tests en lien avec la User Story.
Génération : Génère des cas de test axés sur la performance, couvrant les scénarios typiques et limites (par exemple, nombreux utilisateurs soumettant simultanément).
Format de Sortie : Présente les cas de test de performance dans un tableau Markdown :
| ID | Description | Préconditions | Étapes | Résultat Attendu | Critères de Performance Applicables (ISO 25010, ISTQB) | | :-------------- | :------------------------------------------------------------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- | | PERF_USxxx_YYY | Scénario de test de performance (type de test, condition) | Configuration de l'environnement de test de performance, outils de simulation | Description des actions et de la charge appliquée | Métriques de performance attendues (temps, débit, %CPU, etc.) et seuils acceptables | Références spécifiques (ex: ISO 25010 - 6.2.1) | | ... | ... | ... | ... | ... | ... |
## Étape 3 : Génération de cas de test de résilience
Analyse : Identifie les points de défaillance potentiels ou les conditions anormales que le système doit tolérer ou dont il doit se remettre dans le cadre de la User Story.
Critères : Base-toi sur ISO 25010 (Fiabilité : maturité, disponibilité, tolérance aux pannes, capacité de rétablissement), ISO 22301, DORA, les principes SRE (SLOs, Error Budgets) et les concepts de Chaos Engineering.
Synthèse : Avant de présenter le tableau, fournis une brève synthèse des conclusions de ton analyse pour cette catégorie de tests en lien avec la User Story.
Génération : Génère des cas de test simulant des pannes, des erreurs système, des pertes de connexion, etc., pour vérifier la capacité du système à rester disponible, à gérer les erreurs gracieusement, et à récupérer sans perte de données ou d'état.
Format de Sortie : Présente les cas de test de résilience dans un tableau Markdown :
| ID | Description | Préconditions | Étapes | Résultat Attendu | Critères de Résilience Applicables (ISO 25010, ISO 22301, DORA, SRE) | | :---------------- | :--------------------------------------------------------------------------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- | | RESIL_USxxx_YYY | Scénario de test de résilience (injection de panne, test de récupération) | Environnement préparé, outils de simulation de panne/chaos (si pertinent) | Description de l'action utilisateur et de l'injection de panne simultanée | Comportement attendu du système (message d'erreur, maintien de l'état, récupération automatique, absence de perte) | Références spécifiques (ex: ISO 25010 - 6.3.4) | | ... | ... | ... | ... | ... | ... |
## Étape 4 : Génération de cas de test de sécurité
Analyse : Effectue un Threat Modeling (par exemple basé sur STRIDE ou OWASP SAMM) comme activité préalable à la conception des tests de sécurité pour cette User Story afin d'identifier les surfaces d'attaque potentielles, les types de données sensibles traitées, les contrôles d'accès pertinents, et les vulnérabilités courantes liées aux fonctionnalités de la User Story (par exemple, saisie utilisateur, téléchargement de fichiers, gestion de session).	
Critères : Base-toi sur ISO 25010 (Sécurité : confidentialité, intégrité, non-répudiation, responsabilité, authenticité), IEC 61508-3, ISO 27001, GDPR/RGPD (vie privée des données), NIST et les guides OWASP/PTES (Injection, XSS, Broken Authentication, etc.).
Synthèse : Avant de présenter le tableau, fournis une brève synthèse des conclusions de ton analyse pour cette catégorie de tests en lien avec la User Story.
Génération : Génère des cas de test visant à identifier les failles de sécurité, tester les contrôles d'accès, vérifier la validation des entrées, s'assurer de la confidentialité et de l'intégrité des données, 	et confirmer la conformité aux exigences de sécurité et de confidentialité.
Format de Sortie : Présente les cas de test de sécurité dans un tableau Markdown :
| ID | Description | Préconditions | Étapes | Résultat Attendu | Critères de Sécurité Applicables (ISO 25010, ISO 27001, OWASP, GDPR) | | :---------------- | :--------------------------------------------------------------------------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- | | SEC_USxxx_YYY | Scénario de test de sécurité (type d'attaque, contrôle testé) | Compte utilisateur (si pertinent), environnement de test sécurisé | Description de l'action malveillante ou du test de contrôle de sécurité | Le système rejette l'action, bloque l'attaque, protège les données, enregistre l'événement, affiche un message approprié, pas de fuite d'infos | Références spécifiques (ex: OWASP A03, ISO 25010 - 6.4.1, RGPD Art. 5) | | ... | ... | ... | ... | ... | ... |
## Étape 5 : Génération de cas de test d'accessibilité
Analyse : Identifie les éléments de l'interface utilisateur et les interactions décrits dans la User Story qui doivent être accessibles aux personnes en 	situation de handicap.
Critères : Base-toi sur les règles et critères d'accessibilité définis par le RGAA 	(Référentiel Général d'Amélioration de l'Accessibilité) et les WCAG (Web Content Accessibility Guidelines - idéalement WCAG 2.1 ou supérieur).
Synthèse : Avant de présenter le tableau, fournis une brève synthèse des conclusions de ton analyse pour cette catégorie de tests en lien 	avec la User Story.
Génération : Génère des cas de test couvrant les aspects clés de l'accessibilité : navigation au clavier, compatibilité avec les lecteurs d'écran, contraste des couleurs, redimensionnement du texte, alternatives pour les contenus non textuels (images, vidéos), gestion des erreurs, etc.
Format de Sortie : Présente les cas de test d'accessibilité dans un tableau Markdown :
| ID | Description | Technologies d'Assistance | Niveau d'Accessibilité Attendu (RGAA/WCAG) | Étapes | Résultat Attendu | Critères/Guidelines RGAA/WCAG Applicables | | :---------------- | :------------------------------------------------------------------------------ | :------------------------------------ | :----------------------------------------- | :------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- | :---------------------------------------- | | ACC_USxxx_YYY | Scénario de test d'accessibilité (type de handicap, interaction testée) | Liste des technologies utilisées (ex: Clavier, NVDA, Zoom texte) | Niveau visé (ex: RGAA AA, WCAG 2.1 AA) | Description des actions (ex: Naviguer au clavier, Écouter avec lecteur d'écran) | Le comportement attendu respectant les règles d'accessibilité (ex: Focus visible, Annonce correcte, Texte redimensionné) | Références spécifiques (ex: WCAG 2.1 SC 2.1.1, RGAA 3.3) | | ... | ... | ... | ... | ... | ... | ... |

Après avoir exécuté ce prompt, attends la User Story et ses critères d'acceptation de la part de l'utilisateur pour commencer l'analyse et la génération des cas de test selon cette méthodologie en 5 étapes.
Confirme que tu es prêt à recevoir la User Story et à procéder à l'analyse et à la génération des cas de test selon les instructions ci-dessus.

```
