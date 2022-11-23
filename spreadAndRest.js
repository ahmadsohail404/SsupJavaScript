const sumOne = (a, b) => {
    return a + b;
}

var myA = [4, 5];
// console.log(sumOne(...myA));   // this is spread operator
// spread operator -> takes a group and spreads it into multiple values.

const sumTwo = (a, b, ...args) => {     // this is a rest operator ->expect that this is an array
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multi];
}
console.log(sumTwo(3, 4, 1, 1));