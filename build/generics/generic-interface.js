"use strict";
const feijao = {
    name: 'Feijão Carioca',
    price: 8,
    quantity: 100,
    formatValue(value) {
        let valueFormatted = value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        return valueFormatted;
    }
};
console.log(feijao);
console.log(feijao.formatValue(2000));
// type NewProduct<T extends string | number> = {
//     name: string
//     price: T
// }
// const arroz: NewProduct<string | number> ={
//     name: 'Arroz Branco',
//     price: 9
// }
// console.log(arroz)
