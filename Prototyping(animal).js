
class Animal {
    constructor(name) {
        this.me = name;

    };
   who()  {
   return("I am " + this.me);}

}

class Dog extends Animal {
    constructor(name,character) {
        super(name);
        this.character=character;
    }

    speak() {
        console.log("Hello, " + this.who() + ".");
    };
}
const fluffy = new Dog("Fluffy",'funny');
const spot = new Dog("Spot",'agressive');
spot.speak();
spot.who();
console.log(spot.character);
