---
sidebar_position: 3
---

# Fiche prompt
Analyser une user story

## Description courte de la tâche​
Analyser une user story en évaluant le respect de critères qualité définis

## Description détaillée de la tâche
L’analyse de la user story se base sur des critères qualité définis.
Pour chaque critère, il est indiqué s’il est respecté (oui, partiellement, non) avec une explication.

## Prérequis
- Choix du rôle assigné au LLM
- Choix des critères qualité à vérifier

## Entrée
Une User Story au format texte

## Sortie
Tableau avec les colonnes suivantes : 
- Critère
- Respect
- Explication


## PROMPT
Le prompt proposé est paramétrable avec 2 éléments :
- Le rôle assigné au LLM : [variable1]
- Les critères qualité à vérifier : [variable2]

```
Conduis-toi comme un [variable1].
Je vais te fournir une user story, analyse cette user story selon les critères [variable2: + liste critères]. 
Pour chaque critère je veux savoir s’il est respecté (oui, partiellement, non) avec une explication.
Le résultat doit être fourni sous la forme d’un tableau contenant les colonnes suivantes :
- Critère [variable2] (par exemple [exemple critère])
- Respect : oui, partiel, non
- Explication

### Début user story

### Fin user story
```

Exemples de rôles pour [variable1] :
- Product owner
- Scrum Master
- Coach Agile
- Ingénieur d’exigence
Avec “du domaine du développement logiciel avec plusieurs années d’expérience dans le contexte Agile Scrum” à la suite

Exemples de critères pour [variable2] : 
- BABOK : atomique, complet, cohérent, concis, réalisable, non ambigu, testable, priorisé, compréhensible
- IEEE830 : correct, non ambigu, complet, cohérent, classé en fonction de son importance et/ou de sa stabilité, vérifiable, modifiable, traçable
- IREB : adéquate, nécessaire, non ambigu, complète, compréhensible, vérifiable
- INVEST : Indépendante, Négociable, Valeur utilisateur, Estimable, Small, Testable

### Exemple

#### Entrée
```
Conduis-toi comme un ingénieur d’exigence du domaine du développement logiciel avec plusieurs années d’expérience dans le contexte Agile Scrum.
Je vais te fournir une user story, analyse cette user story selon les critères INVEST : Indépendante, Négociable, Valeur utilisateur, Estimable, Small, Testable. 
Pour chaque critère je veux savoir s’il est respecté (oui, partiellement, non) avec une explication.
Le résultat doit être fourni sous la forme d’un tableau contenant les colonnes suivantes :
- Critère INVEST (par exemple Testable)
- Respect : oui, partiel, non
- Explication

### Début user story
US 19 : Consulter les détails d'une annonce
En tant qu’utilisateur,
Je veux voir les détails d’une annonce
Afin d’évaluer son intérêt.
Critères d’acceptation (Gherkin)
Scénario: Affichage des détails d’une annonce
  Étant donné que je consulte une annonce
  Alors toutes les images sont visibles
  Et les informations du vendeur sont affichées
  Et un bouton de contact est disponible
### Fin user story
```

#### Sortie (LLM : GPT 4.1 mini)
| **Critère** | **Respect** | **Explication** |
| ------- | ------- |------------ |
| Indépendante | Partiel | La story dépend de l’existence d’une annonce à consulter, ce qui peut la rendre dépendante d’autres stories (ex : création ou liste d’annonces). Elle n’est pas totalement isolée. |
| Négociable | Oui | La formulation est suffisamment ouverte pour permettre des discussions sur les détails affichés (ex : quelles informations du vendeur, format des images, etc.). |
| Valeur | Oui | La story apporte une valeur claire à l’utilisateur : pouvoir évaluer une annonce avant de prendre une décision. |
| Estimable | Oui | Les critères d’acceptation sont clairs et permettent d’estimer le travail nécessaire pour afficher les images, les infos vendeur et le bouton de contact. |
| Small | Partiel | La story couvre plusieurs éléments (images, infos vendeur, bouton), ce qui peut la rendre un peu large. Elle pourrait être découpée en sous-tâches ou stories plus petites. |
| Testable | Oui | Les critères d’acceptation sont précis et formulés en Gherkin, ce qui facilite la rédaction de tests automatisés ou manuels. |