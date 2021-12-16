var counter = document.getElementsByClassName("counter")[0];
var followers = document.getElementsByClassName("followers")[0];

let count = 0;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerHTML = count;
    }
}, 1)

setTimeout(() => {
    followers.innerHTML = "Followers on Instagram!"
}, 4300)