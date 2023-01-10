let situation: unknown = 1

situation = situation as number

console.log(situation)
console.log(typeof situation)

let changeSituation: number
changeSituation = situation as number

console.log(changeSituation)

// Outra forma
situation = <number>situation
console.log(situation)