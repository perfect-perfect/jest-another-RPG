// 10.1.2 Preview
//------------------
// We need to create an RPG with characters, enemies, and a game object
//  - the user will have the choice to attack or use a potion to increace stats
//      - the stats: strength, agility, and health
//  - the Potion object will be the simplest of all of the objects


// 10.1.3 Set Up Project
//----------------------
// Create the Repo
//  - Create a folder, then create the corresponding GitHub repository for our project
//  - The link the the local folder and the GitHub repo, as showm
//      - git init
//      - git remote add origin git@github.com:<username/yourprojectname>.git
// GitHub Issues
// - Create a Potion object
//      - create tests for the Potion object
//      - the Potion object will be used to give the player stat boosts
//      - if no stat is provided, the stat should be randomly selected
// - Create a Player object that will be used to store methods and properties related to the user's character
//      - a Player object has the following properties
//          - name
//          - health
//          - strength
//          - agility
//      - A Player object has the following methods:
//          - getStats()
//          - getInventory()
//          - getHealth()
//          - getAttackValue()
//          - isAlive()
//          - addPotion()
//          - usePotion()
//          - reduceHealth()
//      - Write Tests for the Player() constructor and methods
// - Create an Enemy object to store methods and properties related to the enemy that out player has to battle.
//      -Enemy properties
//          - name
//          - weapon
//          - health
//          - stength
//          - agility
//          - potion
//      - Enemy methods:
//          - getDescription()
//          - getHealth()
//          - getAttackValue()
//          - isAlive()
//          - reduceHealth()
//      - Write Tests for the enemy constructor and methods
// - Create a Game object, which will be responsible for the game logic. It will be used to keep track of whose turn it is, prompt the user for input, and check to see if the game has been won.
//      - All game logic is encompassed by a Game() constructor function
//      - Game object properties:
//          - roundNumber
//          - isPlayerTurn
//          - enemies
//          - currentEnemy
//          - player
//      - Game object methods:
//          - initilizeGame()
//          - battle()
//          - checkEndOfBattle()
//          - startNewBattle()


// SECTION 10.1.4. Set Up Testing Framework
//-----------------------------------------------
// Test-driven development
//  - practice in which a developer creates failing test cases, and then writes code so that the tests pass. 
//  - once the tests pass, the developer refactors the code to keep it DRY.
//  - These steps are commonly referred to as Red, Green, Refactor.
//  - write test first before a single line of code is written, and the write code in small increments.
// Jest Framework
//  ***** to install Jest: npm install jest --save-dev. *****
//  -the --save-dav flag tells npm to add Jest to the devDependecies list
//      -the devDepencies are also Node.js modules that our project requires, but they're only needed for development purposes, rather than during runtime (like Inquirer).
//      - jest is only necessary during the development stage
//  *** IMPORTANT***** 
//  - next we opened the package.json file and changed the value of the test property to jest. 
//        - "scripts": {
//              "test": "jest"
//           },
//      -the test property is under an object that is called scripts. Curly braces means object
//      - scripts refers npm scripts. 
//      - npm scripts allow us to add short snippets that we want our project to run at different stages during the build that we would other wise run from the command line

// const Potion = require("./lib/Potion.js")

// Create the First Task
// create a __tests__ directory and inside of it create a file names random.test.js.
// we use the *.tests.js naming convention because it is what Jest expects. Also keeps things neat since our test file has a different name than our constructor file.
// So far we've written a test that's expecting the function checkIfEqual to be truthy given 10 and 10 as arguments
// Did you notice that the test reads almost like plain english. This is intentional. 
//      -When the test outputs its status it should be very clear to anyone:
//          - what the test is checking 
//          - Whether it passed
// we run the test with npm run test
// The test fails
//      - this is what we want. Remember the first phase is red.
//      - we want our tests to fail first, and then we'll write the code necessary to make them pass
//      - we need to update the random.js function so that it returns true if two values are equal.
// the test passes
//      - after updating the function in random.js to return true if two values are equal
// the refactor step
//  - this step leaves the most room foor interpretation
//  - what we do next is not refatoring at all we just completely change what we are testing for
// recall that our potion is going to start off with a random value. Let's update the test to validate that our function generates a random number

