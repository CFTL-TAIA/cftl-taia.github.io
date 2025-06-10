---
sidebar_position: 2
---

# Prompt Simple
Créer des cas de tests à partir d'une User Story

---
# Intitulé 
Générer des cas de test à partir d’une user story

---
## Description courte de la tâche​
La tâche : 
- Génère un cas de test à partir d’une user story

---
## Description détaillée de la tâche
Eléments analysés :
- Pas d’analyse particulière (la génération est directe)

---
### Méthodes de conception possibles
- Pas de méthode de conception précisée

---
### Structure des cas de test
- titres uniquement

---
## Prérequis
- Pas de prérequis particulier

---
## Entrée
- User story au format texte

---
## Recommandation d'usage
- Pas de recommandation. Le prompt est très simple et fonctionne avec tous les LLMs

---
## Sortie
- Titre des cas de test

---
## Exemple entrée / sortie

### Entrée 

**Connexion à une page web​**

- 1 Exigences fonctionnelles.​
- 1.1 La page doit proposer la connexion à partir d’une adresse mail et d’un mot de passe créés préalablement.​
- 1.2 La connexion par un compte Google ou Facebook doit aussi être possible.
- 1.3 Un captcha doit être proposé en cas d’accès valide.
- 1.4 La page doit laisser 3 possibilités de connexion en cas d’erreur.
- ​1.5 En cas d’erreur à la 3e tentative, le compte, s’il existe est bloqué pendant 1 h.
- 1.6 La page doit aussi permettre de réinitialiser son mot de passe.
- ​2. Exigences non fonctionnelles
- 2.1 La page doit être accessible et conforme au RGAA
- ​2.2 Le temps de réponse de la page pour l’utilisateur doit être inférieur à 3 secondes​​ 

### Sortie 

- 1 Se connecter avec une adresse e-mail et un mot de passe valides
- 2 Se connecter avec un compte Google valide
- 3 Se connecter avec un compte Facebook valide
- 4 Tenter une connexion avec une adresse e-mail invalide
- 5 Tenter une connexion avec un mot de passe invalide
- 6 Tenter une connexion avec un compte Google invalide
- 7 Tenter une connexion avec un compte Facebook invalide

---
## Prompt

```
Conduis-toi comme un expert du domaine du test logiciel avec plusieurs années d’expérience dans le contexte agile et dans le monde de l’assurance de biens et de personnes. Adopte une vision critique et disruptive 
Inspire-toi du contenu des référentiels ISTQB Fondation, « 610,12-1990 – IEEE Standard Glossary of Software Engineering Terminolgy » et « IEEE 829-1983 – IEEE Standard for Software Test Documentation » et des critères de qualité préconisés par l’IREB (International Requirements Engineering Board). 

Je te vais te fournir une user story qui est considérée comme bien rédigée par les 3 Amigos.
Voici la user story
Début ‘’’’

<insérer la User Story ici>
“”” Fin
Génère les titres de cas de test pour cette user story.
Formule les titres selon le format Verbe et complément(s).
Exemples :
.  saisir un mot de passe valide 
. mesurer le temps de réponse d’affichage
Fournis les résultats sous forme d’un tableau : colonne 1 = compteur de ligne, colonne 2 = titre de cas de test.
N’ajoute pas de commentaires avant et après tes réponses.
```
