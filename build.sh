#!/bin/sh

echo "Dependency Resolution"

resolutionDesDependances () {
npm install
}

test () {
echo "No Tests to execute yet."
}

# Structure
# ./public/assets/font-awesome/fonts
# ./public/assets/grapesjs/grapesjs.min.js
# ./public/assets/grapesjs/grapesjs.min.css
# ./public/assets/grapesjs-mjml/grapesjs-mjml.min.js
buildDuProjet () {
# Installing grapesjs inside client bundle
cp -Rf node_modules/grapesjs-preset-webpage/* ./grapes/

# replcaing by my own custom HTML, to configure StorageMManager :
rm ./grapes/index.html
cp grapes.html ./grapes/index.html

#
# Pour faire le bundle du client
# Les [parcel index.html] et [parcel watch index.html] démarrent un serveur sur le port 1234
echo "Building : Client Bundle"
# see. https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml-webclient/blob/620ead430419749662eecd783c170ed7b7e543dd/package.json#L8
npm run bundle
echo "Client Bundle Build successfully completed."
# Installing the production bundle to production showcase folder 
mkdir -p ./grapes/production
cp -Rf dist/* ./grapes/production
}



#le plus petit pipeline du monde
resolutionDesDependances && npm run test && buildDuProjet
# && npm run waitaminute