//      const randomNumber = require('../lib/random.js');

//      test('get random number between 1 and 10', () => {
//          expect(randomNumber()).toBeGreaterThanOrEqual(1);
//          expect(randomNumber()).toBeLessThanOrEqual(10);
//      })

// NOTES FROM RANDOM.TEST.JS (the modules had us delete the file the the notes could serve useful)
// - this names the function we exported from random.js to checkIfEqual. So we can just call that and it will call the function on that file.
//      - const checkIfEqual = require('../lib/random.js');
//      - whenever we test we need to bring in the functions we are testing. so module.exports and require() are essential to testing.

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



// SECTION 10.1.5 : Write a Test That Fails Potion creation
//----------------------------------------------------------
// we then went to Potion.test.js and added the require on top
// const Potion = require('./lib/Potion'); 
//  - again, we need to pull the functions we will be testing
// Then we created the test. Go see Potion.test.js for that.

//        test('creates a health potion object', () => {
//            const potion = new Potion('health');
//
//            expect(potion.name).toBe('health');
//            expect(potion.value).toEqual(expect.any(Number));
//        })

// the expect.any() method takes a constructor as an arguement
//      - here we're expecting that the value property is created with a Number() constructor
// First note the use of the 'new' keyword. We'll use this to create new Potion object.


// SECTION 10.1.6: Write a Function That Passes Potion Creation
//--------------------------------------------------------------
// What are constructors?
//  - Constructor functions act like blueprints for objects.
//  - Because they don't have a return statment, they return undefined by default.
//  - Constructor functions, unlike a regular function, they are meant to be used in conjuction with the 'new' keyword
//      - the 'new' keyword is very important

// // Constructor EXAMPLE // // 

// notice the capital 'C' in the Car(). This is the naming convention for constructor functions
// here' we are saying: 
//      -"This function Car() will be used to create new instances of Car objects." 
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
// console.log(Car);

// this console log will output Car { make: 'Honda', model: 'Civic' }

// we placed the cosntructor function in Potion.js that assigsn 



// SECTION 10.1.7: Refactor the Code to Handle Random Potion Creation
//-------------------------------------------------------------------
// Our Potion object is supposed to be one of three different types: health, agility, or strength
// We'll want our enemies to be able to drop a random potion. 
//      -Since it is strickly related to the potion we can go ahead and include it in the Potion() constuctor
// if the Potion() constructor is called without any arguments, we will have it create a new potion with a random type and value
// we go to Potion.test.js to create the test for "create a random object"
// Then we refactor the Potion() constructor

// test('creates a random potion object', () => {
//     const potion = new Potion();
//
//     expect(potion.name).toEqual(expect.any(String));
//     expect(potion.name.length).toBeGreaterThan(0);
//     expect(potion.value).toEqual(expect.any(Number));
// });
//
// function Potion(name) {
//     this.types = ['strength', 'agility', 'health'];
//     this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
//
//     if (this.name === 'health') {
//         this.value = Math.floor(Math.random() * 10 + 30);
//     }
//     else {
//         this.value = Math.floor(Math.random() * 5 + 7);
//     }
// }
//
// module.exports = Potion;

// Notice: this.name = || this.types[Math.floor(Math.random() * this.type.length)]
//  - this is another use case of the || operator. 
//      - || is the Logical Or operator
//      - this expression will be evaluated so that if name is truthy- that is to say, it can be coerced to true- then this.name = name. 
//      - if name is not truthy, then this.name = this.types[Math.floor(Math.random() * this.types.length)] or a random type of potion
//  - TRUTHY
//      - a truth value is a value that is considered true when encountered in a Boolean context.
//      - all values are truthy unless they are defined as falsy (false, 0, -0, on, "", null, undefined, and NaN)
//      - JavaScript uses type coercion in Boolean contexts
//      - examples of truthy:
//            if (true)
//            if ({})
//            if ([])
//            if (42)
//            if ("0")
//            if ("false")
//            if (new Date())
//            if (-42)
//            if (12n)
//            if (3.14)
//            if (-3.14)
//            if (Infinity)
//            if (-Infinity)          



