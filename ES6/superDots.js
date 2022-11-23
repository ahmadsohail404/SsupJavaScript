function deposit(...money) {
    let balance = 0;
    for (let i = 0; i < money.length; i++) {
        balance += money[i]
    }
    return balance
}

console.log(deposit(100, 60, 50, 40));

let addMoney = [22, 53, 67, 34, 97, 56];
console.log(...addMoney);       // the array is converted into list
console.log(Math.max(...addMoney));

