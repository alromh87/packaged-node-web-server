Packaged Node Web Server
====================

A portable HTTP web server using Node.js for light HTML5 development and/or packaging for quick start and launch directly to a default browser

https://github.com/frog-opensource/packaged-node-web-server (frog-opensource)


Usage
--------------------

- Configuration options are located at the top of the server/node-http-server.js file

		var hostName			= "localhost";
		var port				= 80;
		var webroot				= "client";
		var defaultDocument		= "default.htm";
		var isCachingAllowed	= false;
		var isBrowserLaunched	= true;

        // TODO: add other MIME content type entries as needed for your specific web site or app
        var contentTypes = 
        {
            ".htm" : "text/html",
            ".css" : "text/css",
            ".png" : "image/png",
            ".jpg" : "image/jpg",
            ".gif" : "image/gif",
            ".js"  : "text/javascript",
            ".json": "application/json",
            ...
        };

- The server directory holds the Node.js script along with the platform binaries and any required node_modules resources. The client directory is where you place the root of your web site or app to be served up.

- Use the launcher files at the root appropriate for your platform (Windows, Mac OS X, or Linux). Take care to respect line endings in the text file appropriate for your target platform (CRLF for Windows, LF for Mac OS X/Linux). Additionally, when copying or unpacking on Mac OS X or Linux, you will need to give the binary and scripts executable permissions (chmod +x).
-- Windows: double-click the launch-windows.bat
-- Mac OS X: control-click the launch-macosx.command file and select "Open" or "Open in Terminal" 
-- Linux: execute the launch-linux.sh script after setting executable permissions
