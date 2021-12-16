var counter = document.getElementsByClassName("counter")[0];
var followers = document.getElementsByClassName("followers")[0];

let count = 0;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerHTML = count;
    }
}, 10)

setTimeout(() => {
    followers.innerHTML = "1000 followers on Instagram!";
}, 4500)