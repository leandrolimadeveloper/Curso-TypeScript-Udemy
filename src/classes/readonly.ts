class Person {
    readonly id: string = '50'
    name: string
    email: string

    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
}

const person1 = new Person('Lorena', 'lorena@teste.com')
// person1.id = '51'
console.log(person1.id)
