// TO CREATE SERVER

const http = require('http');

const server = http.createServer( ( req, res ) => {

    console.log(`Request was made: ${ req.url }`)

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Hey there ninjas! Beef baby!');
});

// LOCAL HOST EXAMPLE
server.listen(3000, '127.0.0.1');
// Good idea to log a little message to know that we are listening to it.
console.log('Now listening to LOCAL HOST 3K YO!');
