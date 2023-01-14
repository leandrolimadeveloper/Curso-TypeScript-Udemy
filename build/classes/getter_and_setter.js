"use strict";
class Game {
    constructor(id, name, server) {
        this.id = id;
        this.server = server;
        this.name = name;
    }
    get getServerGame() {
        console.log('Servidor do jogo: ', this.server);
        return { name: this.name, server: this.server };
    }
    set setServerGame(newServerAddress) {
        if (this.server === newServerAddress) {
            throw new Error('O IP deve ser diferente');
        }
        console.log(`Endereço antigo: ${this.server}`);
        this.server = newServerAddress;
        console.log('Novo endereço do servidor: ', newServerAddress);
    }
}
const GTAV = new Game('1', 'GTAV', '200.189.150.30');
// console.log(GTAV)
// console.log(GTAV.getServerGame)
try {
    GTAV.setServerGame = '200.189.150.30';
}
catch (error) {
    console.log(error.message);
}
console.log(GTAV.getServerGame);
