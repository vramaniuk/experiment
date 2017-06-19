/**
 * Created by VSKD on 28.03.2017.
 */
function f(y) {
    return this.x + y;
}
const o = {x: 10};
const o2 = {x: 17};

let arr = [3];
console.log(f.call(o, 3));
console.log(f.call(o2, ...arr));


// const g = f.bind(o);
// console.log(g(2));


