# grapesjs-mjml-webclient

A simple grapesjs/mjml webclient builded : 
* Once with `Browserify`, but I almost immediately looked up the internet in search of a `css bundler`, and soon I switched to [`Parcel`](https://parceljs.org/getting_started.html)
* Today using npm and  [`Parcel`](https://parceljs.org/getting_started.html) from https://github.com/artf/grapesjs-mjml (a great job from mailjet.com team )
* Soon with [webpack](https://webpack.js.org/)

# Build it

https://parceljs.org/getting_started.html




```bash
export URI_DE_CE_REPO=https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml-webclient
mkdir -p ~/mjml-edior
cd /mjml-editor
git clone $URI_DE_CE_REPO . 

npm install

# installing grapesjs inside client bundle
cp node_modules/grapesjs/dist/grapesjs.min.js ./public
cp node_modules/grapesjs/dist/css/grapesjs.min.css
# installing grapesjs-mjmil inside client bundle
cp node_modules/grapesjs-mjml/dist/grapesjs-mjml.min.js
# installing fonts
cp node_modules/grapesjs-mjml/dist/grapesjs-mjml.min.js

node omegga.js
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
