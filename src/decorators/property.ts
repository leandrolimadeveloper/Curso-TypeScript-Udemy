function nameValidate(size: number) {
    return (target: any, key: string) => {
        console.log(key)

        let valor = target[key]

        console.log(valor)
        
        const getter = () => valor

        const setter = (value: string) => {
            if (value === '') {
                console.log('Você não pode deixar em branco')
            } else if (value.length < size) {
                console.log(`O campo ${key} ${value} não pode ser menor que ${size} caracteres`)
            } else {
                valor = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

class OnlineGame {
    @nameValidate(5)
    name: string

    @nameValidate(15)
    description: string

    constructor(name: string, description: string) {
        this.name = name
        this.description = description
    }
}

const game1 = new OnlineGame('GTA', 'GTA Online')
console.log(game1.name)