// 1. Base Vehicle class
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `Vehicle: ${this.brand} ${this.model} (${this.year})`;
    }

    isOld() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.year > 10;
    }
}

class Car extends Vehicle {
    constructor(brand, model, year, fuelType) {
        super(brand, model, year);
        this.fuelType = fuelType;
    }

    getInfo() {
        return `Car: ${this.brand} ${this.model} (${this.year}), Fuel: ${this.fuelType}`;
    }
}

let vehicle1 = new Vehicle("Toyota", "Corolla", 2005);
let car1 = new Car("Tesla", "Model 3", 2022, "Electric");

console.log(vehicle1.getInfo());
console.log("Is old? -->", vehicle1.isOld());

console.log(car1.getInfo());
console.log("Is old? -->", car1.isOld());
