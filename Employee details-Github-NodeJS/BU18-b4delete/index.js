var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/showfile"] = requestHandlers.showfile;
handle["/showtable"]=requestHandlers.showtable;
handle["/insert"]=requestHandlers.insert;
handle["/deleteshow"]=requestHandlers.deleteshow;
handle["/deleterow"]=requestHandlers.deleterow;
server.start(router.route, handle);