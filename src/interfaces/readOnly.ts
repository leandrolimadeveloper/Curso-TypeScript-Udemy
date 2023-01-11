interface ProductProps {
    readonly id: string
    name: string
    description: string
}

let product1: ProductProps = {
    id: '1',
    name: 'Notebook Asus',
    description: 'Notebook Gamer'
}

product1.description = 'Notebook Gamer X5'

console.log(product1)
console.log(product1.id)