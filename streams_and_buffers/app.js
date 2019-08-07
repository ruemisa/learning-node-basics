const http = require('http');

// READABLE STREAMS

const fs = require('fs');
// We need to speciify which file to read through the stream.
// [ NOTE ]: We need to use the __dirname property from the global object to make it a bit more dynamic
const myReadStream = fs.createReadStream( `${ __dirname }/readMe.txt`, 'utf8' );
// [ NOTE ]: Method createReadStream() inherits from the event emitter. It has an event called data which allows us to listen for when we receive any kind of data from the stream

// WRITABLE STREAMS

const myWriteStream = fs.createWriteStream( `${ __dirname }/writeMe.txt` );

myReadStream.on('data', ( chunk ) => {
    console.log(`New chunk received: `);
    // console.log( chunk );

    myWriteStream.write( chunk );
});


