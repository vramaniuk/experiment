class Animal {
    constructor(name) {
        this.me = name;
        this.who=()=>
             ("I am " + this.me);
        }
    }

class Dog extends Animal {
    constructor(name, character) {
        super(name);
        this.character = `I am ${character}`;
    }

    speak() {
        console.log("Hello, " + this.who() + ".");
    };
}
const fluffy = new Dog("Fluffy", 'funny');
const spot = new Dog("Spot", 'agressive');

spot.speak();
console.log(spot.character);

fluffy.speak();
console.log(fluffy.character);
