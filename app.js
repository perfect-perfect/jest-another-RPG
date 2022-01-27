// Section 10.1
// Test-driven development- practice in which a developer creates failing test cases, and then writes code so that the tests pass. 
// once the tests pass, the developer refactors the code to keep it DRY.
// These steps are commonly referred to as Red, Green, Refactor.
// write test first before a single line of code is written, and the write code in small increments.
// to install Jest: npm install jest --save-dev. 
// the --save-dav flag tells npm to add Jest to the devDependecies list
// the devDepencies are also Node.js modules that requires, but they're only needed for development purposes, rather than during runtime (like Inquirer).
// next we opened the package.json file and changed the value of the test property to jest.
// the test property is under an object that is called scripts.
// scripts refers npm scripts. npm scripts allow us to add short snippets that we want our project to run at different stages during the build that we would other wise run from the command line

// Create the First Task
// create a __tests__ directory and inside of it create a file names random.test.js.
// we use the *.tests.js naming convention because it is what Jest expects. Also keeps things neat since our test file has a different name than our constructor file.


// NOTES FROM RANDOM.TEST.JS (the modules had us delete the file the the notes could serve useful)
// // this names the function we exported from random.js to checkIfEqual. So we can just call that and it will call the function on that file.
// const checkIfEqual = require('../lib/random.js');

// // this test is expecting the function checkIfEqual to be truthy when we give 10 and 10 as arguments.
// test('checks if 10 is equal to 10', () => {
//     // this will fail right now because checkIfEqual is not a function we've created. Also random.js doesn't exist yet
//     expect(checkIfEqual(10, 10)).toBe(true);
// });

// // this names the function we are exporting from random.js randomNumber
// const randomNumber = require('../lib/random.js');

// test('get random number between 1 and 10', () => {
//     // toBeGreaterThanOrEqual() and toBeLessThanOrEqual() functions are provided by Jest, and they run when Jest loads the test.
//     expect(randomNumber()).toBeGreaterThanOrEqual(1);
//     expect(randomNumber()).toBeLessThanOrEqual(10);
// });



// // Section 10.1.5 : Write a Test That Fails Potion creation

// we then went to Potion.test.js and added the require on top
// const Potion = require('./lib/Potion'); 
// Then we created the test. Go see Potion.test.js for that.

// Section 10.1.6: Write a Function That Passes Potion Creation
// What are constructors?
// Constructor functions act like blueprints for objects. Because they don't have a return statment, they return undefined by default.
// Constructor functions, unlike a regular function, they are meant to be used in conjuction with the 'new' keyword

// // Constructor EXAMPLE // // 

// notice the capital 'C' in the Car(). This is the naming convention for constructor functions
// here' we are saying: "This function Car() will be used to create new instances of Car objects." 
// "When 'make' and 'model' are passed into Car() we will set those properties up on the new Car object"
// without setting those properties we would be creating empty objects

// function Car(make, model) {
//    // the keyword 'this' refers to the car object that will be created with the constructor functon
//    //  we assign .make to the parameter make
//     this.make = make;
//    // we assign .model to the parameter model
//     this.model = model;
// }

// inside the function we assign this.make and this.model to the make and model parameters.
// the keyword 'this' refers to the car object that will be created with the constructor functon

// **WARNING** //
// Do not use arrow functions as constructor functions
// arrow functions change the meaning of the keyword 'this', which is a core piece of constructor functions.

// in order to actually create the new car object, we need to invoke the Car() constructor by calling it with the 'new' keyword. 
// Then just like you would with a regular function, pass in values for the make and model as arguments

// new Car('Honda', 'Civic');

// we can see what this new object looks like by assiging it to a variable and logging it to the console.
// const car = new Car('Honda', 'Civic');
// console.log(car);

// this console log will output Car { make: 'Honda', model: 'Civic' }

// we placed the cosntructor function in Potion.js that assigsn 



// Section 10.1.7: Refactor the Code to Handle Random Potion Creation

// Our Potion object is supposed to be one of three different types: health, agility, or strength
// We'll want our enemies to be able to drop a random potion. Since it is strickly related to the potion we can go ahead and include it in the Potion() constuctor
// if the Potion() constructor is called without any arguments, we will have it create a new potion with a random type and value
// we go to Potion.test.js to create the test for "create a random object"
// Then we refactor the Potion() constructor




