interface GameProps {
    readonly id: string
    name: string
    description: string
    platform: string[]
}

const gta: GameProps = {
    id: '1',
    name: 'GTA V',
    description: 'Open world game',
    platform: ['PC', 'PS5']
}

// console.log(gta)

// interface DLC extends GameProps {
//     newContent: string[]
// }

// const gtaVWithDLC: DLC = {
//     id: '2',
//     name: 'GTA V - New missions',
//     description: 'New missions to explore',
//     platform: ['PC'],
//     newContent: ['Race', 'Rally']
// }

// console.log(gtaVWithDLC)

interface DLC extends GameProps {
    originalGame: GameProps
    newContent: string[]
}

const gtaVWithDLC: DLC = {
    id: '2',
    name: 'GTA V - New missions',
    description: 'New missions to explore',
    platform: ['PC'],
    newContent: ['Race', 'Rally'],
    originalGame: gta
}

console.log(gtaVWithDLC)



