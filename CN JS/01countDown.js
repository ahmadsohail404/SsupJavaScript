let count = 10
function countDown() {
    console.log(count)
    count--
    if (count == 0) {
        console.log("Time's Up");
        clearInterval(t)
    }
}

let t = setInterval(countDown, 1000)