// Section 10.1.8 Reflection
// RECAP
// - Implemented Jest to Verify that your Object were created properly.
// - Learned TDD: Red, Green, Refactor
// - Wrote a constructor function to generate new objects


// ********************* //

// SECTION 10.2

// SECTION 10.2.1: Introduction
//------------------------------
// Create a Player object (this will be split between two lessons)

// Player object properties
//  - name
//  - health
//  - strength
//  - agility

// Player object methods:
//  - getStats()
//  - getInventory()
//  - getHealth()
//  - getAttackValue()
//  - isAlive()
//  - addPotion()
//  - usePotion()
//  - reduceHealth()

// Write appropriate tests for the Player() constructor and methods

// IN THIS LESSON WE WILL 
// - Write constructor methods using JavaScript prototype
// - Write tests that verify proper method usage
// - Mock a new Potion object upon creation of a Player object

// Mocking data is an important part of testing. 
//  - In development, cosntructors sometimes have other dependecies that are not related to the fuctionality we're testing.
//  - mocking these dependencies ensures that each test focuses on a singular purpose


// Section 10.2.2: Preview
//-------------------------
// we'll focus on creating the initial Player() constructor to start the player with two potions.
// we'll also write methods for the Player object to retrieve information about the player


// Section 10.2.3: Write a Failing Test for Player Object Creation
//-----------------------------------------------------------------
// We created the test file Player.test.js
// - remember that tests go in the __tests__ directory
// - also make sure to const Player = require('../lib/Player');
//      - remember we need to pull in the function we are testing
// We want players to have a name and three number properties: health, strength, and agility.
//  - lets write a test that checks for these


// test('creates a player object', () => {
//     // first you create the object
//     const player = new Player('Dave');

//     expect(player.name).toBe('Dave');
//     expect(player.health).toEqual(expect.any(Number));
//     expect(player.strength).toEqual(expect.any(Number));
//     expect(player.agility).toEqual(expect.any(Number));
// });


// then we wrote the test 
// when you run npm run test, it will run all files within __tests__ directory and any other .test files throughout the project.
// if you want to run a single one you can modify the npm run as follows.
// npm run test Player
// npm run test Potion


// Section 10.2.4: Write a Player Constructor to Pass the Test
//-------------------------------------------------------------
// We've set up the test. now let's actually write the constructor function that creates those objects.
// in lib/Player.js add the following code:

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
}

module.exports = Player;

// the name parameter sets a defaut empty string if no 'name' is provided.
//  - handy ES6 trick
// run test
//  - npm run test Player
// We pass the test
// To recap, new Player('Dave') created a new player object that had four properties. The object had a name property equal to 'Dave' and three additional Number properties.


// Section 10.2.5: Add Mock for Potion and Refactor Player Constructor
//---------------------------------------------------------------------
// we want player to start with two potions
// on player creation, we want the inventory to start with two potions
//  - this could be as straight forward as calling new Potion() from within the Player() constructor
//  - this makes one constructor dependent on another one.
// EXAMPLE of case of API and non-dependent functions: 
//  -if you needed to call a API to help with the creation of your object, you definitely would not want the API logic cluttering up your constructor. it would be better to call the API first, then pass the API data in as an argument.
// We'll opt to create a new Potion object within the Player() constructor.
//  - this gives us a great opportunity to explore how to properly test a function that is dependent on another function (hint: mocks)
// proper potion creation should be tested seperately from the player. So let's mock up the player() constructor
//  - that way if something breaks with the Potion() constructor, it only affects one test suite (the potion) instead of two (potion and player)
// Mocks
//  - mocks allow us to fake assumed data, which allows the test at hand to focus only on the logic it cares about.
//  - create __mocks__ folder
//  - create Potion.js in the __mocks__ folder
//      - Jest will always look for matching mock file in the same location as the module being mocked
//      - in this case lib/__mocks__.Potion.js matches lib/Potion.js
//  - add the following code to __mocks__/Potion.js

module.exports = function() {
    this.name = 'health';
    this.value = 20
}

