# grapesjs-mjml-webclient

A simple grapesjs/mjml webclient builded : 
* Once with `Browserify`, but I almost immediately looked up the internet in search of a `css bundler`, and soon I switched to [`Parcel`](https://parceljs.org/getting_started.html)
* Today using npm and  [`Parcel`](https://parceljs.org/getting_started.html) from https://github.com/artf/grapesjs-mjml (a great job from mailjet.com team ) : What I loved about it, is that it will keep failing your build as long as it has not catched every one single dependency, be it a font file, referenced in css file, import in another css file. With Parcel, you always get a demo just as good as the author. Ths repo is a good example, the MJML Editor is pretty neat :100: !
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
# Test it lazy

You can try that one and share it with our friends with [the _`NodeJS` Katacoda playgraound_](https://www.katacoda.com/courses/nodejs/playground)

Just copy paste that to the inbrowser-Katacoda-shell :

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

```

# Test it (Dev mode)

```bash
npm run start
```

# What you get

An in Browser MJML Editor, enriched with `grapesjs`, with its tested bundle procedure `npm run bundle` , and it will look like : 

![screeshow 1](https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml-webclient/raw/master/documentations/images/MJML_EDITOR_SCREENSHOW_1_2019-03-21%2002-58-43.png)


![screeshow 2](ccc)


![screeshow 3](ccc)



MERCI_PARCEL_ORG 0.0.1

La moindre des toutes petites dépendances est maitnenant parfaitement chargée : 
* notamment les boutons qui permettent d'insérer des _doubles-colonnes_, _triples_colonnes_ etc...
* et là c'est vraiment beau, et otues les fonctions sont opérationnelles.

Grâce à [`Parcel`](https://parceljs.org/getting_started.html)





