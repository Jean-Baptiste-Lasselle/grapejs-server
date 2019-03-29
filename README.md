À mettre dans le panier (don't mind that it's just a personal copy/paste, no relation with this repo) : 

<a href="https://dev.azure.com/github/Atom/_build/latest?definitionId=32&amp;branchName=master" rel="nofollow"><img src="https://camo.githubusercontent.com/a9d6d0b75ac41d574a2326d317c89a6522e91a1c/68747470733a2f2f6465762e617a7572652e636f6d2f6769746875622f41746f6d2f5f617069732f6275696c642f7374617475732f41746f6d25323050726f64756374696f6e2532304272616e636865733f6272616e63684e616d653d6d6173746572" alt="Build status  " data-canonical-src="https://dev.azure.com/github/Atom/_apis/build/status/Atom%20Production%20Branches?branchName=master" style="max-width:100%;"></a>

* Des templates biootstrap : https://startbootstrap.com/previews/sb-admin-2/


https://startbootstrap.com/previews/sb-admin-2/

# Grapesjs server
====================================

A bare grapesjs Instance served by asimple node/express static webserver

Release inventory : 
* `0.0.1` : gives you exactly what a bare grapesjs instance should be, meaning almostno controls on the block toolbox, etc... Gives you exactly whatyou've got live at ccc, source code at https://github.com/artf/grapesjs
* `0.0.2` : gives you exactly whatyou've got live at https://grapesjs.com/demo.html, source code at https://github.com/artf/grapesjs-preset-webpage



You can try that one and share it with our friends with [the _`NodeJS` Katacoda playgraound_](https://www.katacoda.com/courses/nodejs/playground)


# Build it

https://parceljs.org/getting_started.html



```bash
export URI_DE_CE_REPO=https://github.com/Jean-Baptiste-Lasselle/grapejs-server

# -- System : Alpine
# apk update && apk add git tree

# -- System : CentOS
# yum update -y && yum install -y git tree

mkdir -p ~/grapesjs-server
cd /grapesjs-server

git clone $URI_DE_CE_REPO . 

chmod +x ./build.sh
./build.sh

```
# Load an HTML5 template

```bash

chmod +x ./charger-projet.sh
./charger-projet.sh
```


# Start it (Dev mode)

```bash
export OMEGA_PORT=3000 
export OMEGA_HOST=0.0.0.0 
export OMEGA_BACKLOG=500 
export HTML_FILE_TO_LOAD_OMEGA_REALTIVE_PATH=index.html

npm run start
```

**_What you get with release `0.0.1`_**

An in Browser MJML Editor, enriched with `grapesjs`, with its tested bundle procedure `npm run bundle` , and it will look like : 

![screeshow 1](https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml-webclient/raw/master/documentations/images/MJML_EDITOR_SCREENSHOW_1_2019-03-21%2002-58-43.png)


![screeshow 2](https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml-webclient/raw/master/documentations/images/MJML_EDITOR_SCREENSHOW_2019-03-21%2003-00-55.png)



<!--
![screeshow 3](ccc)
-->





