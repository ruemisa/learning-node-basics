// Serving JSON

const http = require('http');
const fs = require('fs');

const server = http.createServer( ( req, res ) => {
    console.log( `request was made from ${ req.url }` );

    res.writeHead( 200, {
        'Content-Type': 'application/json'
    });

    const myObj = {
        name: 'Ruel',
        job: 'Ninja',
        age: 31
    };

    res.end( JSON.stringify( myObj ) );
});

server.listen( 3000, '127.0.0.1' );
console.log(`NOW LISTENING FOR THE JSON OBJECT AT 3K`);