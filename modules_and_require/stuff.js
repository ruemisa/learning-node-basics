
const counter = ( arr ) => {
    return `There are ${ arr.length } elements in this array.`;
};

const adder = ( a, b ) => {
    return `Sum of these two numbers is ${a + b}`;
};

const pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;


module.exports = {
    counter,
    adder,
    pi
};