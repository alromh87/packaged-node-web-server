Packaged Node Web Server
====================

A portable HTTP web server using Node.js for light HTML5 development and/or packaging for quick start and launch directly to a default browser

https://github.com/frog-eXPeriMeNTaL/packaged-node-web-server (frog_eXPeriMeNTaL)


Usage
--------------------

- Configuration options are located at the top of the server/node-http-server.js file

        var httpHostName            = "localhost";
        var httpPort                = 8888;
        var webRootDirName          = "web";
        var defaultDocument         = "default.htm";
        var preventCaching          = true;
        var launchDefaultBrowser    = true;

        // TODO: add other MIME content type entries as needed for your specific web site or app
        var contentTypes = 
        {
            ".htm" : "text/html",
            ".css" : "text/css",
            ".png" : "image/png",
            ".jpg" : "image/jpg",
            ".gif" : "image/gif",
            ".js"  : "text/javascript",
            ".json": "application/json"
        };

- The server directory holds the Node.js script along with the platform binaries (version 0.10.10 as of this commit). The web directory is where you place the root of your web site or app to be served up.

- Use the launcher files at the root appropriate for your platform (Windows, Mac OS X, or Linux). References to x64 Node binaries are used by default in the scripts. Take care to respect line endings in the text file appropriate for your target platform (CRLF for Windows, LF for Mac OS X/Linux). Additionally, when copying or unpacking on Mac OS X or Linux, you will need to give the binary and scripts executable permissions (chmod +x).
