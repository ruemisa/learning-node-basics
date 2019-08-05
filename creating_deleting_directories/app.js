const fs = require('fs');

// SYNCHRONOUS VERSION

// Create

// fs.mkdirSync('stuff');
// Remove

// fs.rmdirSync('stuff');

// ASYNC VERSION

// Creating Directories

// fs.mkdir('stuff', ( error ) => {

//     if ( error ) {
//         console.log(`Error in creating the directory: ${ error }`);
//     }

//     console.log('Directory Created');
//     const textData = 'Stuff is the newest directory';

//     fs.writeFile('./stuff/DirectoryNotes.txt', textData, ( error ) => {
//         if ( error ) {
//             console.log(`We encountered the error: ${ error }`);
//         } else {
//             fs.readFile(`./stuff/DirectoryNotes.txt`, 'utf8', ( error, data ) => {
//                 if ( error ) {
//                     console.log(`Cannot Read File due to: ${ error }`);
//                 }

//                 console.log(data);
//             })
//         }

//     });
// });

// Removing Directories

fs.unlink(`./stuff/DirectoryNotes.txt`, ( error ) => {
    if ( error ) {
        console.log(`OH NO, there is an error!`);
    }

    fs.rmdir('stuff', ( error ) => {
        if ( error ) {
            console.log(`Damn, another error?`);
        }
        console.log(`You have successfully removed the directory`);
    });
});