//  - this is a very simplified version of the Potion() constructor we wrote earlier
//  - the mock only needs to return valid values that the Player object can use later
//  - place at the top of Player.test.js: 

const Potion = require('../lib/Potion');
//      -the require() line imports the Potion() constructor into the test, establishing Potion as a usable variable (otherwise new Potion() would throw an error) 

jest.mock('../lib/Potion');
//      - then jest.mock() mocks/replaces the constructor's implimentation with our faked data in __mocks__/Potion.js.

//  - now if new Potion() is ever called within the test file itself or any of the subsequent modules attached to the test, the mocked data will be returned
//  - the name will always be 'health' and the value will always be 20, because our mocked pottion replaced the real Potion() constructor.
//  - this means we can rest easy knowing that our player tests are no longer tied to Potion() constructor's existence
// Now lets refactor the player test to check for the creatuon of an inventory
//  - in Player.test.js add the following code, so we can run the test:

expect(Player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));

//  - Note that the player's inventory should be an array containing an object. [expect.any(Object)]
//  - the test fails because the mock potion only creates one potion
// Getting code to pass
//  - add to the top of the constructor file Player.js place: 

const Potion = require('../lib/Potion');


//  - then add the following code to the Player() constructor functions:

this.inventory = [new Potion('health'), new Potion()];

//  - this adds two mocked potions to the inventory
//  - Keep in mind that because potions were mocked in Player.test.js calling new Potion here will actually use the mocked version during the test
//  - that means that every test will always generate two health potions with a value of 20, but that's okay for testing purposes.
// the mock will no longer apply once you start using these objects in the actual game.
// npm run test passes
// Deep Dive
//  - Your note limited to mocking just your own constructors and modules. You can also mock data you expect to recieve from other modules like the fs module.
//  - that would be a classic case of not wanting a dependancy like fs to interfere with your singular test
//      example:

const fs = require('fs');
const { threadId } = require('worker_threads');
jest.mock('fs');
fs.readFileSync.mockReturnValue('fake content');

//  - in this case, the fs method readFileSync() has been mocked to always return the string 'fake content', thereby elminating the need to read from the actual file during the test.

// Section 10.2.6: Write Failing Tests for getStats and getInventory
//-------------------------------------------------------------------
// In the game, we want to be able to periodically retrieve information about the player
//  - for instance, it would be helpful to print the player's stats after they use a potion or receive damage
//  - we'll eventually create two methods to help with this
//      - getStats()
//      - getInventory()
//  - this will be called on the Player object, as shown in the followinf example code:

const player = new Player('Jane');

player.getStatus();
player.getInventory();

// - however, we don't want these methods to do any console-logging themselves
// - the Player() constructor shouldn't have any knowledge of the console.
//      -it will simply return data that the game can use to display to the user
//      - this will make the Player() constructor more versatile
// - getStats() method will return an object containing a subset of player's properties.
// - getInventory() method will return an array of Potion objects or return false if the inventory is empty
// TDD
// test first
// -write both tests at once, which is okay to do in moderation
// in Player.test.js add the following

test("gets players stats as an objest", () => {
    const player = new Player('Dave');

    expect(player.getStatus()).toHaveProperty('potions');
    expect(player.getStatus()).toHaveProperty('health');
    expect(player.getStatus()).toHaveProperty('strength');
    expect(player.getStatus()).toHaveProperty('agility');
});

// - Here, we're checking that player.getStatus() with four specific properties
// Now add  a secont test for getInventory:

test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');

    // on creation the inventory should already have something in it
    // so a call to player.getInventory() should return an array
    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

// - on creation the inventory should already have something in it
// - so a call to player.getInventory() should return an array
// - there is also the case of an empty inventory needing to return false.
//      - You can simulate an empty array yourself by setting player.inventory = [] before the next expect()
// - we already know these tests will fail, because we haven't written the methods
//      - it is still useful to run tests to verify that there are no syntax errors in the test file and we didn't mess up previous tests
// - npm run test
//      - we get failures because we haven't written getStatus and getInventory

// Section 10.2.7: Write getStats and getInventory Methods to Pass Test
//----------------------------------------------------------------------
// In previous projects, you added methods directly to an object

