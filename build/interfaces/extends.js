"use strict";
const gta = {
    id: '1',
    name: 'GTA V',
    description: 'Open world game',
    platform: ['PC', 'PS5']
};
const gtaVWithDLC = {
    id: '2',
    name: 'GTA V - New missions',
    description: 'New missions to explore',
    platform: ['PC'],
    newContent: ['Race', 'Rally'],
    originalGame: gta
};
console.log(gtaVWithDLC);
