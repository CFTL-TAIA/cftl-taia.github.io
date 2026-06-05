---
sidebar_position: 3
---

# 1 - Stratégie de test

Utilisation des agents IA pour créer un outil permettant de générer une application afin de générer une stratégie de test adaptée à son contexte projet

## PROMPT à intégrer à votre outil IA

````
Crée une application web full-stack, propre, sobre, moderne et professionnelle, entièrement en français, nommée :
 
“Assistant de stratégie de test ISTQB”
 
Objectif produit :
Créer une web app agentique qui aide un utilisateur à construire progressivement une stratégie de test complète, cohérente, exploitable et éditable, alignée avec les principes ISTQB.
 
Important :
Ce n’est pas un simple chatbot.
Ce n’est pas une simple démo visuelle.
C’est un assistant structuré, réellement utilisable de bout en bout, pour cadrer, décider, générer, revoir et exporter une stratégie de test.
 
Objectif final utilisateur :
Permettre à l’utilisateur de produire facilement :
1. une stratégie de test rédigée de manière professionnelle,
2. une version structurée éditable,
3. un export Word (.docx) éditable.
 
Langue :
- Toute l’interface doit être en français.
- Tous les textes visibles doivent être en français.
- Tous les contenus générés doivent être en français.
- Tous les labels, boutons, messages, aides, états vides, erreurs et notifications doivent être en français.
 
Rôle de l’agent :
- Agir comme un expert en stratégie de test, gouvernance de test et planification de test aligné avec les principes ISTQB.
- Ne jamais générer immédiatement le document final si les informations essentielles manquent.
- Commencer par établir un cadrage minimal.
- Poser les questions progressivement.
- Préremplir et proposer au maximum.
- Aider l’utilisateur à arbitrer les choix de stratégie.
- Distinguer explicitement :
  - informations confirmées,
  - hypothèses,
  - risques,
  - décisions de stratégie,
  - points ouverts.
- Ne jamais inventer le contexte.
- Ne jamais prétendre qu’il existe un template unique officiel ISTQB.
 
Principe central :
L’utilisateur ne doit pas rédiger toute sa stratégie de test à la main.
L’application doit surtout :
- préremplir,
- suggérer,
- proposer des options,
- permettre de valider,
- permettre de corriger,
- permettre de préciser,
- générer automatiquement une V0 utile.
 
L’utilisateur doit agir principalement comme :
- décideur,
- validateur,
- correcteur,
- affineur.
 
Possibilité obligatoire de réponse spécifique :
Chaque fois qu’une réponse prédéfinie importante est proposée, il faut toujours inclure :
“Autre (à préciser)”
 
Règles obligatoires pour “Autre” :
- Afficher immédiatement un champ texte libre si “Autre” est sélectionné.
- Conserver cette valeur dans l’état global.
- Réutiliser cette valeur dans la synthèse, la revue et le document final.
- Ne jamais écraser une valeur spécifique saisie par l’utilisateur.
 
Architecture technique :
- Application full-stack.
- Frontend : React.
- Backend : Node.js.
- Les appels au modèle doivent être réalisés côté serveur.
- Les secrets et clés API doivent être gérés côté serveur uniquement.
- Architecture simple, lisible, modulaire et maintenable.
- Utiliser des composants réutilisables.
- Limiter les dépendances inutiles.
- Si nécessaire, ajouter une dépendance pour générer un vrai fichier .docx éditable.
- Le bouton d’export doit produire un vrai fichier .docx.
 
Intégration IA :
- Concevoir l’application pour une intégration Gemini côté serveur.
- Prévoir des appels plus légers pour les interactions courtes.
- Prévoir des appels plus riches pour la synthèse et la génération du document.
- Si l’IA n’est pas disponible, l’application doit continuer à fonctionner avec des contenus mock ou des fallbacks crédibles.
 
Utilisateurs cibles :
- QA Lead
- Test Manager
- Chef de projet
- Business Analyst
- Responsable qualité
- Testeur sénior
 
Flow visible minimal de l’application :
L’application doit afficher uniquement 4 étapes visibles à l’utilisateur :
 
1. Cadrage
2. Choix de stratégie
3. Document
4. Export
 
Ne pas afficher 8 ou 10 étapes visibles.
La complexité métier peut exister en interne, mais l’expérience utilisateur doit rester simple.
 
Détail des 4 étapes :
 
ÉTAPE 1 — CADRAGE
Objectif :
Recueillir juste assez d’informations pour proposer une stratégie pertinente.
 
Doit contenir au minimum :
- mode d’utilisation : Express ou Expert
- nom du projet
- produit / application
- profil projet
- contexte métier
- objectif principal
- niveau de criticité
- contraintes majeures déjà connues
 
Profil projet proposé avec “Autre” :
- Application web interne
- Produit grand public
- CRM
- API / backend
- SI critique métier
- Programme multi-applicatif
- Refonte applicative
- Produit fortement intégré
- MVP / projet court
- Projet réglementé
- Autre
 
