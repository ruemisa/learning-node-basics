// BASIC ROUTING

const http = require('http');
const fs = require('fs');

const server = http.createServer( ( req, res ) => {
    console.log(` Request was made from: ${ req.url }`);
    if ( req.url === '/home' || req.url === '/' ) {
        res.writeHead( 200, {
            'Content-Type': 'text/html'
        });
    
        fs.createReadStream( `${ __dirname }/index.html` ).pipe( res );
    } else if ( req.url === '/contact' ) {
        res.writeHead( 200, {
            'Content-Type': 'text/html'
        });
    
        fs.createReadStream( `${ __dirname }/contact.html` ).pipe( res );
    } else if ( req.url === '/api/ramen' ) {
        const ramen = [
            { name: 'Shoyu', broth: 'chicken' },
            { name: 'Miso', broth: 'chicken '},
            { name: 'Veggie', broth: 'Mushroom' }
        ];

        res.writeHead( 200, {
            'Content-Type': 'application/json'
        });
    
        res.end( JSON.stringify( ramen ));
    } else {
        res.writeHead( 404, {
            'Content-Type': 'text/html'
        });

        fs.createReadStream( `${ __dirname }/404.html` ).pipe( res );        
    }

    
});

server.listen( 3000, '127.0.0.1');
console.log('NOW LISTENING TO PORT 3000... via Beef Baby');