var player = {
    health: 50,
    getStats: function() {
        return this.health;
    }
};

// But how do we add methods now that we are working with constructor functions?
// Ways to add methods to contructor functions
//  - the first approach
//      - use the 'this' keyword that you've already been using
//      - update the Player() constructor function to look like the following code

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

    // returns an object with various player properties
    this.getStats = function() {

        return {
            potions: this.inventory.length,
            health: this.health,
            stength: this.strength,
            agility: this.agility
        };
    }

    // returns the inventory array or false if empty
    this.getInventory = function() {
        if(this.inventory.length) {
            return this.inventory;
        }
        return false;
    };
};

//      - this will create a getStats() and getInventory() method on every Player() object that is created
//      - tun the test and you will see all the tests pass
//  - second approach/refactor
//      - Remove both of the methods from the Player() function
//      - rewrite them below that function using the following prototype syntax

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
}

Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

//      - It still passes test, so what's the difference?
//      - at a glace, using this.methodName makes more sense
//          - clearly shows  that you are creating methods for each player
//              - this is the problem actually
//              - it creates a new methods for EACH player.
//                  - if you have a game that creates 100 Players objects, your code will create 100 getStats() methods
// prototype
// - when using prototype, you are only creating the method once on the constructor itself
// - New player objects simply inherit the method from the constructor rather than having their own instances
// - such inheritance can traverse multiple levels
//      - meaning if the method being called doesn't exist on Player(), JaveScript will look for it on the next constructor up the chain.
//          - in this case the next constructor up would be the built-in Object data type
//          - because of this chain, you can call player.toString() even though you didn't explicitly define a toString() method anywhere.
//              - it was inherited from the Object two levels up
//              - in JavaScript, this is known as the prototype chain.
//              - we'll look at more examples in the next lesson

// *** Inheritence Diagram Example ***

// const player = new Player() 
//         |
//          --->  function Player()
//                getStats()
//                getInventory()
//                      |
//                      ----> function Object()
//                            toString()

// A Warning About ES6 Arrow Functions
//  - you may be tempted to use arrow functions for your protoype methods
//  - however, arrow functions change what 'this' means.
//      - they bind 'this' to the parent lexical scope instead of the scope of the method
//  - with a normal function, this would refer to the Player object
//  - in arrow functions, 'this' refers to whatever it means in the outer scope
//      - in this case of Node.js
//          - the global 'this' is just an empty object (e.g., {}).
//          - thus all these properties become undefined
// quiz at the end;
//  - Mocks go inside a __mocks__ folder located in the same directory as the module you're mocking



// SECTION 3
//-----------

// Section 10.3.1: Introduction
//------------------------------
// In this lesson we will
//  - write jest tests that fake data updates to check multiple conditions
//  - use built-in Array prototype methods

// Section 10.3.2 Preview
//------------------------
// - by the end of the lesson, the Player and Enemy objes will be completed and will pass all their respective tests

// Section 10.3.3: Test and Build Player's Health Methods
//--------------------------------------------------------
// - we still have methods we need to add to the Player object
// getHealth() 
//  - in Player.test.js, create a test to get information about the players health:

