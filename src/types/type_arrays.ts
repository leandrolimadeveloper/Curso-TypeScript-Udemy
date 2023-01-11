let numeros: number[]

numeros = [1, 3, 6]

numeros.push(10)

console.log(numeros)

let carros: Array<string> = ['Fusca', 'Fiurino', 'Ranger']

carros.unshift('Gol')

carros.pop()

console.log(carros)

let data: Array<string | number | boolean> = [1, 2, 'oi', true]
// let data: (string | number | boolean)[]

data.unshift(0)

data.shift()

console.log(data)
