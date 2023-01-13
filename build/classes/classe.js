"use strict";
class Store {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }
    createStore() {
        console.log(`Loja: ${this.name}. Categoria: ${this.category}`);
    }
    purchaseItem(name, price) {
        return `Nome da peça: ${name}, preço: ${price}`;
    }
    repair(vehicle, status, ...services) {
        console.log('----------');
        services.map((service) => {
            console.log(` Serviços a serem feitos: ${service}`);
        });
        return `Veículo: ${vehicle}. Status: ${status}`;
    }
}
// const fabricadeSoftware = new Store('Fábrica de Software', 'Desenvolvimento de software')
// console.log(fabricadeSoftware)
// console.log(fabricadeSoftware.name)
const utiDosCarros = new Store('UTI dos Carros', 'Oficina mecânica automotiva');
// console.log(utiDosCarros)
utiDosCarros.createStore();
const purchaseProduct = utiDosCarros.purchaseItem('Volante', 150.50);
console.log(purchaseProduct);
const vehicle = utiDosCarros.repair('Corsa', 'FINALIZADO', 'Troca de óleo', 'Troca de motor');
console.log(vehicle);
const vehicle2 = utiDosCarros.repair('Pajero', 'EM ANDAMENTO', 'Suspensão');
console.log(vehicle2);
