if (true) {
    var score = 80  // here var can be accessed outside the if block
}
console.log(score);

if (true) {         // the let can't be accessed outside the if block
    let score = 88
}
console.log(score);
