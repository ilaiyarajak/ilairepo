var sys = require("sys"),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");

var querystring = require("querystring"),
    fs = require("fs");
var mysql = require('mysql');
var connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'kutty',
});


connection.connect();

function start(pathname,response, postData) {
  console.log("Request handler 'start' was called.");
  connection.query('use ilaiya');
  connection.query('SELECT *from emp', function(err, rows, fields) {
  if (err) throw err;

  var bfrtable = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body bgcolor="#9966FF">';
    //'<form action="/upload" method="post">';

  var table = '<table align="center" id="emptable" border="1" name="etable">';
   //'<thead<th colspan=6 align="center">'+
    //'<h1>EMPLOYEE</h1></th></thead><thead>'+
  var caption='<caption> EMPLOYEE TABLE</caption>';
   var tablehead= '<thead><th>ID</th><th>NAME</th><th>DESIGN</th><th>ADDRESS1</th><th>ADDRESS2</th><th>ACTIVE</th>'+
    '</thead>';
  //var val=rows[0]['name'];
 // var row = '<tr><td>123</td><td>"val"</td><td>developer</td><td>madiwala,bangalore</td><td>karnataka</td><td>yes</td></tr>';
    //'<tr><td colspan=6>$rows[1]</td></tr>'+
  var aftrtable = '</body>'+ '</html>';
//    	dbwithilaiya();
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(bfrtable);
    response.write(table);
    response.write(caption);
   response.write(tablehead);

    for(var i=0;i<rows.length;i++)
    {
	response.write('<tr><td>'+rows[i]['id']+'</td><td>'+rows[i]['name']+'</td><td>'+rows[i]['design']+'</td><td>'+rows[i]['address1']+'</td><td>'+rows[i]['address2']+'</td><td>'+rows[i]['active']+'</td></tr>');
	//console.log(rows[i]);
     }
	console.log(rows[0]['name']);

    response.write(aftrtable);
    response.end();
    });

   connection.end();

}

function upload(pathname,response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Upload data: "+  querystring.parse(postData).text);
  response.end();
}

function showfile(pathname,response, postData) {
  console.log("Request handler 'show' was called.");
  //var filename = "C:\\Users\\Kutty\\Documents\\GitHub\\ilairepo\\BU-13-static html file\\test.html";//path.join(process.cwd(), uri);
  var filename=path.join(process.cwd(), pathname);
  path.exists(filename, function(exists) {
    	if(!exists) {
		    response.writeHead(404, {"Content-Type": "text/plain"});
    		response.write("404 Not Found\n");
    		response.end();
    		return;
    	}
    	fs.readFile(filename, "binary", function(err, file) {
    		if(err) {
    			response.writeHead(500, {"Content-Type": "text/plain"});
    			response.write("Error: "+err + "\n");
    			response.end();
    			return;
    		}
    		response.writeHead(200);
    		response.write(file, "binary");
    		response.end();
    	});
  });
}
exports.start = start;
exports.upload = upload;
exports.showfile = showfile;