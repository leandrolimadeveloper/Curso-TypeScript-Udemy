function login(username: string): string | boolean {
    console.log('Olá', username)

    return username
}

login('Leandro')
const functionReturn = login('Júlia')
console.log(functionReturn)

function multiplication(num1: number, num2: number): string {
    let multiplication = num1 * num2

    if (multiplication > 50) {
        return 'Result greater than 50'
    }

    return 'Result lesser than 50'
}

console.log(multiplication(5, 5))