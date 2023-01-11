interface OrderProps {
    id: string
    name: string
    address: string
    country?: string 
    status: boolean
}

const OrderClient: OrderProps = {
    id: '1',
    name: 'Mouse',
    address: 'Rua logo ali',
    status: true
}

console.log(OrderClient)

// function clientOrder(id: string, name: string, address: string, status: boolean) {
//     console.log(`Order ${id} ${name}, endereço ${address}, criado com sucesso! Status: ${status}`)
// }

// clientOrder('1', 'Antônio', 'rua 10', true)

function clientOrder({ id, name, address, status }: OrderProps): void {
    console.log(`Pedido ${id} ${name}, endereço ${address}, criado com sucesso! Status: ${status}`)
    console.log('-----------')
}

clientOrder({id: '10', name: 'Karla', address: 'Rua Getat', status: true})
clientOrder({id: '11', name: 'Joice', address: 'Rua Getat', status: true})