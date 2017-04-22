/**
 * Created by VSKD on 21.04.2017.
 */
/*function Animal(name) {
 this.me = name;
 }
 Animal.prototype.who = function () {
 return "I am " + this.me;
 };
 Animal.prototype.speak = function () {
 console.log("(Animal) speak!");
 };

 function Dog(name) {
 Animal.call(this, name);
 }
 Dog.prototype = Object.create(Animal.prototype);
 Dog.prototype.constructor = Dog;


 Dog.prototype.speak = function () {
 Animal.prototype.speak.call(this);
 console.log("Hello, " + this.who() + ".");
 };

 const fluffy = new Dog("Fluffy");
 const spot = new Dog("Spot");
 fluffy.speak();*/

class Animal {
    constructor(name) {
        this.me = name;
        // this.who = function () {
        //     return "I am " + this.me;
        // }
    };
}
Animal.prototype.who=function () {
    return "I am " + this.me;
};
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
fluffy.speak();
console.log(fluffy.character);
