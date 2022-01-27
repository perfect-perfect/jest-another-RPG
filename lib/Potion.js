/// the Potion() constructor should take in a name parameter and assign the value property to be a random number between 30 and 40.

// function Potion(name) {
//     this.name = name;

//     if (this.name === 'health') {
//         this.value = Math.floor(Math.random() * 10 + 30);
//     }
//     else {
//         this.value = Math.floor(Math.random() * 5 + 7);
//     }
// }

// module.exports = Potion;


// Section 10.1.7 Refactor

function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    }
    else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;