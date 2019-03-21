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
# yum update -y && yum install -y git tree

mkdir -p ~/mjml-edior
cd /mjml-editor
git clone $URI_DE_CE_REPO . 

chmod +x ./build.sh
./build.sh

# tree -allh
# ls -allh
# pour démarrer le serveur, mais ce n'est que pour le mode dev.
# node omegga.js
```

# Test it (Dev mode)

```bash
npm run start
```

# What you get

An in Browser MJML Editor, enriched with `grapesjs`, with its tested bundle procedure `npm run bundle` , and it will look like : 

![screeshow 1](ccc)
![screeshow 2](ccc)
![screeshow 3](ccc)


MERCI_PARCEL_ORG 0.0.1

La moindre des toutes petites dépendances est maitnenant parfaitement chargée : 
* notamment les boutons qui permettent d'insérer des _doubles-colonnes_, _triples_colonnes_ etc...
* et là c'est vraiment beau, et otues les fonctions sont opérationnelles.

Grâce à [`Parcel`](https://parceljs.org/getting_started.html)





