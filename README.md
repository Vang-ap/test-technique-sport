# Test Technique

Le but de cet exercice est de créer une partie back-end (api) et une partie front-end (app).  
Le test technique se situe sur un repo Github.  
On peut y accéder par le lien suivant `https://github.com/Vang-ap/test-technique-sport`

## Partie back-end

Le back est créé avec les frameworks:  
* Express
* Node

La base de donnée est créé avec MongoDB.  

Librairies utilisées : 
* mongoose
* dotenv
* cors

Autres outils utilisés :
* Docker
* Postman
* Studio 3T

### Lancer le serveur

Pour lancer le serveur back il faut se placer dans le bon répertoire (ici api).  A l'aide de la commande `node index.js` le serveur se lance.

Pour y accéder, il faut utiliser `http://localhost:3000/`

## Partie front-end

Framework / librairies utilisés :
* Angular
* Bootstrap
* rxjs

### Lancer le serveur

Pour lancer le front-end il faut se placer sur le répertoire app. A l'aide de la commande `ng serve` ou `ng serve --open` (ouverture auto)

Pour naviger utilisez `http://localhost:4200/`.

#### Test unitaire

Pour lancer les tests unitaires, la commnade `ng test` est disponible

Si on souhaite cibler un composant en particulier il faut venir modifier le chemain du dossier dans le fichier `test.ts`  

-> partie à modifier : `const context = require.context('.', true, /\.spec\.ts$/);`  
