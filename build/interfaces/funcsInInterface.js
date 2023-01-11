"use strict";
// function showPrice(price: number): void {
//     console.log(`Promoção no curso por apenas: R$ ${price}`)
// }
// const newCourse: CourseProps = {
//     id: 'abc',
//     name: 'Curso de Ruby',
//     price: 180,
//     onSale: showPrice
// }
const newCourse = {
    id: 'abc',
    name: 'Curso de Ruby',
    price: 180,
    // Passar a função diretamente
    onSale: (price) => {
        console.log('Preço: ', price);
    }
};
console.log(newCourse);
console.log(newCourse.onSale(120));
const addition = (num1, num2) => {
    const result = num1 + num2;
    console.log('Resultado: ', result);
    return result;
};
const result = addition(10, 2);
console.log('Resultado da const:', result);
