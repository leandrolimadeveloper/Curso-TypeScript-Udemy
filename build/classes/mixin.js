"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apply_mixins_1 = require("./mixins/apply_mixins");
class Vehicle {
    constructor(chassis) {
        this.chassis = chassis;
    }
}
class Specification {
    constructor(color, transmission) {
        this.color = color;
        this.transmission = transmission;
    }
}
class Car {
    constructor(name) {
        this.name = name;
    }
}
(0, apply_mixins_1.applyMixins)(Car, [Vehicle, Specification]);
const newCar = new Car('BMW');
