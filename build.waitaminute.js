// https://www.npmjs.com/package/wait-until
var waitUntil = require('wait-until');
var fs = require('fs');

var resolutionDesDependancesTerminee = fs.existsSync("./node_modules/grapesjs/dist/grapesjs.min.js");
resolutionDesDependancesTerminee = resolutionDesDependancesTerminee && fs.existsSync("./node_modules/grapesjs/dist/grapesjs.min.js);
resolutionDesDependancesTerminee = resolutionDesDependancesTerminee && fs.existsSync("./node_modules/font-awesome/fonts/fontawesome-webfont.woff2");

waitUntil(2, 7, function condition() {
    return ( resolutionDesDependancesTerminee ? true : false);
}, function done(result) {
    console.log("La résolution des dépendances s'est terminée avec succès");
});

