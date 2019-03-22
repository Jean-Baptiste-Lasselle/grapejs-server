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



var omega = express();

// app.use(express.static('.'));
//
omega.use(express.static('grapes'));
omega.use(express.static('workspace'));

// https://nodejs.org/api/net.html#net_server_listen
// server.listen([port[, host[, backlog]]][, callback]) for TCP servers 
// baclklog = maximum number of pending requests, I'll set that to 500 here
var server = omega.listen(numeroPortMonAppli, hostname, nombreMaximalDeRequetesEnTraitement, function(){
    var numport = server.address().port;
    var nomReseau = server.address().address;
    var nbMaxReq = server.address().backlog;
    
    console.log("Omega Server started at http://" + nomReseau + ":%s", numport + " [nbMaxReq] " + nbMaxReq);
});
