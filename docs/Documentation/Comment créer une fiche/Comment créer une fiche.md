---
sidebar_position: 1
---

# Comment contribuer au site CFTL-TAIA ?


:::warning
Les processus de participation communautaire sont en cours de création.
:::

Merci de votre intérêt pour contribuer à notre site ! 🎉
Notre site est hébergé sur **GitHub Pages**. Pour proposer une modification ou une amélioration, vous devez passer par une **Pull Request (PR)**.

Ce guide vous accompagne étape par étape, même si vous êtes débutant.

---

## ✅ 1. Créer un compte GitHub

Si vous n'avez pas encore de compte GitHub :

1. Rendez-vous sur [https://github.com/signup](https://github.com/signup)
2. Créez votre compte (nom d'utilisateur, e‑mail, mot de passe).
3. Validez votre compte via l'e‑mail de confirmation.

---

## ✅ 2. Accéder au dépôt du site

Connectez-vous à GitHub puis rendez-vous ici :

➡️ [https://github.com/CFTL-TAIA/cftl-taia.github.io](https://github.com/CFTL-TAIA/cftl-taia.github.io)

---

## ✅ 3. Créer un fork du projet

Comme vous ne pouvez pas modifier directement le projet, créez un fork (une copie personnelle) :

1. Cliquez sur **Fork** en haut à droite de la page du dépôt.
2. Votre fork sera disponible à l'adresse : https://github.com/votrecompte/cftl-taia.github.io

---
## ✅ 4. Modifier les fichiers

### ✏️ Modifier directement en ligne
1. Ouvrez votre fork sur GitHub.
2. Ouvrez le fichier que vous souhaitez modifier.
3. Cliquez sur l'icône crayon **Edit this file**.
4. Faites vos modifications.
5. Ajoutez un message de validation (commit) et cliquez sur **Commit changes**.


### 💻 Modifier en local (optionnel)
Vous pouvez aussi cloner votre fork en local et utiliser Git si vous êtes à l'aise :

```
git clone https://github.com/votrecompte/cftl-taia.github.io
```

> Voir la doc : [Cloner un dépôt](https://docs.github.com/fr/repositories/creating-and-managing-repositories/cloning-a-repository)

---

# Créer une fiche cas d'usage avec  ses prompts

- Copier coller le dossier "Comment créer une fiche" contenant 
  - Template cas d'usage.md
  - Templace tache de prompt.md
  - \_category_.json

- Remplir les fiches avec un titre parlant et les informations demandés

---

## ✅ 5. Créer une Pull Request

1. Retournez sur votre fork.
2. Cliquez sur **Contribute** puis **Open pull request**.
3. Vérifiez la comparaison :
   - **base repository** : `CFTL-TAIA/cftl-taia.github.io`
   - **head repository** : `votrecompte/cftl-taia.github.io`
4. Ajoutez un titre et une description.
5. Cliquez sur **Create pull request**.
---

## ✅ 6. Validation par l'équipe

L'équipe du projet relira votre PR. Elle pourra :
- L'accepter et la fusionner ✅
- Vous demander des modifications 🔄

Une fois acceptée, vos modifications seront publiées sur le site !

---

## 📌 Suivre vos PR

Consultez l'onglet **Pull Requests** :
[https://github.com/CFTL-TAIA/cftl-taia.github.io/pulls](https://github.com/CFTL-TAIA/cftl-taia.github.io/pulls)

---

## 📚 Liens utiles

- [Aide officielle GitHub sur les forks](https://docs.github.com/fr/get-started/quickstart/fork-a-repo)
- [Aide officielle GitHub sur les pull requests](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [Guide Markdown](https://www.markdownguide.org/basic-syntax/)

---

✉️ **Besoin d'aide ?**  
Ouvrez une *issue* ici : [https://github.com/CFTL-TAIA/cftl-taia.github.io/issues](https://github.com/CFTL-TAIA/cftl-taia.github.io/issues)

Merci pour vos contributions ! 💙


N'hésitez pas à consulter le Readme du **[Github Cftl-Taia](https://github.com/CFTL-TAIA/cftl-taia.github.io)**

Ou nous envoyer un email : **cftl.taia@gmail.com**
:::

## Prompt pour mise en place d'un cas d'usage (inspiration)
``` 
Conduis-toi comme un expert du domaine du test logiciel avec plusieurs années d’expérience et certifié ISTQB fondation.
j'ai un template de cas d'usage de l'IA générative qui correspond à cela :
 
 ***Template fiche cas d'usage***

 # Titre / Description
 ## Description
 ## Fiche d'identité du cas d'usage
 ### Problématique(s) traitée(s) 
 ---
 ### Groupe d’activité de test ISTQB 
 ---
 ### Types de tests 
 ---
 ### Métier / Profil
 ---
 ### Bénéfices attendus / constatés (Méthode d’évaluation du ROI)
 ---
 ### Evaluation du ROI
 ---
 ### Risques
 ---
 ### Ressources 
 ---
 ### Références
 ---
 
*** Fin du template ***

Peux tu me faire une proposition correspondant à ce template pour ce cas d'usage en format Markdown : [CAS D'USAGE]

``` 