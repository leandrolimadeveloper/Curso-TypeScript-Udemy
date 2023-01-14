import { applyMixins } from "./mixins/apply_mixins"

class Vehicle {
    chassis: string

    constructor(chassis: string) {
        this.chassis = chassis
    }
}

type Transmission = 'Manual' | 'Automática'

class Specification {
    color: string
    transmission: Transmission

    constructor(color: string, transmission: Transmission) {
        this.color = color
        this.transmission = transmission
    }
}

class Car {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

interface Car extends Vehicle, Specification { }

applyMixins(Car, [Vehicle, Specification])

const newCar = new Car('BMW')

newCar.transmission = 'Automática'
newCar.chassis = '12312300231AB'

console.log(newCar)
