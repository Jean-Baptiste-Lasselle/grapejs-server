# Workspace

In this directory, the template the webdesigner is working on, is loaded.

The template's `index.html` shall be place at the root of this directory.


The static routing involves : 

* The `omega.js` App Entrypoint serves statically the `grapes` folder under the `/` endpoint
* The `omega.js` App Entrypoint serves statically the `workspace/omega` under the `/omega` endpoint

```JavaScript

app.use('/', express.static('public'));
app.use('/workspace', express.static('workspace'));

```

## Next try out 

* The `omega.js` App Entrypoint serves statically the `public` folder under the `/workspace` endpoint
* The `omega.js` App Entrypoint serves statically the `workspace` under the `/` endpoint

```JavaScript

app.use('/workspace', express.static('public'));
app.use('/', express.static('workspace'));

```
