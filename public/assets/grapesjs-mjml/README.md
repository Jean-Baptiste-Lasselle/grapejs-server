# Structure du projet

Dans ce répertoire `grapesjs`, tous les fichiers de dépendances tierces [`grapesjs-mlml`](https://github.com/artf/grapesjs-mjml).


```bash

# strcuture
# ./public/assets/font-awesome/fonts
# ./public/assets/grapesjs/grapesjs.min.js
# ./public/assets/grapesjs/grapesjs.min.css
# ./public/assets/grapesjs-mjml/grapesjs-mjml.min.js

# installing grapesjs inside client bundle
cp node_modules/grapesjs/dist/grapesjs.min.js ./public/assets/grapesjs/grapesjs.min.js
cp node_modules/grapesjs/dist/css/grapesjs.min.css ./public/assets/grapesjs/grapesjs.min.css
# installing grapesjs-mjmil inside client bundle 
cp node_modules/grapesjs-mjml/dist/grapesjs-mjml.min.js ./public/assets/grapesjs-mjml/grapesjs-mjml.min.js
# installing fonts
cp ./node_modules/font-awesome/fonts/fontawesome-webfont.woff2 ./public/assets/font-awesome/fonts/fontawesome-webfont.woff2
```
