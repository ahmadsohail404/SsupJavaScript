// function Vehicle(numWheels, price) {
//     this.numWheels = numWheels;
//     this.price = price;
// }

// Vehicle.prototype.getPrice = function () {
//     return this.price;
// }

class Vehicle {

    constructor(numWheels, price) {
        this.numWheels = numWheels;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }

}

var vehicle1 = new Vehicle(4, 400);
var vehicle2 = new Vehicle(6, 700);

console.log();
