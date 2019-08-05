// Reading and Writing Files

const fs = require('fs');

// Reading Files

// This method allows our app to read files

// [ NOTE ]: This is BLOCKING CODE (indicated with Sync for Synchronous). This will prevent the other functions or methods below it to run until this is complete.

const readMe = fs.readFileSync('readme.txt', 'utf8');

// Writing Files

// [ NOTE ]: All methods from the fs module that have Sync is BLOCKING CODE or SYNCHRONOUS CODE

// fs.writeFileSync('writeMe.txt', readMe );

// ASYNC VERSIONS

fs.readFile('readMe.txt', 'utf8', (err, data) => {
    console.log( data );

    fs.writeFile('writeMe.txt', data, ( err, data ) => {
        console.log(`completed writing new file`);
    });
});

console.log('I AM NOT BLOCKED');
