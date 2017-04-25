(function() {
    const express = require("express");
    const app = express();

    // make server write a no-cahce header
    function addNoCacheHeaders (request, response, next) {
        response.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        response.header('Expires', '-1');
        response.header('Pragma', 'no-cache');
        next();
    }

    app.use(addNoCacheHeaders)
    app.use(express.static(__dirname + "/app"));
    app.listen(1337);
})()
