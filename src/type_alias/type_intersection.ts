type Product = {
    id: number
    name: string,
    description: string
}

// const product: Product = {
//     id: 1,
//     name: 'Placa de vídeo',
//     description: 'GTX 1080'
// }

type Category = {
    category: string[]
}

// const category: Category = {
//     category: ['informática', 'hardware']
// }

// console.log(product, category)

type ITProduct = Product & Category

const newProduct: ITProduct = {
    id: 1,
    name: 'Notebook Gamer',
    description: 'Notebook Ultra X10',
    category: ['hardware', 'informática']
}

console.log(newProduct)