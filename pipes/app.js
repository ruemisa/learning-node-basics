// PIPES

const http = require('http');
const fs = require('fs');

const server = http.createServer( ( req, res ) => {

    console.log(`Request was made: ${ req.url }`)

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    const myReadStream = fs.createReadStream( `${ __dirname }/readMe.txt`, 'utf8' );

    myReadStream.pipe( res );
});

// LOCAL HOST EXAMPLE
server.listen(3000, '127.0.0.1');
// Good idea to log a little message to know that we are listening to it.
console.log('Now listening to LOCAL HOST 3K YO!');
