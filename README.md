# grapesjs-mjml-webclient

A simple grapesjs/mjml webclient builded : 
* Once with `Browserify`, but I almost immediately looked up the internet in search of a `css bundler`, and soon I switched to [`Parcel`](https://parceljs.org/getting_started.html)
* Today using npm and  [`Parcel`](https://parceljs.org/getting_started.html) from https://github.com/artf/grapesjs-mjml (a great job from mailjet.com team )
* Soon with [webpack](https://webpack.js.org/)

# Build it

https://parceljs.org/getting_started.html




```bash

export URI_DE_CE_REPO=https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml-webclient

# -- System : Alpine
# apk update && apk add git tree

# -- System : CeentOS
# yum uopdate -y && yum install -y git tree

mkdir -p ~/mjml-edior
cd /mjml-editor
git clone $URI_DE_CE_REPO . 

echo "Dpendency Resolution"
npm install

# Structure
# ./public/assets/font-awesome/fonts
# ./public/assets/grapesjs/grapesjs.min.js
# ./public/assets/grapesjs/grapesjs.min.css
# ./public/assets/grapesjs-mjml/grapesjs-mjml.min.js

# Installing grapesjs inside client bundle
cp node_modules/grapesjs/dist/grapesjs.min.js ./public/assets/grapesjs/grapesjs.min.js
cp node_modules/grapesjs/dist/css/grapesjs.min.css ./public/assets/grapesjs/grapesjs.min.css
# Installing grapesjs-mjmil inside client bundle 
cp node_modules/grapesjs-mjml/dist/grapesjs-mjml.min.js ./public/assets/grapesjs-mjml/grapesjs-mjml.min.js
# Installing fonts
cp ./node_modules/font-awesome/fonts/fontawesome-webfont.woff2 ./public/assets/font-awesome/fonts/fontawesome-webfont.woff2

# 
# Pour faire le bundle du client
# Les [parcel index.html] et [parcel watch index.html] démarrent un serveur sur le port 1234
echo "Building : Client Bundle"
parcel build index.html
tree -allh
# pour démarrer le serveur, mais ce n'est que pour le mode dev.
# node omegga.js
```



* le `npm init` est là : 

```bash
# resolving dependencies, and addding them to package.json
# npm install grapesjs --save
# npm install grapesjs-mjml --save 
# npm install -g parcel-bundler --save-dev

# resolving package.json dependencies
# npm install -g parcel-bundler --save-dev

```

