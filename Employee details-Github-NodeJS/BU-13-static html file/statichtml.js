var sys = require("sys"),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");
http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname;
    console.log("URL: "+uri);
    var filename = path.join(process.cwd(), uri);
    console.log("filename: "+filename);
    path.exists(filename, function(exists) {
    	if(!exists) {
		    response.writeHead(404, {"Content-Type": "text/plain"});
    		response.write("404 Not Found\n");
    		response.close();
    		return;
    	}
    	fs.readFile(filename, "binary", function(err, file) {
    		if(err) {
    			response.writeHead(500, {"Content-Type": "text/plain"});
    			response.write("Error: "+err + "\n");
    			response.close();
    			return;
    		}
    		response.writeHead(200);
    		response.write(file, "binary");
    		response.end();
    	});
    });
}).listen(8080);
sys.puts("Server running at http://localhost:8080/");
