# Grapesjs server

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
export OMEGA_BACKLOG=3000 

npm run start
```

**_What you get with release `0.0.1`_**

An in Browser MJML Editor, enriched with `grapesjs`, with its tested bundle procedure `npm run bundle` , and it will look like : 

![screeshow 1](https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml-webclient/raw/master/documentations/images/MJML_EDITOR_SCREENSHOW_1_2019-03-21%2002-58-43.png)


![screeshow 2](https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml-webclient/raw/master/documentations/images/MJML_EDITOR_SCREENSHOW_2019-03-21%2003-00-55.png)



<!--
![screeshow 3](ccc)
-->





