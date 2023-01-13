"use strict";
function userLogin(uuid, name) {
    console.log(`ID: ${uuid}, nome: ${name}`);
}
function userLog(uuid) {
    console.log(`Conta referente ao ID: ${uuid}`);
}
userLogin('1', 'Leandro');
userLog(1);
function purchaseItem(currency) {
    console.log(`Compra com a moeda ${currency}`);
}
purchaseItem('BRL');
