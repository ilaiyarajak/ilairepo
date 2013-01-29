var mysql = require('mysql');
var connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'kutty',
});
connection.connect();
connection.query('use ilaiya');
connection.query('SELECT *from persons', function(err, rows, fields) {
if (err) throw err;

console.log('Query result from row: ', rows[1]);
console.log('query result cell value: ',rows[1][1]);
var len=rows.length;
console.log('length: ',len);
});

connection.end();