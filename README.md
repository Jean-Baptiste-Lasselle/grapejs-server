# grapesjs-mjml-webclient

A bare grapesjs Instance served by asimple node/express static webserver


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

# Start it (Dev mode)

```bash
npm run start
```
**_What you get_**

An in Browser MJML Editor, enriched with `grapesjs`, with its tested bundle procedure `npm run bundle` , and it will look like : 

![screeshow 1](https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml-webclient/raw/master/documentations/images/MJML_EDITOR_SCREENSHOW_1_2019-03-21%2002-58-43.png)


![screeshow 2](https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml-webclient/raw/master/documentations/images/MJML_EDITOR_SCREENSHOW_2019-03-21%2003-00-55.png)

# Test it lazy

You can try that one and share it with our friends with [the _`NodeJS` Katacoda playgraound_](https://www.katacoda.com/courses/nodejs/playground)

Just copy paste that to the inbrowser-Katacoda-shell :

```bash
export URI_DE_CE_REPO=https://github.com/Jean-Baptiste-Lasselle/grapejs-server

mkdir -p ~/grapesjs-server
cd /grapesjs-server

git clone $URI_DE_CE_REPO . 

chmod +x ./build.sh
./build.sh

# pour démarrer le serveur, mais ce n'est que pour le mode dev.
npm run start
```




<!--
![screeshow 3](ccc)
-->





