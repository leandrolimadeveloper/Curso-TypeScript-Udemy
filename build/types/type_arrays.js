"use strict";
let numeros;
numeros = [1, 3, 6];
numeros.push(10);
console.log(numeros);
let carros = ['Fusca', 'Fiurino', 'Ranger'];
carros.unshift('Gol');
carros.pop();
console.log(carros);
let data = [1, 2, 'oi', true];
// let data: (string | number | boolean)[]
data.unshift(0);
data.shift();
console.log(data);
