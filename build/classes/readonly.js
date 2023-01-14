"use strict";
class Person {
    constructor(name, email) {
        this.id = '50';
        this.name = name;
        this.email = email;
    }
}
const person1 = new Person('Lorena', 'lorena@teste.com');
// person1.id = '51'
console.log(person1.id);
