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


function showfile(pathname,response, postData) {
  console.log("Request handler 'showfile' was called...");
  console.log("Pathname= "+pathname);
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

function Loginvalidation(pathname,response,postData)
{
	console.log("Request handler 'loginvalidation' was called.");
	connection.query('use ilaiya');
	var input=querystring.parse(postData);
	//var length;

	connection.query('SELECT * from users where username=? and password=?',[input["uname"],input["pword"]],function(err, rows, fields) {
	//response.write(''+rows.length);
	var head = '<html>'+
			'<head>'+
			'<meta http-equiv="Content-Type" content="text/html; '+
			'charset=UTF-8" />'+
			'</head>'+
			'<body bgcolor="#9966FF">';
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(''+head);
	if(rows.length==1)
	{
		//response.write('Login was successful');
		
		
		var body = '<h2>LOGIN WAS SUCCESSFUL</h2>'+
			'<a href="sos-home1.html">Clic Here to enter</a>';
		
		//response.writeHead(200, {"Content-Type": "text/html"});
		
		
		
	}
	else
	{
		var body = '<h2>USERNAME or PASSWORD IS INCORRECT</h2>'+
		'<a href="/login.html">Click Here to Go back</a>';
		
		
	}
	response.write(body);
	
	var foot = '</body>'+ '</html>';
	response.write(''+foot);
	response.end();
	});
	/*if((input['username']==rows[0]['username']) && (input['password']==rows[0]['password']))
	{
		response.write('login was successful');
	}
	else
		response.write('Username/Password Mismatch');
	}*/
	
	
	/*
	response.write('check'+rows[0]['username']);
	
		var filename=path.join(process.cwd(),"/index1.html");
		
		path.exists(filename, function(exists) {
			response.write(' path.exists in login validtn ');
    	 
		});
		response.end();
	*/
}

exports.showfile = showfile;

exports.Loginvalidation=Loginvalidation;