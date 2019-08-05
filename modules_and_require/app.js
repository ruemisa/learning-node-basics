// MODULES & Require()

// [ NOTE ]: Custom Module
// const stuff = require('./stuff');

// const family = stuff.counter(['Ruel', 'Gaby', 'Sven']);
// console.log( family );

// const sum = stuff.adder(5, 6);
// console.log( sum );

// const result = stuff.adder(stuff.pi, 6);
// console.log( result );

// [ NOTE ]: Core Module 

const events = require('events');
const util = require('util');

// NOTE .. cannot use ARROW FUNCTION FOR THIS ONE
const Person = function( name ) {
    this.name = name;
}

console.log( Person );

util.inherits( Person, events.EventEmitter );

const ruel = new Person('Ruel');
const gaby = new Person('Gaby');
const sven = new Person('Sven');

const people = [ ruel, gaby, sven ];

console.log( people );

people.forEach( ( person ) => {
    person.on('speak', ( message ) => {
        console.log(`${ person.name }: ${ message }`);
    }); 
});

ruel.emit( 'speak', 'Hola! Como estas?');

// EVENT EMITTER -> Allows us to create custom events and react to those events when they are emitted

// const myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', ( message ) => {
//     console.log( message );
// });

// myEmitter.emit('someEvent', 'The event was emitted');