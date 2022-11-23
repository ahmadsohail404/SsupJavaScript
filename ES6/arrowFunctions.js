//jshint esnext:true

score = 23;
console.log(score);
var score;  // it's a bad practise but still it works because of hoisting.
// always declare your variable first

function printMe() {
    console.log("Hi, I am a function");
}
printMe();

// Arrow function
var funMe = () => {
    console.log("Hi, I am an arrow function");
}
funMe();

var addMe = () => {
    let score = 500;
    let bonus = 50;
    return score + bonus;
}
console.log(addMe());

// passing parameters
var addMe = (score, bonus) => score + bonus;    // shorter version
console.log(addMe(200, 20));

