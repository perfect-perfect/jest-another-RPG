// use the following to run a test: npm run test

// we used a regular anonymous function(){} here instead of an arrow function.
// the function returns true if two values are equal 
// module.exports = function(val1, val2) {
//     if (val1 === val2) {
//         return true;
//     }
//     else {
//         return false;
//     }
// };

function randomNumber() {
    return Math.floor(Math.random() * 9 + 1); 
}

module.exports = randomNumber;