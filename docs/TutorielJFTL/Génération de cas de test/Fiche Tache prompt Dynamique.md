---
sidebar_position: 3
---

# Fiche prompt Dynamique
Créer des cas de tests à partir d'une User Story

---
## Description courte de la tâche​
**La tâche :**
- Analyse plusieurs éléments de la user story, 
- Liste les conditions de test (au sens ISTQB)
- Propose la/les méthodes de conception de cas de test les plus appropriés
- Génère une première version des cas de test passants et non passants en s’appuyant sur les techniques extrêmement et très adaptées
- Vérifie la couverture des tests par rapports aux éléments analysés
- Ajoute les cas de test si la couverture de test n’est pas complète
- Ajoute des cas de test disruptifs
- Consolide les titres sans doublon

Le prompt demande si l’on souhaite un affichage total (de toutes les étapes intermédiaires) 
ou concis (uniquement les résultats de l’étape 11 : liste consolidée des titres)

---
## Description détaillée de la tâche
### Eléments analysés
- Analyse sémantique
- Liste des éléments suivants : 
  - paramètres
  - contraintes propres à chaque paramètre (liste des valeurs et règles, partitions d'équivalence en distinguant les partitions valides et les invalides, valeurs limites)
  - contraintes entre les paramètres
  - conditions
  - décisions
  - états
  - enchaînements sous la forme état initial
  - état final et action
  - écrans et fenêtres
  - message pour l’utilisateur
  - fichiers 
  - écran
  - éditions
  - rapports
  - logs 
- Risques


### Méthodes de conception possibles
- Partitions d'équivalence
- valeurs limite
- pairwise
- tables de décision
- couverture des chemins
- couverture des conditions
- couverture des décisions
- couverture des conditions et décisions
- couverture des conditions et décisions modifiée (MCDC)
- transition d'états
- cas d'utilisation
- risques  

### Structure des cas de test

- titres uniquement

---
## Prérequis
- Pas de prérequis particulier

---
## Entrée
- Une User Story au format texte

---
## Recommandation d'usage
- Avec certains LLM, le prompt doit être découpé, faute de quoi le traitement s’arrête.
- Ou alors, utiliser le prompt complet et indiquer « continue jusqu’au bout du prompt », en cas d’arrêt.


---
## Sortie
**Plusieurs éléments en sortie :** 
- Cas de test en langage naturel
- Pourcentages de couverture
- Description graphique de l’US au format mermaid

---
## Exemple entrée / Sortie

### Entrée

Connexion à une page web​ 
1 Exigences fonctionnelles​ 
1.1 La page doit proposer la connexion à partir d’une adresse mail et d’un mot de passe créés préalablement.​ 
1.2 La connexion par un compte Google ou Facebook doit aussi être possible. ​ 
1.3 Un captcha doit être proposé en cas d’accès valide.  
​1.4 La page doit laisser 3 possibilités de connexion en cas d’erreur.  
​1.5 En cas d’erreur à la 3e tentative, le compte, s’il existe est bloqué pendant 1 h.  
​1.6 La page doit aussi permettre de réinitialiser son mot de passe.  
​2. Exigences non fonctionnelles 
​2.1 La page doit être accessible et conforme au RGAA  
​2.2 Le temps de réponse de la page pour l’utilisateur doit être inférieur à 3 secondes​​ 

### Sortie 

TF-01Se connecter avec une adresse mail valide et un mot de passe valide
TF-02Se connecter avec une adresse mail invalide
TF-03Se connecter avec un mot de passe invalide
TF-04Se connecter avec une adresse mail valide et un mot de passe invalide
TF-05Se connecter avec un compte Google valide
TF-06Se connecter avec un compte Facebook valide
TF-07Résoudre un captcha valide
TF-08Résoudre un captcha invalide

---
##   PROMPT

```
Conduis-toi comme un expert du domaine du test logiciel avec plusieurs années d’expérience dans le contexte agile. Adopte une vision critique et disruptive
Inspire-toi du contenu des référentiels ISTQB Fondation, « 610,12-1990 – IEEE Standard Glossary of Software Engineering Terminolgy » et « IEEE 829-1983 – IEEE Standard for Software Test Documentation » et des critères de qualité préconisés par l’IREB (International Requirements Engineering Board).
 Je te vais te fournir une user story qui est considérée comme bien rédigée par les 3 Amigos.
Avant d’exécuter le prompt, demande si l’utilisateur souhaite un affichage total (1) ou concis (2).
Si “total” est demandé, affiche tous les résultats et exécute toutes les étapes jusqu’à l’étape 11 incluse.
Si “concis” est demandé, exécute toutes les étapes et n'affiche PAS les résultats des étapes 1 à 10, uniquement leurs titres. affiche les résultats de l’étape 11.
##Objectif
Générer des titres de test pour la User story ci-dessous en suivant les étapes ci-dessous.
Les titres sont formulés selon le format Verbe et complément(s).
Exemples :
 . saisir un mot de passe valide
 . mesurer le temps de réponse d’affichage
N’ajoute pas de commentaires avant et après tes réponses.
 
Voici la user story
Début de l’US
 ‘’’
EPIC : Gestion des Annonces
US3 - Publier une annonce
En tant qu’utilisateur connecté,
Je veux pouvoir publier une annonce
Afin de vendre ou proposer un service.
Critères d’acceptation (Gherkin)
Scénario: Publication réussie
Étant donné que je suis connecté
Quand je remplis tous les champs obligatoires du formulaire de publication
Et que je valide
Alors l’annonce est publiée avec succès

Scénario: Champs obligatoires manquants
Étant donné que je remplis partiellement le formulaire
Quand j’essaie de valider
Alors un message d’erreur indique les champs manquants
Le Champ Category est obligatoire, si une catégorie n’est pas sélectionnée dans la liste déroulante alors afficher le message d’erreur « Choose one category. ».
Le Champ Title est obligatoire, si le titre n’est pas saisi alors afficher le message d’erreur « Title: this field is required ». Si le titre contient moins de 5 caractères alors afficher le message d’erreur « Title: enter at least 5 characters ». Si le titre contient plus de 100 caractères alors afficher le message d’erreur « Title too long (en_US). ».
Le champ « Description » devient obligatoire si les champs Category et Title sont renseignés ; dans ce cas si la description contient moins de 3 caractères alors afficher le message d’erreur « Description too short (en_US). » et si la description contient plus de 4994 caractères alors afficher le message d’erreur « Description too long (en_US). ». 
Scénario: Ajout de photos
Étant donné que je publie une annonce
Quand j’ajoute des photos
Alors je peux en ajouter jusqu’à 4
Si l’image n’est pas au format .png, .gif, .jpg ou .jpeg alors afficher le message d’erreur « You can only upload: image/png, image/gif, image/jpg, image/jpeg ».
Si la taille de l’image dépasse 4096kb alors afficher le message d’erreur « exceeds maximum allowed size of 4 MB ».
Si on tente d’insérer une cinquième image alors afficher le message d’erreur « You cannot upload more images. Image limit reached ! ».
 Le temps de réponse de la page doit être inférieur à 3 secondes pour l'utilisateur.
“””
 Fin de l’US

##Etape 1 Analyse sémantique de la user story
Analyse cette user story de façon très détaillée d’un point de vue sémantique.
Format de sortie : fournis les résultats dans un tableau. Numérote les lignes.

##Etape 2 Identification des caractéristiques de la user story
Liste tous les éléments suivants pour la user story : paramètres, contraintes propres à chaque paramètre (liste des valeurs et règles, partitions d'équivalence en distinguant les partitions valides et les invalides, valeurs limites), contraintes entre les paramètres, conditions, décisions, états, enchaînements sous la forme état initial, état final et action, écrans et fenêtres, message pour l’utilisateur, fichiers, écrans, éditions, rapports, logs.
Les éléments doivent être uniquement dans la user story. N’en rajoute aucun.
Format de sortie : fournis les résultats dans un tableau. Numérote les lignes.

 ##Etape 3 Détermination des risques
Identifie les principaux risques associés à la user story.
Format de sortie : fournis les résultats sous la forme d'un tableau à 3 colonnes
- colonne 1 : numéro de ligne
- colonne 2 : titre du risque
- colonne 3 : impact (fort, moyen, faible)
- colonne 4 : probabilité d’occurrence (Haute, moyenne, faible)
- colonne 5 : explications
Trie le tableau par impact décroissant (fort -> moyen -> faible)

 #Etape 4 Identification des conditions de test
Détermine les conditions de test, à savoir au sens de l’ISTQB les éléments qui devront être testés et non les conditions logiques à tester. 
Format de sortie : fournis les résultats dans un tableau. Numérote les lignes.
Exemples de conditions de test : page de connexion, connexion infructueuse, intégration à Google

 ##Etape 5 Identification des techniques de conception de cas de test
Voici les 12 principales techniques de conception de cas de test préconisées par l’ISTQB et TMap : partitions d'équivalence, valeurs limite, pairwise, tables de décision, couverture des chemins, couverture des conditions, couverture des décisions, couverture des conditions et décisions, couverture des conditions et décisions modifiée (MCDC), transition d'états, cas d'utilisation, risques.
Calcule le niveau d'usage recommandé de chaque technique (extrêmement appropriée, très appropriée, moyennement appropriée, inappropriée).
Assure-toi que les 12 techniques sont bien couvertes.
Format de sortie : présente les résultats dans un tableau trié par niveau d’usage décroissant (extrêmement approprié, très approprié, moyennement approprié, inapproprié).
Numérote les lignes.
Explique en quoi la technique est adaptée au test de la user story ou pas en 100 mots.

##Etape 6 Génération des titres de cas de test à partir de l’exigence
Génère les titres de cas de test pour cette user story en utilisant les techniques de conception des cas de tests extrêmement et très appropriées et tous les éléments des étapes 1 à 4. Assure toi de prendre en compte tous les éléments.
Pour chaque titre, prévois les cas passants (succès, conditions valides) et les cas non passants (erreurs, conditions invalides, flux alternatifs négatifs).

Règles Impératives pour la couverture des contraintes et la granularité maximale :
Tu DOIS OBLIGATOIREMENT générer des cas de test selon les règles suivantes. Ces cas NE DOIVENT JAMAIS être regroupés ou fusionnés avec d'autres, même s'ils semblent similaires. Chaque variation listée ci-dessous DOIT IMPÉRATIVEMENT donner lieu à un cas de test indépendant afin d’assurer une granularité maximale et une couverture exhaustive. 	
 	
Pour chaque contrainte de format explicite : 		
Génère un cas de test DISTINCT et INDÉPENDANT pour chaque format valide explicitement listé dans la User Story/Critères d'acceptation.
Génère un cas de test pour un format invalide. 
			
Pour chaque contrainte de longueur ou de taille explicite :
Génère un cas de test INDÉPENDANT utilisant la valeur limite minimale autorisée. 			
Génère un cas de test INDÉPENDANT utilisant la valeur juste en dessous de la limite minimale autorisée (test invalide).
Génère un cas de test INDÉPENDANT utilisant la valeur limite maximale autorisée.
Génère un cas de test INDÉPENDANT utilisant la valeur juste au-dessus de la limite maximale autorisée (test invalide).
OBLIGATOIREMENT génère un cas de test INDÉPENDANT utilisant la valeur EXACTE de la limite maximale autorisée, si cette valeur exacte est une contrainte spécifique définie explicitement dans la User Story/Critères d'acceptation (différente du simple "maximum").

Format de sortie : fournis les résultats sous forme d’un tableau : colonne 1 = numéro de ligne, colonne 2 = titre de cas de test.
Indique le nombre de titres de cas de test dans un tableau (colonne 1 : total, colonne 2 : cas passants, colonne 3 : non passants).

##Etape 7 Ajout des cas de test hors exigences
Inspire toi des référentiels suivants 
. Sécurité : ISO 27001, IEC 61508-3, GDPR/RGPD, NIST, OWASP, PTES
. Résilience et continuité : ISO 25010 (Fiabilité), ISO 22301, DORA, SRE, Chaos Engineering.
. Performance : ISO 25010 (Efficacité de la Performance), ISTQB Performance Testing. . Accessibilité : RGAA, WCAG. 	
Ajoute des titres de test pour les tests suivants : test de performance, test de résilience, test de sécurité, test d’accessibilité, test de rollback, test de compatibilité mobile (version de système d'exploitation et modèle de smartphone).
Pour chaque titre, prévois les cas passants (succès, conditions valides) et les cas non passants (erreurs, conditions invalides, flux alternatifs négatifs).

Format de sortie : fournis les résultats sous forme d’un tableau : colonne 1 = numéro de ligne, colonne 2 = titre de cas de test, colonne 3 = passant/non passant.
Indique le nombre de titres de cas de test dans un tableau (colonne 1 : total, colonne 2 : cas passants, colonne 3 : non passants).

 ##Etape 8 Vérification de la couverture de test #01 (analyse sémantique de l’US)
Considère toutes les exigences de l’étape 1.
Produis une matrice de traçabilité entre les éléments identifiés dans l’étape 1 (analyse de l’US) et les titres de test.
Calcule le pourcentage de couverture des exigences. Si le pourcentage n’est pas de 100 %, fournis des explications en 100 mots.
Exemple : si la user story comporte 10 exigences et que les cas de test couvrent 7 conditions, la couverture est de 70 %.

 ##Etape 9 Vérification de la couverture de test #02 (caractéristiques de l’US)
Considère tous les éléments de l’étape 2.
Produis une matrice de traçabilité entre les éléments identifiés dans l’étape 2 et les titres de test.
Calcule le pourcentage de couverture des éléments. Si le pourcentage n’est pas de 100 %, fournis des explications en 100 mots.
Exemple : si la user story comporte 10 décisions et que les cas de test couvrent 7 décisions, la couverture est de 70 %.

 ##Etape 10 Ajout de titres de tests supplémentaires (amélioration de la couverture)
Pour tous les titres de cas des étapes 8 et 9 où la couverture n’est pas de 100 %, ajoute des titres de test supplémentaires pour atteindre 100 % de couverture.
Pour chaque titre, prévois les cas passants (succès, conditions valides) et les cas non passants (erreurs, conditions invalides, flux alternatifs négatifs).

Format de sortie : fournis les résultats sous forme d’un tableau : colonne 1 = numéro de ligne, colonne 2 = titre de cas de test.
Indique le nombre de titres de cas de test dans un tableau (colonne 1 : total, colonne 2 : cas passants, colonne 3 : non passants).

##Etape 11 Consolidation des titres de tests
Consolide l’ensemble des titres des tests des étapes 6, 7 et 10 sans aucun doublon de titre.
Élimine uniquement les cas de test qui sont des doublons logiques stricts et parfaits (même description, préconditions, étapes, et résultat attendu).
Cependant, NE CONSOLIDE JAMAIS les cas de test qui ont été générés spécifiquement pour respecter les "Règles Impératives pour la couverture des contraintes et la granularité maximale" de l’étape 6 (formats spécifiques, valeurs limites/exactes). Chaque cas issu de ces règles doit rester indépendant.

Format de sortie : affiche les résultats sous la forme d’un tableau à 2 colonnes au format markdown avec colonne 1 : n° de titre, colonne 2 : titre. Affiche les cas fonctionnels (numérotation TF-##) dans un premier tableau et les non fonctionnels dans un deuxième (numérotation TNF-##).
Pour finir, indique dans un tableau markdown le nombre de tests fonctionnels, non fonctionnels et le total.

```
