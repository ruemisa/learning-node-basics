// EXPRESS

const express = require('express');
// TO HANDLE POST REQUESTS
const bodyParser = require('body-parser');
const app = express();

// TEMPLATING ENGINES
// Need to set in order to use the templating engine

app.set('view engine', 'ejs');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/assets', express.static('assets'));

app.get('/', ( req, res ) => {
    res.render('index');
});

// QUERY STRING 

app.get('/contact-us', ( req, res ) => {

    res.render('contact', {
        qs: req.query
    });
});

app.post('/contact-us', urlencodedParser, ( req, res ) => {
    console.log( req.body );
    res.render('contact-success', {
        data: req.body
    });
});

app.get('/profile/:name', ( req, res ) => {
    // ROUTE PARAMS
    const data = {
        age: 31,
        job: 'Web Developer',
        hobbies: [ 'Coding', 'Cooking', 'Reading' ]
    }

    res.render('profile', {
        person: req.params.name,
        data: data
    });
})

app.listen( 3000 );