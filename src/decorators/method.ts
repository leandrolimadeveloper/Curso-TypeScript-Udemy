function verifyPerson(age: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        // console.log('Target', target)
        // console.log('Key', key)
        // console.log('Descriptor', descriptor)

        const originalMethod = descriptor.value

        // Overwrite the method
        descriptor.value = function() {
            if (age < 18) {
                console.log('Cadastrado como menor de idade')
                return originalMethod.apply(this)
            } else {
                console.log('Cadastrado como adulto')
                return originalMethod.apply(this)
            }
        }
    }
}

class Pessoa {
    name: string

    constructor(name: string) {
        this.name = name
    }

    @verifyPerson(8)
    registerPerson() {
        console.log(`${this.name}, bem-vindo ao sistema `)
    }
}

const persona1 = new Pessoa('Leandro')
// console.log(persona1)
persona1.registerPerson()