/**
 * Created by VSKD on 28.03.2017.
 */
function Product(name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;

    if (price < 0) {
        throw RangeError('Нельзя создать продукт ' +
            this.name + ' с отрицательной ценой');
    }
    this.sayHi=()=>`Hi, I am ${this.name}`;
return this;
}


function Food(name, price, color) {
    Product.call(this, name, price, color);
    this.category = 'еда';
}

// Food.prototype = Object.create(Product.prototype);
// Food.prototype.constructor = Food;

function Toy(name, price, color) {
    Product.call(this, name, price, color);
    this.category = 'игрушка';
}

// Toy.prototype = Object.create(Product.prototype);

var cheese = new Food('фета', 5, 'yellow');

// var fun = new Toy('робот', 40, 'red');

console.log(cheese.sayHi());
// console.log(fun.name);

// class Product {
//     constructor(name,price,color) {
//         this.name = name;
//         this.price = price;
//         this.color = color;
//     }
// }
// class Food extends Product{
//     constructor(name,price,color,category){
//         super(name,price,color);
//         this.category = category;
//         if (price < 0) {
//             throw RangeError('Нельзя создать продукт ' +
//                 this.name + ' с отрицательной ценой');
//         }
//     }
// }
// const cheese = new Food('фета', 5, 'yellow','kovno');
// console.log(cheese.category);
// const thms = new Product('fallo', -15, 'green','shedevr');
// console.log(thms.name);