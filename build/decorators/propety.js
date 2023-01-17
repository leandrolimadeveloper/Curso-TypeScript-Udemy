"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function nameValidate(size) {
    return (target, key) => {
        console.log(key);
        let value = target[key];
        const getter = () => value;
        const setter = (value) => {
            if (!value) {
                console.log('Você não pode deixar em branco');
            }
            else if (value.length < size) {
                console.log(`Não pode ser menor que ${size} caracteres`);
            }
            else {
                value = value;
            }
        };
        Object.defineProperty();
    };
}
class OnlineGame {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    nameValidate(5)
], OnlineGame.prototype, "name", void 0);
const game1 = new OnlineGame('a');
console.log(game1.name);
