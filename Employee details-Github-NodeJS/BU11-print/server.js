var http = require("http");
var url = require("url");
var requestHandlers = require("./requestHandlers");

//function start(route, handle) {
function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    requestHandlers.start(response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

//exports.start = start;
start();