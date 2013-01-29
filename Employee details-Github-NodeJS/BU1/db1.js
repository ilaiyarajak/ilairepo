var http = require('http')
var port = process.env.port||3000;
http.createServer(function (req, res) {
    sql.query(conn_str, "SELECT * FROM TestTable", function (err, results) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write("Got error :-( " + err);
            res.end("");
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        for (var i = 0; i < results.length; i++) {
            res.write("ID: " + results[i].ID + " Column1: " + results[i].Column1 + " Column2: " + results[i].Column2);
        }
        res.end("; Done.");
    });
}).listen(port);