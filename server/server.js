// ============================================================
// CONFIGURATION OPTIONS
// ============================================================

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
	".js"  : "text/javascript",
	".png" : "image/png",
	".jpg" : "image/jpg",
	".gif" : "image/gif",
	".svg" : "image/svg+xml",
	".json": "application/json",
	".ttf" : "font/truetype",
	".otf" : "font/opentype",
	".woff" : "application/x-font-woff",
	".mp3" : "audio/mpeg",
	".mp4" : "video/mp4"
};

// ============================================================

var http = require("http")
var url = require("url")
var path = require("path")
var fs = require("fs")
var exec = require('child_process').exec

var webroot = path.resolve(process.cwd(), ".." + path.sep + webroot);

http.createServer(function(request, response) 
{
	var uri = url.parse(request.url).pathname
	
	var filename = path.join(webroot, uri);
	
	console.log("URL requested: " + uri);

	fs.exists(filename, function(exists) 
	{
		if (!exists) 
		{
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.write("404 Not Found\n");
			response.end();
			return;
		}

		if (fs.statSync(filename).isDirectory())
		{ 
			filename += "/" + defaultDocument;
		}
		
		fs.readFile(filename, "binary", function(err, file) 
		{
			if (err) 
			{        
				response.writeHead(500, { "Content-Type":"text/plain" });
				response.write(err + "\n");
				response.end();
				return;
			}

			var headers = {};
			headers["Content-Type"] = contentTypes[path.extname(filename)] || "text/plain";
			if (!isCachingAllowed)
			{
				headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate";
			}

			response.writeHead(200, headers);
			response.write(file, "binary");
			response.end();
		});
	});
}).listen(parseInt(port, 10));

console.log("Local web server started and listening on " + hostName + " at port " + port);

if (isBrowserLaunched)
{
	var launchURL = "http://" + hostName + ":" + port + "/";
	var execParam = ' "' + launchURL.replace(/"/, '\\\"') + '"';

	switch (process.platform) 
	{
		case "win32":
			exec('start ""' + execParam);
			break;
		case "darwin":
			exec("open" + execParam);
			break;
		case "linux":
			exec("xdg-open" + execParam);
			break;
		default:
			break;
	}

	console.log("Default web browser launched to " + launchURL);
}
