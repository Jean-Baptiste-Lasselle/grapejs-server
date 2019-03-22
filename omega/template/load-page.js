/**
 * 
 * This module is responsible for loading a given page from the workspace, to the grapesjs editor
 * To achieve that, omega : 
 * 
 * - downloads and installs the chosen HTML5 template into the /workspace/omega folder
 * - serves statically the /grapes folder, using expressjs.com
 * - serves statically the /workspace folder, using expressjs.com
 * - parse the page, and adds the /omega prefix to all href and src attributes values
 * 
 * 
 * /