Exigences fonctionnelles :
- Le choix du mode Express / Expert doit être obligatoire au départ.
- Le choix du profil projet doit préremplir des suggestions adaptées.
- À la fin de cette étape, une fiche de cadrage minimale doit être visible.
- La synthèse latérale doit déjà être alimentée.
 
ÉTAPE 2 — CHOIX DE STRATÉGIE
Objectif :
Faire prendre à l’utilisateur les décisions structurantes sans le noyer dans un formulaire géant.
 
Sous-blocs internes à traiter dans cette étape :
- périmètre / hors périmètre
- risques
- niveaux et types de test
- niveau d’automatisation visé
- environnements / données / outils
- gouvernance / planning / livrables
 
Format attendu :
- cartes de décision
- suggestions
- options par défaut
- alternatives “léger / intermédiaire / robuste”
- possibilité “Autre”
 
Le sous-bloc Risques est obligatoire et doit réellement fonctionner.
La partie Risques doit :
- afficher une liste de risques suggérés selon le profil projet et la criticité,
- permettre de sélectionner des risques,
- permettre de supprimer un risque,
- permettre d’ajouter un risque manuellement,
- inclure “Autre (à préciser)”,
- mettre à jour immédiatement l’état global,
- mettre à jour immédiatement le panneau de synthèse,
- réinjecter les risques dans le document généré.
 
Si aucun risque n’est encore validé :
- afficher un état vide utile,
- proposer des risques types,
- permettre de continuer avec un statut “Aucun risque confirmé à ce stade”.
 
ÉTAPE 3 — DOCUMENT
Objectif :
Produire une V0 utile puis permettre l’ajustement.
 
Cette étape doit réellement fonctionner.
Elle doit permettre :
- d’afficher une stratégie de test générée,
- d’afficher une synthèse exécutive,
- d’afficher les sections principales du document,
- d’indiquer clairement ce qui est confirmé,
- d’indiquer clairement ce qui est hypothétique,
- d’indiquer clairement ce qui reste à arbitrer,
- d’éditer manuellement une section,
- de régénérer une seule section,
- de valider section par section.
 
Le document doit pouvoir contenir les sections suivantes :
- Informations générales
- Contexte et objectifs
- Portée / périmètre
- Hors périmètre
- Références documentaires
- Hypothèses, dépendances et contraintes
- Analyse des risques
- Objectifs de test
- Niveaux de test
- Types de test
- Approche de test / stratégie
- Techniques de conception de tests
- Critères d’entrée et de sortie
- Environnements de test
- Données de test
- Outils et automatisation
- Organisation, rôles et responsabilités
- Gestion des défauts et anomalies
- Livrables de test
- Planification macro et jalons
- Suivi, métriques et reporting
- Critères de suspension et reprise
- Gouvernance et validation
- Points ouverts / arbitrages restants
- Conclusion
 
Si certaines informations manquent encore :
- produire quand même une V0,
- marquer explicitement :
  - “À confirmer”
  - “Hypothèse de travail”
  - “Arbitrage restant”
 
ÉTAPE 4 — EXPORT
Objectif :
Permettre de finaliser et d’exporter un document Word éditable.
 
Cette étape doit réellement fonctionner.
Elle doit afficher :
- le document final,
- les hypothèses restantes,
- les points ouverts,
- un indicateur de complétude,
- le bouton d’export Word.
 
Le bouton d’export doit :
- générer un vrai fichier .docx,
- avec titre,
- sous-titre,
- métadonnées,
- synthèse exécutive,
- sections hiérarchisées,
- paragraphes éditables,
- listes propres,
- tableaux simples si utile.
 
En cas d’échec d’export :
- afficher un message clair en français,
- ne pas échouer silencieusement.
 
Mode Express / Expert : exigence forte
Le mode Express et le mode Expert doivent réellement fonctionner et être différents.
 
Mode Express :
- moins de champs visibles,
- plus de préremplissage,
- moins de décisions détaillées,
- davantage de valeurs par défaut,
- génération plus rapide d’une V0.
 
Mode Expert :
- plus de granularité,
- plus d’options visibles,
- plus de possibilités de personnalisation,
- plus de réglages de stratégie,
- édition plus fine.
 
Exigence obligatoire :
Le changement de mode doit avoir un effet visible et réel sur :
- l’interface,
- les champs affichés,
- le niveau de détail,
- les options proposées.
 
État global centralisé :
Toute la logique métier doit reposer sur un état global unique.
Ne pas disperser la logique métier dans des états locaux déconnectés.
 
Prévoir un modèle de données global structuré incluant au minimum :
- mode
- currentStep
- projectContext
- selectedProjectProfile
- knownInformation
- assumptions
- risks
- strategyDecisions
- openPoints
- documentSections
- completionStatus
- exportMetadata
 
Exigences de cohérence :
- Le panneau de synthèse doit toujours refléter l’état global réel.
- Les données saisies dans une étape doivent être visibles et réutilisables dans les autres.
- Les données spécifiques saisies dans “Autre” doivent être traitées comme des données métier de premier niveau.
 
Panneau latéral de synthèse :
Afficher en permanence :
- Informations confirmées
- Hypothèses
- Risques
- Décisions de stratégie
- Points ouverts
 
