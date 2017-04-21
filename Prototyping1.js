/**
 * Created by VSKD on 28.03.2017.
 */
function Product(name, price,color) {
    this.name = name;
    this.price = price;
    this.color = color;

    if (price < 0) {
        throw RangeError('Нельзя создать продукт ' +
            this.name + ' с отрицательной ценой');
    }

    return this;
}

function Food(name, price,color) {
    Product.call(this, name, price,color);
    this.category = 'еда';
}

Food.prototype = Object.create(Product.prototype);

function Toy(name, price,color) {
    Product.call(this, name, price,color);
    this.category = 'игрушка';
}

Toy.prototype = Object.create(Product.prototype);

var cheese = new Food('фета', 5,'yellow');
var fun = new Toy('робот', 40,'red');

console.log(this.name);
