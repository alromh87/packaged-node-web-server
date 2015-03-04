var log = require("./log.js");

var app = 
{
	// io: null
};

app.init = function init(httpServer)
{
	// TODO: add WebSocket (socket.io) endpoints or other light non-HTTP backend connections here as necessary (or move to a real app framework for Node like Express)
	// app.io = require("socket.io")(httpServer);
	// ...

	log("Web application initialized");
};

module.exports.init = app.init;