Ce panneau doit être alimenté en temps réel.
 
Interface attendue : Propose moi une interface graphique adaptée, moderne mais fun, avec une UX fonctionnelle et colorée.
L’application doit être réellement fonctionnelle de bout en bout dès le premier build MVP.
Ne pas générer uniquement une interface visuelle.
Toutes les étapes visibles doivent être branchées à une logique réelle.
 
Exigences minimales de fonctionnement :
1. Le mode Express et le mode Expert doivent produire un comportement réellement différent.
2. La section Risques doit fonctionner réellement.
3. La section Document / Revue doit fonctionner réellement.
4. La section Export doit fonctionner réellement.
5. Aucune étape principale ne doit être vide.
6. Toutes les données métier doivent reposer sur un état global centralisé.
7. Prévoir des données mock et des fallbacks.
8. Si l’appel au modèle n’est pas disponible, l’application doit rester testable.
9. Tous les boutons principaux doivent être branchés.
10. Aucun écran central ne doit être un simple placeholder.
 
Fallbacks obligatoires :
- Si la génération IA échoue, afficher une V0 mock crédible.
- Si une section est vide, afficher un contenu de démarrage utile.
- Si l’export échoue, afficher un message clair.
- Si aucun risque n’est saisi, afficher des risques types.
- Si l’utilisateur n’a pas encore assez répondu, permettre quand même une génération partielle marquée comme incomplète.
 
Interdictions :
- pas de bouton décoratif non branché,
- pas de section centrale “à venir”,
- pas de faux export,
- pas de fausse génération purement statique,
- pas de dépendance exclusive à l’IA pour tester l’application,
- pas de logique métier invisible uniquement simulée dans le texte.
 
Critères d’acceptation obligatoires :
Le MVP doit permettre de réaliser ce scénario complet :
 
Scénario de test de bout en bout :
1. Choisir un mode (Express ou Expert)
2. Saisir un nom de projet
3. Choisir un profil projet
4. Renseigner le contexte minimal
5. Ajouter ou sélectionner au moins un risque
6. Faire générer une V0 de stratégie
7. Modifier une section du document
8. Voir la synthèse latérale mise à jour
9. Exporter un fichier .docx
 
Ce scénario doit fonctionner sans blocage.
 
Auto-vérification obligatoire avant de considérer le build terminé :
Après avoir généré le code, vérifier et corriger automatiquement au minimum :
- que l’application compile,
- que les 4 étapes sont navigables,
- que le mode Express et le mode Expert ont un effet visible différent,
- que l’ajout d’un risque met à jour l’état global,
- que la synthèse latérale reflète l’état réel,
- que la génération remplit l’étape Document,
- que l’édition d’une section fonctionne,
- que l’export produit un vrai fichier .docx,
- que les fallbacks fonctionnent si l’IA n’est pas disponible.
 
Si un de ces contrôles échoue :
- corriger automatiquement avant de terminer le build.
 
Ordre de priorité de construction :
1. Faire fonctionner réellement les 4 étapes.
2. Faire fonctionner réellement le mode Express / Expert.
3. Faire fonctionner réellement la gestion des risques.
4. Faire fonctionner réellement la génération du document.
5. Faire fonctionner réellement l’édition d’une section.
6. Faire fonctionner réellement l’export Word.
7. Ensuite seulement, soigner la présentation visuelle.
 
Première version demandée :
Construire un MVP réellement utilisable, simple, robuste, cohérent et testable de bout en bout.
Privilégier le fonctionnement réel plutôt qu’une interface spectaculaire.
 
Commence maintenant par générer l’application complète avec :
- son architecture,
- son état global centralisé,
- ses 4 étapes,
- son mode Express / Expert réellement distinct,
- sa gestion des risques,
- sa génération de document,
- son édition section par section,
- son export Word éditable,
- ses fallbacks,
- et son auto-vérification finale.

Contraintes finales supplémentaires :
- Ne termine pas le build tant qu’au moins un scénario complet de bout en bout n’est pas exécutable.
- Si une fonctionnalité centrale n’est pas prête, implémente un fallback fonctionnel au lieu de laisser un écran mort.
- Toute fonctionnalité visible par l’utilisateur doit avoir une logique réellement branchée.
- Le MVP doit d’abord être utilisable, ensuite seulement élégant.

Stabilité des champs de saisie : exigence obligatoire
- Aucun champ texte ne doit perdre le focus pendant la saisie.
- Ne pas recréer les composants de formulaire à chaque frappe.
- Ne pas utiliser de clé dynamique qui change pendant l’édition.
- Ne pas reconstruire toute l’étape à chaque `onChange`.
- Utiliser une gestion de formulaire stable pour permettre une saisie continue.
- Vérifier explicitement qu’un utilisateur peut taper plusieurs mots ou phrases d’affilée sans être éjecté du champ.
 
Contrôle supplémentaire obligatoire :
- Tester qu’un champ texte reste focalisé pendant toute la saisie d’une phrase complète.
 
Interdiction :
- ne pas déclencher de re-render global destructif à chaque caractère saisi.

````