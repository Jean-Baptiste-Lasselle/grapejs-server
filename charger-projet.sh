#!/bin/bash

export REPERTOIRE_GRAPEJS=/home/scrapbook/tutorial
export REPERTOIRE_ESPACE_DE_TRAVAIL_WEB_DESIGNER=$REPERTOIRE_GRAPEJS/public/webdesigner-playground

clear



# on suppose que l'archive téléchargée est nécessairement un zip
export URL_TEMPLATE_HTML5=https://templated.co/picturesque/download

demanderURL_TEMPLATE () {
  echo "Veuillez saisir l'URL de téléchargement du template HTML5 sur lequel vous voulez travailler"
  read -p " " URL_TEMPLATE_HTML5
  echo "  "
}

chargerleProjet () {
  # dans $REPERTOIRE_GRAPEJS  ,  le build grapesjs a déjà été fait, mais l'application n'est pas démarrée

  mkdir -p $REPERTOIRE_ESPACE_DE_TRAVAIL_WEB_DESIGNER

  curl -L $URL_TEMPLATE_HTML5  -o template-HTML5-current.zip

  unzip  template-HTML5-current.zip  -d  $REPERTOIRE_ESPACE_DE_TRAVAIL_WEB_DESIGNER

}

demanderURL_TEMPLATE

while true; do
    echo "[$URL_TEMPLATE_HTML5]"
    read -p "Do you confirm you want to load this template?" yn
    case $yn in
        [Yy]* ) chargerleProjet;; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

echo "Kata Prêt!"


