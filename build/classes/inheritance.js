"use strict";
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const user1 = new User(1, 'Leandro');
const user2 = new User(2, 'Rosa');
console.log(user1, user2);
class Admin extends User {
    constructor(id, name, role, level) {
        super(id, name);
        this.role = role;
        this.level = level;
    }
    changeName(name) {
        // this.name = name
        console.log('Altera nome: ', this.name = name);
    }
    accesschangeName() {
        this.changeName('Lorena');
    }
}
const user3 = new Admin(3, 'Natália', 'Designer', 2);
console.log(user3);
const user4 = new Admin(4, 'Roger', 'Programador', 1);
// user4.name = 'Letícia'
// console.log(user4.name)
// user3.changeName('Eduarda')
console.log(user3);
user3.accesschangeName();
console.log(user3);
