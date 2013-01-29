var mysql = require('mysql');

var client = mysql.createClient({'host':'localhost','port':3306,'user':'root','password':'kutty'});

client.host = 'localhost';
client.port = '3306';
client.user = 'root';
client.password = 'kutty';
client.database = 'ilaiya';

client.query('SELECT * FROM "persons"', function(error, result, fields){

  if (!error){
    // Working with 'result' ...

    // Closing connection
    client.end();
  }

});