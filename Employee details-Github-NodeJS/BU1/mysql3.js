var mysql = require( "db-mysql" );
  new mysql.Database({
    hostname: "localhost",
    user: "dave",
    password: "asdfa",
    database: "dbNameHere"
  }).on( "error", function( error ) {
    console.log( "ERROR: " + error );
  }).on( "ready", function( server ) {
   console.log( "Connected to " + server.hostname + " (" + server.version + ")" );
  }).connect( function( error ) {

   if ( error ) {
     console.log( "Error on connect: " + error );
   }

   this.query( "SELECT * FROM " + this.name( "USER" ) ).
   execute( function( error, rows, cols ) {

     if ( error ) {
       console.log( "Error on select: " + error );
       return;
     }

     response.writeHead( 200, { "Content-Type": "text/plain" } );
     response.write( JSON.stringify( rows ) );
     response.end();
   });
  });

