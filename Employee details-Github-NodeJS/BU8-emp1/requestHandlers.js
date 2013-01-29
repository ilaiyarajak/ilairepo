function start(response) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<table align="center" id="emptable" border="1" name="etable"><thead<th colspan=2 align="center">'+
    '<h1>EMPLOYEE</h1></th></thead><thead>'+
    '<th>ID</th><th>NAME</th><th>DESIGN</th><th>ADDRESS1</th><th>ADDRESS2</th><th>ACTIVE</th>'+
    '</thead>'+
    '<tr><td>123</td><td>parthi</td><td>developer</td><td>madiwala,bangalore</td><td>karnataka</td><td>yes</td></tr>'+
    ''+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;