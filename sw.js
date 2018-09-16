"use strict";
importScripts('sw-toolbox.js');
toolbox.precache(["calc.html","calc.css", "calc.js"]);
toolbox.router.get('/calculator/images/*', toolbox.cacheFirst);
toolbox.router.get('/calculator/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});
