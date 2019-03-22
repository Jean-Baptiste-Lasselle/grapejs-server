

/**
 *
 *   OMEGA APP CUSTOM STORAGE ENDPOINT
 *   thx to https://webapplog.com/url-parameters-and-routing-in-express-js/
 *          https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
 ***/
app.



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
