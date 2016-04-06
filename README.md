Packaged Node Web Server
====================

A portable HTTP web server using Node.js for light HTML5 development (+/- WebSockets) and packaging for quick start with optional launch directly to a default browser

https://github.com/frog/packaged-node-web-server

Usage
--------------------

- Configuration options are located in the server/config.js module:

		httpServerPort: 80,
		webRootDirName: "client",
		defaultDocument: "default.htm",
		isCachingDisabled: true,
		doBrowserLaunch: true,
		contentTypes: // TODO: add other MIME content type entries as needed for your specific web site or app
		{
			".htm" : "text/html",
			".css" : "text/css",
			".js" : "text/javascript",
			".png" : "image/png",
			".jpg" : "image/jpg",
			".gif" : "image/gif",
			".svg" : "image/svg+xml",
			".json" : "application/json",
			".ttf" : "font/truetype",
			".otf" : "font/opentype",
			".woff" : "application/x-font-woff",
			".mp3" : "audio/mpeg",
			".mp4" : "video/mp4"
		}

- The server directory holds the Node.js script modules along with the platform binaries and any required node_modules resources you npm or manually pull in.

- The client directory is where you place the root of your static web site or app to be served up.

- Use the launcher files at the root appropriate for your platform (Windows, Mac OS X, or Linux). Take care to respect line endings in the text file appropriate for your target platform (CRLF for Windows, LF for Mac OS X/Linux). Additionally, when copying or unpacking on Mac OS X or Linux, you will need to give the binary and scripts executable permissions (chmod +x).
  - Windows: double-click the launch-windows.bat
  - Mac OS X: control-click the launch-macosx.command file and select "Open" or "Open in Terminal" 
  - Linux: execute the launch-linux.sh script after setting executable permissions