test("gets player's health value", () => {
    const player = new Player('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

// - why bother creating this method on the Player object if it's going to be console-logged by the Game object
//      - We chose to create a Player method for this in order to help declutter the logic in Game
//          - this way the game doesn't have to include logic about concatenating player data
//              - concatenation is joining together multiple strings into a single string.
//          - instead game will only have to display data, which falls more in line with the responsibilities of the Game object
// - expect.stringContaining() method
//      - an expect.method() that we can use to make sure our string includes our players health
//      - expect methods are important ***********  
//      - this is preferred because we might need the flexibility to change how the player's health will be displayed, so we make it a string and expect a string just to simply things. 
//          - prevents us from having the change the test if the data type changes to something that is not a string for whatever reason. 
// DEEP DIVE
// - JavaScript also has a string and array method called .includes() 
//      - checks to see if a string exists in an array or another string. 
// Run Failing test
// Add the getHealth() method to our Player.js prototype

Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

// Test now passes. Lets now add another method to check if the player is alive
// isAlive()
//  - first create the test:

test('checks if player is alive or not', () => {
    const player = new Player('Dave');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

// - remember, truthy values are values that will be coerced to true in Boolean contexts, such as inside if statements.
// - here we're updating the value of our player.health halfway through the test so that we can check for both conditions: true and false
// Update Player.js so that the Player() constructor has the isAlive method as such:

Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
    return true;
};

// run test: pass

// reduceHealth()
// - to see if the correct amount of health is being subtracted from the Player health property

test("subtracts from player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});

// - in this case, we will call the reduceHealth() method twice
//      - the second time with a high value, in order to make sure it goes negative
// run test: failed
// Did you notice we create a new Player instance in every test?
//  - now that our tests affect the Player's object property values, if we used the same object every time, we would no longer be testing properties and methods in isolation
//  - it is important to create a new instance of the object we're testing in every test, in order to give that test a fresh start
// Now let's update the Player object with the reduceHealth() method:

Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

// - remember to include the conditional to ensure the health never goes negative
// - what is '-='


// Section 10.3.4: Test and Build Player's Attack and Potion Methods
//-------------------------------------------------------------------
// We need to: 
//  - get the attack value of our player 
//  - add potions to their inventory
//  - consume potions.

// getAttackValue()
//  - write test

test("gets player's attack value", () => {
    const player = new Player('Dave');
    player.strength = 10;

    expect(player.gerAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});
 
//  - we don't opt to check for any number because the test will be too general to give specific feedback for a failing test
//  - Now add the getAttackValue() method to the Player protoype in Player.js

Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

//  - we've created variables for min and max to make this function a little easier to maintian
//      - what if you decide to increase the range of attacks later on?
//      - this code will be easier to understand upon revist than if we wrote all the expressions in one single return statement
//  - Now we've created all the Player methods we'll need so that our Player can attack an enemy.
//  - we still need to handle the use of potions

// addPotion()
// - Lets start by writting a test in Player.test.js to check that a Potion was added correctly

test('adds a potion to the inventory', () => {
    const player = new Player('Dave');
    const oldCount = player.inventory.length;

    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterthan(oldCount);
});

// - run test: failed
// - We keep track of the old count so that we can ensure that adding a potion to our inventory actually increases the length of the player.inventory array
// - NOTICE: we are still using the Potion mock from the previous lesson
// Now let's add the addPotion() method to the Player prototype:

Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};

// - Remember: .push() is an Array method that adds an item to the end of an array
// - potions are a little different because 
//      - we'll need to handle updating the Player inventory
//      - updating the Player stats
// - when a Player drinks a Potion 
//      - the potion needs to be removed from the inventory
//      - Player stats need to be adjusted accordingly

// usePotion()
// Next up, we need to write tests that ensure that usePotion() removes the correct Potion from the Player inventory.
//  - What is the correct potion?
//      - eventually our Player will select which Potion to use from the inventory
//  - we will use the index of the Potion to keep track of which one has been selected
//  - write the test

test('uses a potion from inventory', () => {
    const player = new Player('Dave');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;

    player.usePotion(1);

    expect(player.inventory.length).toBeLessThan(oldCount);
});

// - run test: test fails
// - again, we are keeping track of the old inventory length so that we can make sure the length doesn't go below zero.
// - Update the Player prototype with usePotion() with the following code:

Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
};

// - the splice() method
//      - removes items from an array and returns the removed item(s) as a new array.
// - two things are happening here:
//      - the original inventory array has a single Potion removed at the specified index value and put into a new 'removed items' array
//      - then the Potion at index [0] of this 'removed items' array is saved in a potion variable
// - both .push() and splice() are methods of the Array prototype.
//      - this means that even built-in JavaScript data types are constructor themselves
// DEEP DIVE
// - in JavaScript, [] is interpreted as new Array(). 
//      - this is the reason that all arrays have access to these prototype methods
// - similarly, "" and {} get interpreted using constructors new String() and new Object()
// run test:

// FINALY FINISHED WITH PLAYER CONTRUCTOR

// Section 10.3.5: Test and Build the Base Enemy Constructor



// Extra Notes/Documentation:

