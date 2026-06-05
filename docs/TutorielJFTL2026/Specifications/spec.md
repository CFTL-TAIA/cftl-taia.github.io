# Spécification Technico-Fonctionnelle (STF) - Projet API TAIA

## 1. Introduction et Objectifs du Projet
Le projet **API TAIA** est une application web composée d'un Front-end et d'un Back-end (API REST) permettant de consulter, naviguer et administrer le programme de la **JFTL 2026**. 

Ce document fige le périmètre fonctionnel, l'architecture technique, les contrats d'interface et les règles de gestion du projet dans le cadre d'un développement et d'une validation selon une méthodologie en **Cycle en V**.

### Objectifs clés :
* Exposer un catalogue de données (Conférences, Speakers, Salles, Entreprises) via une API REST documentée sous Swagger.
* Offrir une interface client (Front-end) fluide, hautement contextualisée et hébergée sur GitHub Pages.
* Sécuriser les actions d'administration (Ajout, Modification, Suppression) via une gestion de jetons JWT éphémères sans persistance lourde en base de données relationnelle.

---

## 2. Architecture Technique et Socle

### 2.1. Environnement et Déploiement
* **Base de Données :** Système de fichiers plats au format JSON (`BDD JSON`, ex: `Entreprise.json`), assurant la persistance des données sans SGBD relationnel.
* **Hébergement Front-end :** Déploiement et exécution de l'interface client de manière statique sur **GitHub Pages**.
* **Documentation de l'API :** Intégration complète de **Swagger UI**, accessible directement depuis le header de l'application, permettant la visualisation et l'exécution interactive des requêtes.

### 2.2. Sécurité & Authentification (Gestion des jetons)
L'authentification s'appuie sur des jetons JWT (JSON Web Token) quotidiens. Les secrets de validation sont exclusivement configurés côté serveur (aucun mot de passe stocké en clair ou en BDD).

Deux niveaux de privilèges (`scope`) et de droits d'accès sont définis :

| Scope | Rubriques Front-End autorisées | Verbes HTTP autorisés |
| :--- | :--- | :--- |
| `editor` | Rubrique *Modifier* uniquement | `PUT` uniquement |
| `admin-plus` | Rubriques *Modifier*, *Créer*, *Supprimer* | `POST`, `PUT`, `DELETE` |

---

## 3. Spécifications Fonctionnelles & Interface Utilisateur (Front-End)

### 3.1. Page d'Accueil & Structure du Programme
La page d'accueil (`/index.html`) propose une expérience utilisateur orientée événement et se compose des éléments structurels suivants :

1. **Header (Zone Supérieure de Navigation) :**
   * Présence d'un titre ou logo identifiant clairement le projet **API TAIA**.
   * Menu de navigation persistant avec des accès explicites vers :
     * La documentation interactive **Swagger UI**.
     * Le dépôt de code source sur **GitHub**.
     * L'**Espace API** dédié (interface d'administration).

