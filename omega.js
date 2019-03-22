var express = require("express");

const hostname = process.env.OMEGA_HOST;
const numeroPortMonAppli = process.env.OMEGA_PORT;
// cf. `baclklog` argument of listen method, setting maximum number of pending requests
//  I'll set that to 500 here
const nombreMaximalDeRequetesEnTraitement = process.env.OMEGA_BACKLOG;
// const nombreMaximalDeRequetesEnTraitement = process.env.BACKLOG;

console.log("vérification hostname : " + hostname);
console.log("vérification numeroPortMonAppli : " + numeroPortMonAppli);
console.log("vérification BACKLOG : " + nombreMaximalDeRequetesEnTraitement);

/**
 *
 *   OMEGA APP
 * 
 ***/
var omega = express();

/**
 *
 *   OMEGA APP STATIC ROUTES
 * 
 ***/
omega.use(express.static('grapes'));
omega.use(express.static('workspace'));


var storage_endpoint = require('./omega/storage-endpoint');

omega.use('/storage', storage_endpoint);



// https://nodejs.org/api/net.html#net_server_listen
// server.listen([port[, host[, backlog]]][, callback]) for TCP servers 
// baclklog = maximum number of pending requests, I'll set that to 500 here
var server = omega.listen(numeroPortMonAppli, hostname, nombreMaximalDeRequetesEnTraitement, function(){
    var numport = server.address().port;
    var nomReseau = server.address().address;
    var nbMaxReq = 511; // 511 is the default server backlog limit // server.backlog();
    
    console.log("Omega Server started at http://" + nomReseau + ":%s", numport + " [nbMaxReq] " + nbMaxReq);
});
