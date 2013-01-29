var mysql = require('mysql');
var connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'kutty',
});
connection.connect();
function dbwithilaiya()
{
	connection.query('use ilaiya');
	connection.query('SELECT *from persons', function(err, rows, fields) {
	if (err) throw err;

	console.log('Query result from row: ', rows[1]);
	console.log('query result cell value: ',rows[1][1]);
	var len=rows.length;
	console.log('length: ',len);
	});

	connection.end();
}
function start(response) {
  console.log("Request handler 'start' was called...");
  connection.query('use ilaiya');
  connection.query('SELECT *from emp', function(err, rows, fields) {
  if (err) throw err;

  var bfrtable = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>';
    //'<form action="/upload" method="post">';

  var table = '<table align="center" id="emptable" border="1" name="etable">';
   //'<thead<th colspan=6 align="center">'+
    //'<h1>EMPLOYEE</h1></th></thead><thead>'+
  var caption='<caption> EMPLOYEE TABLE</caption>';
   var tablehead= '<thead><th>ID</th><th>NAME</th><th>DESIGN</th><th>ADDRESS1</th><th>ADDRESS2</th><th>ACTIVE</th>'+
    '</thead>';
  var val=rows[0]['name'];
  var row = '<tr><td>123</td><td>'+val+'</td><td>developer</td><td>madiwala,bangalore</td><td>karnataka</td><td>yes</td></tr>';
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
	response.write(row);
	console.log(rows[i]);
     }
	console.log(rows[0]['name']);

    response.write(aftrtable);
    response.end();
    });

   connection.end();

}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;