interface Register {
    id: string
    name: string
    email: string
    age?: number
}

const newUser: Register = {
    id: '1',
    name: 'Léo',
    email: 'leo@leo.com',
    age: 40
}

function newUserFunc(user: Register) {
    console.log(user.name)
    console.log(user.email)
}

newUserFunc({id: '2', name: 'Larissa', email: 'lari@lari.com'})

