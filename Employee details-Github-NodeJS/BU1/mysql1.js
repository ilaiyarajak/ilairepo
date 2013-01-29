var mysql = require("db-mysql");
new mysql.Database({
    "hostname": "localhost",
    "user": "kutty",
    "password": "kutty",
    "database": "ilaiya"
}).connect(function(error) {
    if (error) {
        return console.log("CONNECTION error: " + error);
    }
    this.query()
        .select(["id", "user", "email"])
        .from("users")
        .where("role IN ?", [ ["administrator", "user"] ])
        .and("created > ?", [ new Date(2011, 1, 1) ])
        .execute(function(error, rows, columns){
            if (error) {
                console.log('ERROR: ' + error);
                return;
            }
            // Do something with rows & columns
        });
});