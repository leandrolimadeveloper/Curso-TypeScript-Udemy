"use strict";
const newUser = {
    id: '1',
    name: 'Léo',
    email: 'leo@leo.com',
    age: 40
};
function newUserFunc(user) {
    console.log(user.name);
    console.log(user.email);
}
newUserFunc({ id: '2', name: 'Larissa', email: 'lari@lari.com' });