2. **Corps Principal - Affichage du Programme :**
   * **Titre obligatoire de la section :** Affichage strict et en majuscules de la chaîne `PROGRAMME DE LA JFTL 2026`.
   * **Zone Centrale (Grille des sessions) :** Affichage chronologique complet de l'ensemble des créneaux de la journée. Les données sont chargées dynamiquement depuis l'API réelle (interdiction d'utiliser des données fictives ou bouchonnées).
   * **Zone Latérale Droite (Colonne Éditeurs) :** Une colonne graphiquement isolée, configurée de manière plus compacte que le reste du programme, filtrant et affichant exclusivement les sessions de type *Démos Éditeurs*.

3. **Zone des Statistiques et Compteurs :**
   * Positionnée directement sous le programme de la journée.
   * Affiche des compteurs dynamiques reflétant en temps réel la taille des collections stockées dans la BDD JSON :
     * Nombre total de **Conférences**
     * Nombre total de **Speakers**
     * Nombre total de **Salles**
     * Nombre total de **Entreprises**

### 3.2. Cinématique de Navigation Contextualisée
Toutes les entités de l'application sont interconnectées. L'IHM doit implémenter un routage dynamique (par exemple via des paramètres de requête `?id=...`) respectant la cinématique suivante :

```text
[Page d'Accueil : Liste des Sessions]
│
├─► Clic sur une Conférence ──► Ouvre /conferences.html?id={id} (Vue détaillée)
├─► Clic sur un Speaker ──► Ouvre /speakers.html?id={id} (Profil détaillé)
├─► Clic sur une Salle ──► Ouvre /salles.html?id={id} (Plan/Détails salle)
└─► Clic sur une Entreprise ──► Ouvre /entreprises.html?id={id} (Fiche entreprise)
```

#### Règles d'affichage sur les pages détaillées :
* Les pages de détails doivent exécuter des requêtes croisées pour matérialiser et valoriser les liaisons du modèle de données (ex: la page d'une entreprise doit lister dynamiquement tous ses speakers rattachés et leurs conférences respectives).
* **Règle d'interactivité :** Toutes les informations de relation affichées à l'écran doivent rester obligatoirement cliquables pour permettre une navigation récursive immédiate (ex: cliquer sur le nom d'un speaker depuis la fiche d'une entreprise redirige vers son profil).

### 3.3. Interface d'Administration
* Par défaut, tant qu'aucun jeton d'accès valide n'a été généré et stocké en session, l'interface utilisateur masque l'ensemble des formulaires de gestion (création, modification, suppression) par des règles CSS (`display: none`) ou d'exclusion du DOM.
* L'apparition des formulaires est conditionnée par la validation du JWT.

---

## 4. Spécifications Techniques & Contrats d'Interface (API)

Toutes les routes de l'API retournent un code HTTP `200 OK` en cas de succès, avec un corps de réponse formalisé au format JSON. Elles doivent toutes être référencées et exécutables dans Swagger.

### 4.1. Module Gestion des Jetons (Admin)

#### `GET /api/admin/token`
* **Description :** Retourne uniquement des informations publiques de configuration serveur.
* **Règle de gestion :** Ne doit **jamais** exposer les mots de passe, clés secrètes ou variables d'environnement réelles du serveur.

#### `POST /api/admin/token`
* **Description :** Accepte le mot de passe configuré côté serveur et génère le jeton JWT quotidien.
* **Entrée (JSON Body) :**
  ```json
  {
    "password": "string"
  }

```

* **Sortie (JSON Body) :**
```json
{
  "token": "eyJhbGciOi...",
  "scope": "editor | admin-plus",
  "permissions": ["PUT"]
}

```



---

### 4.2. Module Conférences

#### `GET /api/conference`

* **Description :** Endpoint de lecture riche retournant la collection des conférences.
* **Paramètres de requête (Query params - Optionnels) :**
* `id` (string/int) : Filtrage par identifiant unique.
* `nom` (string) : Filtrage par correspondance de nom.
* `speakerId` (string/int) : Filtrage des conférences associées à un intervenant spécifique.
* `salleId` (string/int) : Filtrage par espace/salle.
* `horaire` (string) : Filtrage par créneau horaire.



---

### 4.3. Module Speakers

#### `GET /api/speaker`

* **Description :** Retourne la liste centralisée des intervenants disponibles.
* **Paramètres de requête (Query params - Optionnels) :**
* `id` (string/int) : Filtrage par identifiant unique.
* `nom` (string) : Recherche par nom du speaker.
* `etage` (int) : Filtrage par étage.


* **Règle de gestion spécifique (Filtre Étage) :** La valeur de l'étage pour un speaker n'est pas stockée directement dans son entité. Elle est **déduite dynamiquement** par le serveur en analysant les salles associées aux conférences auxquelles ce speaker est rattaché.
* **Structure de l'objet attendu en sortie :** Chaque objet speaker retourné doit obligatoirement inclure un champ ou objet `entreprise` établissant explicitement la liaison avec le référentiel `Entreprise.json`.

---

### 4.4. Module Salles

#### `GET /api/salle`

* **Description :** Permet d'identifier les espaces disponibles et leurs caractéristiques.
* **Paramètres de requête (Query params - Optionnels) :**
* `id` (string/int) : Filtrage par identifiant unique.
* `nom` (string) : Filtrage par nom de la salle.
* `etage` (int) : Filtrage par niveau/étage.


* **Données obligatoires dans le JSON de réponse :** Chaque entité salle doit obligatoirement exposer les propriétés `nom`, `etage` et `contenance`.

---

### 4.5. Module Entreprises

#### `GET /api/entreprise`

* **Description :** Expose le nouveau référentiel métier aligné sur les speakers.
* **Paramètres de requête (Query params - Optionnels) :**
* `id` (string/int) : Filtrage par identifiant unique.
* `nomEntreprise` (string) : Filtrage par dénomination sociale.
* `speakerId` (string/int) : Filtrage de l'organisation rattachée à un speaker donné.


* **Données obligatoires dans le JSON de réponse :** Chaque entreprise expose nativement les propriétés `id`, `nomEntreprise`, `logo` (contenant une URL vers un placeholder graphique si aucun logo n'est configuré) et `siteUrl`.

---

## 5. Intégration et Comportement Technique de Swagger UI

* **Exécutabilité totale :** L'interface de documentation Swagger UI doit être configurée pour exécuter directement des requêtes réelles (bouton `Try it out`) sur l'ensemble des méthodes `GET`.
* **Gestion de l'autorisation :** Un composant de sécurité de type *API Key / Bearer Token* (bouton `Authorize`) doit être présent sur Swagger UI. L'utilisateur peut y injecter le JWT quotidien obtenu via le service de token. Une fois autorisé, Swagger doit automatiquement injecter le header HTTP `Authorization: Bearer <token>` pour valider et permettre l'exécution des verbes sensibles (`PUT`, `POST`, `DELETE`).

---

## 6. Matrice de Traçabilité & Plan de Validation (Recette)

Dans le cadre du Cycle en V, cette matrice permet de lier chaque exigence à un scénario de test pour prononcer la recette de conformité.

| Réf. Exigence | Composant Ciblé | Type de Test | Procédure de Test / Critère de Succès |
| --- | --- | --- | --- |
| **VAL-001** | API & Déploiement | Fonctionnel / Infra | L'endpoint `/api/conference` répond avec un statut HTTP `200` et accepte les 5 filtres de requête. Le site Front-End s'affiche sans erreur sur GitHub Pages. |
| **VAL-002** | API `/api/speaker` | Algorithmique | Exécuter un appel avec le filtre `etage`. Vérifier que le serveur calcule correctement les correspondances basées sur les salles des conférences du speaker. Vérifier la présence obligatoire du nœud `entreprise`. |
| **VAL-003** | API `/api/salle` | Fonctionnel | L'appel à `/api/salle` retourne bien une collection d'objets JSON contenant impérativement les champs `nom`, `etage` et `contenance`. |
| **VAL-004** | IHM (Accueil) | Visuel / Intégration | Charger la page d'accueil. Valider la présence exacte du titre `PROGRAMME DE LA JFTL 2026`, l'isolation de la colonne des démos éditeurs à droite (plus compacte) et la présence des 4 compteurs sous le programme. |
| **VAL-005** | IHM (Routage) | Navigation | Cliquer successivement sur une conférence, un speaker, une salle et une entreprise depuis le programme. L'application doit ouvrir les pages dédiées et charger les fiches détaillées correspondantes. |
| **VAL-006** | IHM (Relations) | Intégration Front | Ouvrir la page d'une entreprise. Valider que les données relationnelles (speakers et conférences associés) sont calculées, affichées et que chaque élément listé est à son tour cliquable. |
| **VAL-007** | API & Sécurité | Sécurité | 1. Tenter une action `POST/DELETE` avec un token possédant le scope `editor` -> Rejet HTTP 403 attendu.