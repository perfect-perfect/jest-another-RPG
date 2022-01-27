// We use npm run test in the terminal to run tests.
// this names the function we are exporting from Potion.js, Potion
const Potion = require('../lib/Potion.js');

// we'll use the 'new' keyword to create a new Potion object. Because potions will store both name and value, we should make them objects intead of variables
test ('create a health potion object', () => {
    // the new creates a new Potion object. We'll get into this more later
    // here we're assuming that when we create a new potion, it will take the string we pass in and assign it to the potions name.
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    // expect.any() method takes a constructor as an argument. 
    // here we are expecting that the value property is created with a Number() constructor.
    // We allow the value to be any number, rather than a number in a range so that test has more flexibilty
    expect(potion.value).toEqual(expect.any(Number));
});

// at this point we get the error "TypeError: Potion is not a constructor"
// it tells us the function exported from lib/Potion.js is not a constructor function

// notice we don't check the name value to see what type of potion it is.
test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});