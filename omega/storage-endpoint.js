const fs = require ('fs');
const replaceString = require('replace-string');
const htmlparser = require('node-xml-stream');
// "stringbuffer": "^1.0.0"
const StringBuffer = require("stringbuffer");

const htmlFileToLoadForEdition = "workspace/omega/" + process.env.HTML_FILE_TO_LOAD_OMEGA_REALTIVE_PATH

console.log("Verification HTML_FILE_TO_LOAD_OMEGA_REALTIVE_PATH : " + htmlFileToLoadForEdition);


/**
 *
 *   OMEGA APP CUSTOM STORAGE ENDPOINT
 *   thx to https://webapplog.com/url-parameters-and-routing-in-express-js/
 *          https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
 ***/
var findTemplateById = function (templateid, callback) {
  // Perform database query that calls callback when it's done
  // This is our fake database
  // Ici, je vais aller chercher le fichier HMTL omega/index.html, definit par 


  page = fs.readFileSync(htmlFileToLoadForEdition);
  console.log(page.toString());
  
  
  //const $ = cheerio.load(page.toString());
  
  console.log(" +++++++++++++++++++++++");
  console.log(" +++++     ICI    ++++++");
  console.log(" +++++++++++++++++++++++");
  
  var pageTraitee = new StringBuffer();
  pageTraitee.append("<html>");
  
  var parser = new htmlparser();
  //var root = htmlparser.parse(page.toString());
  parser.on('opentag', (name, attrs) => {
    if( name === "img" ) {
	   console.log(" HOP :  " + name);
	   console.log(" HOP :  " + JSON.stringify(attrs));
	   console.log(" HOP old src :  " + attrs.src);
	   attrs.src = "omega/" + attrs.src;
	   console.log(" HOP old src :  " + attrs.src);
	   // attrs = { src: 'omega/' + this.value }
	   
     }
     // on close tag
     pageTraitee.append("<" + name + " ");
     Object.keys(attrs).forEach(function(key){
         console.log(key + "=" + "'" + attrs[key] + "'");
         pageTraitee.append(key + '=' + "'" + attrs[key] + "'");
     });
     
     pageTraitee.append(" >");
  });
  parser.on('closetag', (name, attrs) => {
     // on close tag
     pageTraitee.append("</");
     pageTraitee.append(name);
     pageTraitee.append(">");
  });
  
  // <tag>TEXT</tag>
  parser.on('text', letext => {
      // text = 'TEXT'
      pageTraitee.append(letext);
  });
  

  pageTraitee.append("</html>");
  
  // var pageTraitee = parser.write(page.toString());
  var everythingWentOnGood = parser.write(page.toString());
  // to get more info on error if (!everythingWentOnGood)
  var resumeInfoTraitment = parser.end();
  console.log(JSON.stringify(pageTraitee));
  return callback(null, pageTraitee);
};


// Even though an express reference was created by omega.js entrypoint 
var express = require('express');
var storageRouter = express.Router();

// Storage route.   http://$HOSTNAME/storage/v1/templates/4
storageRouter.get('/v1/templates/:templateid', function(request, response, next) {
  var templateid = request.params.templateid;
  console.log(" >>>>>>>>>>>>>>>>>>>>>  passage dans fonction 1 : templateid=" + templateid);
  findTemplateById(templateid, function(error, template) {
    console.log(" >>>>>>>>>>>>>>>>>>>>>  passage dans fonction 2 ");
    if (error) return next(error);
    //return response.render('templatetoload', templateid);
    // response.setHeader('Content-Type', 'text/html');
    response.setHeader('Content-Type', 'application/json');
    var jsonRetourne = {};
    jsonRetourne.html = template.toString();
    jsonRetourne.css = null;
    jsonRetourne.style = null;
    jsonRetourne.components = null;
    return response.send(jsonRetourne);
    
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
