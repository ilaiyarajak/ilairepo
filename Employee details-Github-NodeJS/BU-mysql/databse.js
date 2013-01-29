var mysql = require('mysql');

var client = mysql.createClient({'host':'localhost','port':3306,'user':'root','password':'kutty'});

client.query('SELECT * FROM "persons"', function(error, result, fields){

  if (!error){
    // Working with 'result' ...

    // Closing connection
    client.end();
  }

});