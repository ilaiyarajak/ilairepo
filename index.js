var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/showfile"] = requestHandlers.showfile;
handle["/Loginvalidation"]=requestHandlers.Loginvalidation;
server.start(router.route, handle);