"use strict";
class Store {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }
    createStore(name, category) {
        console.log(`Loja: ${this.name}. Categoria: ${this.category}`);
    }
}
// const fabricadeSoftware = new Store('Fábrica de Software', 'Desenvolvimento de software')
// console.log(fabricadeSoftware)
// console.log(fabricadeSoftware.name)
const utiDosCarros = new Store('UTI dos Carros', 'Oficina mecânica automotiva');
// console.log(utiDosCarros)
utiDosCarros.createStore('UTI dos Carros', 'Oficina mecânica automotiva');
