var mysql = require('mysql');
var connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'kutty',
});
connection.database = 'ilaiya';
connection.connect();

connection.query('SELECT *from persons', function(err, rows, fields) {
if (err) throw err;

console.log('Query result: ', rows);
});

connection.end();