#!/bin/bash

export REPERTOIRE_GRAPEJS=/home/scrapbook/tutorial
export REPERTOIRE_ESPACE_DE_TRAVAIL_WEB_DESIGNER=$REPERTOIRE_GRAPEJS/public/webdesigner-playground

# on suppose que l'archive téléchargée est nécessairement un zip
export URL_TEMPLATE_HTML5=https://templated.co/picturesque/download

# dans $REPERTOIRE_GRAPEJS  ,  le build grapesjs a déjà été fait, mais l'application n'est pas démarrée

mkdir -p $REPERTOIRE_ESPACE_DE_TRAVAIL_WEB_DESIGNER

curl -L $URL_TEMPLATE_HTML5  -o template-HTML5-current.zip

unzip  template-HTML5-current.zip  -d  $REPERTOIRE_ESPACE_DE_TRAVAIL_WEB_DESIGNER
