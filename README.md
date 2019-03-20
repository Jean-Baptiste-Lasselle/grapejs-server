# TODO

Faire le pipeline dans l'infra privée, qui : 
* génère une application pure client web en `NodeJS` : paramétrable (nom de projet, version d'initialisation du projet)
* fait un premier commit sur le repository dont l'URL est désignée dans le `package.json`. Le robot vérifie que le repository existe, et qu'il n'y a aucun commit encore : s'il y a un premier commit, le robot considèrera que l'initialisation a déjà eu lieu. le repo est créé s'il n'existe pas
* ne créée pas le repository git, il doit être créé par un autre compoosant (mais cela doit être fait, au plus tard maintenant, le repo est créé s'il n'existe pas)

# grapesjs-mjml-webclient

A simple grapesjs/mjml webclient builded : 
* Today using npm and  [`Parcel`](https://parceljs.org/getting_started.html) from https://github.com/artf/grapesjs-mjml (a great job from mailjet.com team )
* Soon with [webpack](https://webpack.js.org/)

# Build it

https://parceljs.org/getting_started.html




```bash
# resolving dependencies, and addding them to package.json
# npm install grapesjs --save
# npm install grapesjs-mjml --save 
# npm install -g parcel-bundler --save-dev

# resolving package.json dependencies
npm install -g parcel-bundler


```
Pour le `npm install -g parcel-bundler`, il ne serait pas incensé, come le suggère [cet article](https://hackernoon.com/avoiding-the-npm-global-flag-in-package-json-based-projects-5a1e7a50706), de définir dans le `package.json` un script qi exécute simplement l'instrcution ``npm install -g parcel-bundler`
