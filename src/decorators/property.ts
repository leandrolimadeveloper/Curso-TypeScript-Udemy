function nameValidate(size: number) {
    return (target: any, key: string) => {
        console.log(key)

        let valor = target[key]
        
        const getter = () => valor

        const setter = (value: string) => {
            if (value === '') {
                console.log('Você não pode deixar em branco')
            } else if (value.length < size) {
                console.log(`Não pode ser menor que ${size} caracteres`)
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

    constructor(name: string) {
        this.name = name
    }
}

const game1 = new OnlineGame('GTA')
console.log(game1.name)