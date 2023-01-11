interface CourseProps {
    id: string
    name: string
    price: number

    onSale: (price: number) => void
}

// function showPrice(price: number): void {
//     console.log(`Promoção no curso por apenas: R$ ${price}`)
// }

// const newCourse: CourseProps = {
//     id: 'abc',
//     name: 'Curso de Ruby',
//     price: 180,
//     onSale: showPrice
// }

const newCourse: CourseProps = {
    id: 'abc',
    name: 'Curso de Ruby',
    price: 180,

    // Passar a função diretamente
    onSale: (price: number): void => {
        console.log('Preço: ', price)
    }
}

console.log(newCourse)
console.log(newCourse.onSale(120))

// Função diretamente na interface
interface AdditionProps {
    (num1: number, num2: number): number
}

const addition: AdditionProps = (num1: number, num2: number): number => {
    const result = num1 + num2

    console.log('Resultado: ', result)

    return result
}

const result = addition(10, 2)
console.log('Resultado da const:', result)