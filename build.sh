#!/bin/sh

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
# see. https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml-webclient/blob/620ead430419749662eecd783c170ed7b7e543dd/package.json#L8
echo "Client Bundle Build successfully completed."
