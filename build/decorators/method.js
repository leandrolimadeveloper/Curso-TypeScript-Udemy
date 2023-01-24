"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function verifyPerson(age) {
    return (target, key, descriptor) => {
        // console.log('Target', target)
        // console.log('Key', key)
        // console.log('Descriptor', descriptor)
        const originalMethod = descriptor.value;
        // Overwrite the method
        descriptor.value = function () {
            if (age < 18) {
                console.log('Cadastrado como menor de idade');
                return originalMethod.apply(this);
            }
            else {
                console.log('Cadastrado como adulto');
                return originalMethod.apply(this);
            }
        };
    };
}
class Pessoa {
    constructor(name) {
        this.name = name;
    }
    registerPerson() {
        console.log(`${this.name}, bem-vindo ao sistema `);
    }
}
__decorate([
    verifyPerson(8)
], Pessoa.prototype, "registerPerson", null);
const persona1 = new Pessoa('Leandro');
// console.log(persona1)
persona1.registerPerson();
