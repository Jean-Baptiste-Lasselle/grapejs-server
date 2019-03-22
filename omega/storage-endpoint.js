const fs = require ('fs');
const replaceString = require('replace-string');

const htmlFileToLoadForEdition = process.env.HTML_FILE_TO_LOAD_OMEGA_REALTIVE_PATH

console.log("vérification HTML_FILE_TO_LOAD_OMEGA_REALTIVE_PATH : " + htmlFileToLoadForEdition);

/**
 *
 *   OMEGA APP CUSTOM STORAGE ENDPOINT
 *   thx to https://webapplog.com/url-parameters-and-routing-in-express-js/
 *          https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
 ***/
var findTemplateById = function (templateid, callback) {
  // Perform database query that calls callback when it's done
  // This is our fake database
  // Ici, je vais aller chercher le fichier HMTL omega/index.html, définit par 
  var page = fs.readFile("workspace/omega/" + htmlFileToLoadForEdition);
  /*
  if (!users[templateid])
    return callback(new Error(
      'No template matching '
       + templateid
      )
    );
    */
  return callback(null, users[username]);
};


// an express reference should already be there, created by omega.js entrypoint 
// var express = require('express');
var storageRouter = express.Router();

// Home page route.
storageRouter.get('/v1/templates/:templateid', function(request, response, next) {
  var templateid = request.params.templateid;
  findTemplateById(templateid, function(error, template) {
    if (error) return next(error);
    return response.render('templatetoload', template);
  });
});


module.exports = storageRouter;



/*

// https://nodejs.org/api/fs.html#fs_fs_access_path_mode_callback

const file = 'package.json';

// Check if the file exists in the current directory.
fs.access(file, fs.constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

// Check if the file is readable.
fs.access(file, fs.constants.R_OK, (err) => {
  console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
});

// Check if the file is writable.
fs.access(file, fs.constants.W_OK, (err) => {
  console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
});

// Check if the file exists in the current directory, and if it is writable.
fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
  if (err) {
    console.error(
      `${file} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
  } else {
    console.log(`${file} exists, and it is writable`);
  }
});




*/
