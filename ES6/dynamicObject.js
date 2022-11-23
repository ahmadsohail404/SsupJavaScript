let score = 300;

let wrath = "angry"

let myObj = {
    name: 'Sohail',
    score: 100,    // it'll take the value from existing
    angry: 99,
    highScore() {
        console.log("your score is " + this.score);
    }
};

console.log(myObj.score);
console.log(myObj[wrath]);  // 👀
console.log(myObj.highScore());

