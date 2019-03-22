/**
 * 
 * This module is responsible for loading a given page from the workspace, to the grapesjs editor
 * To achieve that, omega : 
 * 
 * - downloads and installs the chosen HTML5 template into the /workspace/omega folder
 * - serves statically the /grapes folder, using expressjs.com
 * - serves statically the /workspace folder, using expressjs.com : this makes all template files under the /workspace/omega folder
 * - after that, omega grabs the top HTML file in the /workspace/omega folder, 
 * - parse the page, and adds the /omega prefix to all href and src attributes values, all but : 
 *    - those starting with the '#' character
 * 
 * 
 **/
 

const fs = require('fs');
const replaceString = require('replace-string');


const HTML_FILE_TO_LOAD_OMEGA_REALTIVE_PATH=process.env.HTML_FILE_TO_LOAD_OMEGA_REALTIVE_PATH;



console.log("vérification HTML_FILE_TO_LOAD_OMEGA_REALTIVE_PATH : " + HTML_FILE_TO_LOAD_OMEGA_REALTIVE_PATH);

// fs.readFile('workspace/omega/demofile1.html');

const page = fs.readFile("workspace/omega/" + HTML_FILE_TO_LOAD_OMEGA_REALTIVE_PATH);


 
// const page = 'My friend has a 🐑. I want a 🐑 too!';
 
replaceString(page, '🐑', '🦄');
//=> 'My friend has a 🦄. I want a 🦄 too!'
