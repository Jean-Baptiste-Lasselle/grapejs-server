# grapesjs-mjml-webclient

A simple grapesjs/mjml webclient builded : 
* Once with `Browserify`, but I almost immediately looked up the internet in search of a `css bundler`, and soon I switched to [`Parcel`](https://parceljs.org/getting_started.html)
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


```json
{
  "name": "bernard",
  "version": "0.0.0",
  "description": "Some NPM test.",
  "main": "index.js",
  "scripts": {
    "test": "make test"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/wolfeidau/npmtest.git"
  },
  "keywords": [
    "npm"
  ],
  "author": "Mark Wolfe <mark@wolfe.id.au>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/wolfeidau/npmtest/issues"
  },
  "homepage": "https://github.com/wolfeidau/npmtest"
}
```

