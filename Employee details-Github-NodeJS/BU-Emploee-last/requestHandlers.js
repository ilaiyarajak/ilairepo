//<button id="submitButton" type="submit">INSERT</button>
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

function showtable(pathname,response, postData) {
  console.log("Request handler 'showtable' was called.");
  connection.query('use ilaiya');
  connection.query('SELECT *from emp', function(err, rows, fields) {
  if (err) throw err;

  var bfrtable = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body  bgcolor="#999f8e">'
    '<form action="/upload" method="post">';

  var table = '<table align="center" id="emptable" border="1" name="etable">';
   //'<thead<th colspan=6 align="center">'+
    //'<h1>EMPLOYEE</h1></th></thead><thead>'+
  var caption='<caption> <h1>EMPLOYEE TABLE</h1></caption>';
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

   //connection.end();
}

function deleteshow(pathname,response, postData) {
  console.log("Request handler 'deleteshow' was called.");
  connection.query('use ilaiya');
  connection.query('SELECT *from emp', function(err, rows, fields) {
  if (err) throw err;
 
  var htmlhead= '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    //'<script src="requestHandlers.js"></script>'+
	'</head>'+
    '<body  bgcolor="#999f8e">'+
    '<form action="/deleterow" method="post">';
   var table = '<table align="center" id="emptable" border="1" name="etable">';
   var caption='<caption><h1> EMPLOYEE TABLE-DELETE</h1></caption>';
   var tablehead= '<thead><th>ID</th><th>NAME</th><th>DESIGN</th><th>ADDRESS1</th><th>ADDRESS2</th><th>ACTIVE</th><th>DELETE</th>'+  '</thead>';
  
    //'<textarea name="text" rows="20" cols="60"></textarea>'+
    //'<input type="submit" value="Submit text" />'+
   var htmlfoot= '</table>'+'</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(htmlhead);
    response.write(table);
    response.write(caption);
    response.write(tablehead);
    for(var i=0;i<rows.length;i++)
    {
	response.write('<tr><td>'+rows[i]['id']+'</td><td>'+rows[i]['name']+'</td><td>'+rows[i]['design']+'</td><td>'+rows[i]['address1']+'</td><td>'+rows[i]

	['address2']+'</td><td>'+rows[i]['active']+'</td>');
	response.write('<td><input name="delete" type="submit" value='+rows[i]['id']+' /></td></tr>');
		//response.write('<td><button name='+rows[i]['id']+' value="Delete" onclick="deleterow('+pathname+','+response+','+i+')"/></td></tr>');
	//console.log(rows[i]);
     }

    //response.write('<input type="submit" value="Submit text" />');
    response.write(htmlfoot);
    response.end();
   });

}

//function deleterow(pathname,response, postData) {
function deleterow(pathname,response, postData) {
  console.log("Request handler 'deleterow' was called.");
  connection.query('use ilaiya');
  var button=querystring.parse(postData);
  //response.write(button['i']+'');
  //console.log(button['0']);
  var delquery='delete from emp where id=?';
  connection.query(delquery,[button['delete']]);
  //var table = document.getElementById("emptable");  response.write('I am gonna delete a row');
  //var rowCount = table.rows.length;
  //response.write(rowCount);
  //console.log(req.session.chkbox);
  /*connection.query('SELECT *from emp', function(err, rows, fields) {
  if (err) throw err;
	for(var i=0;i<=rows.length;i++)
	{
		//console.log(button['i']);
		//if(button['i']!='undefined')
			//console.log(button['i']);
	}
  });
  */
  response.write('<html><body>Record deleted successfully. Go <a href="/deleteshow" target="middle">back</a></body></html>');//input["empname"]);
  response.end();
}


function updateshow(pathname,response, postData) {
  console.log("Request handler 'update show' was called.");
  connection.query('use ilaiya');
  connection.query('SELECT *from emp', function(err, rows, fields) {
  if (err) throw err;
 
  var htmlhead= '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body  bgcolor="#999f8e">'+
    '<form action="/update.html" method="post">';
   var table = '<table align="center" id="emptable" border="1" name="etable">';
   var caption='<caption><h1> EMPLOYEE TABLE-UPDATE</h1></caption>';
   var tablehead= '<thead><th>ID</th><th>NAME</th><th>DESIGN</th><th>ADDRESS1</th><th>ADDRESS2</th><th>ACTIVE</th><th>EDIT</th>'+  '</thead>';
  
    //'<textarea name="text" rows="20" cols="60"></textarea>'+
    //'<input type="submit" value="Submit text" />'+
   var htmlfoot= '</table>'+'</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(htmlhead);
    response.write(table);
    response.write(caption);
    response.write(tablehead);
    for(var i=0;i<rows.length;i++)
    {
	response.write('<tr><td>'+rows[i]['id']+'</td><td>'+rows[i]['name']+'</td><td>'+rows[i]['design']+'</td><td>'+rows[i]['address1']+'</td><td>'+rows[i]

	['address2']+'</td><td>'+rows[i]['active']+'</td>');
	//response.write('<td><input name="edit" type="submit" value='+rows[i]['id']+' /></td></tr>');
	response.write('<td><a href="update.html?sno='+rows[i]['sno']+'&id='+rows[i]['id']+'&name='+rows[i]['name']+'&design='+rows[i]['design']+'&addr1='+rows[i]['address1']+'&addr2='+rows[i]['address2']+'&act='+rows[i]['active']+'">EDIT</a></td></tr>');
	//console.log(rows[i]);
     }

    //response.write('<input type="submit" value="Submit text" />');
    response.write(htmlfoot);
    response.end();
   });

}

function updaterow(pathname,response, postData) {
  console.log("Request handler 'update row' was called.");
  connection.query('use ilaiya');
  var input=querystring.parse(postData);
  console.log(postData);
  console.log([input["name"]]);
  //console.log([input["sno"]]);
  //connection.query('SELECT *from emp', function(err, rows, fields) {
//	  if (err) throw err;
//	console.log(rows.length);
	  //var instest='insert into test(name,name2) values(?,?)';
	  //connection.query(instest,[input["name"],input["design"]]);
	  var insquery='update emp set id=?,name=?,design=?,address1=?,address2=?,active=? where sno=?';
	  connection.query(insquery,[input["id"],input["name"],input["design"],input["address1"],input["address2"],input["active"],input["sno"]], function(err, rows, fields) {
	  if (err) throw err;
	  });
	  //function(err, rows, fields) {    if (err) throw err;});
 //  });

  //connection.query(insquery,[input["empid"],input["empname"],input["empdesign"],input   //["empaddr1"],input["empaddr2"],input["empact"]], function(err, rows, fields) {
    //if (err) throw err;});
  //connection.query('insert into test(name) values(?)',{"rani"});
  //response.writeHead(200, {"Content-Type": "text/plain"});
  response.write('<html><body>Record update successfully. Go <a href="/updateshow" target="middle">back</a></body></html>');//input["empname"]);
 
  //response.write("Insert data: "+  postData.empname);
  //response.write("Upload data: "+  querystring.parse(postData).text);
  response.end();
  
  
}


/*function upload(pathname,response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Upload data: "+  querystring.parse(postData).text);
  response.end();
}
*/

function insert(pathname,response, postData) {
  console.log("Request handler 'insert' was called.");
  connection.query('use ilaiya');
  var input=querystring.parse(postData);
  var check='1';
  connection.query('SELECT *from emp', function(err, rows, fields) {
	  if (err) throw err;
	console.log(rows.length);
	  //var instest='insert into test(name,name2) values(?,?)';
	  //connection.query(instest,[input["name"],input["design"]]);
	  
	  /*for(var i=0;i<rows.length;i++)
	  {
			connection.query('SELECT *from emp', function(err, chkrows, fields) {
				if (err) throw err;
					//console.log(chkrows[i]["id"]);
					console.log(input["id"]);
					if(chkrows[i]["id"]==input["id"])
						check='0';
			});
	
	  }
	  if(check=='1')
	  {
	  */
		var insquery='insert into emp(sno,id,name,design,address1,address2,active) values(?,?,?,?,?,?,?)';
		connection.query(insquery,[rows.length+1,input["id"],input["name"],input["design"],input["address1"],input["address2"],input["active"]]);
		//function(err, rows, fields) {    if (err) throw err;});
		response.write('<html><body>Record inserted successfully. Go <a href="/add.html" target="middle">back</a></body></html>');
	  /*}
	  else
		response.write('<html><body>Failed to insert"Duplicate ID". Go <a href="/add.html" target="middle">back</a></body></html>');
		*/
	  response.end();
   });

  //response.write("Insert data: "+  postData.empname);
  //response.write("Upload data: "+  querystring.parse(postData).text);
  
}


function showfile(pathname,response, postData) {
  console.log("Request handler 'showfile' was called.");
  //var filename = "C:\\Users\\Kutty\\Documents\\GitHub\\ilairepo\\BU-13-static html file\\test.html";//path.join(process.cwd(), uri);
  var filename=path.join(process.cwd(), pathname);
  path.exists(filename, function(exists) {
    	if(!exists) {
		    response.writeHead(404, {"Content-Type": "text/plain"});
    		response.write("404 Not Found in RH\n");
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

//exports.start = start;
exports.showfile = showfile;
exports.showtable=showtable;
exports.insert=insert;
exports.deleteshow=deleteshow;
exports.deleterow=deleterow;
exports.updaterow=updaterow;
exports.updateshow = updateshow;