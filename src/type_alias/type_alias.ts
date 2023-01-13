type Uuid = number | string

function userLogin(uuid: string | number, name: string) {
    console.log(`ID: ${uuid}, nome: ${name}`)
}

function userLog(uuid: Uuid) {
    console.log(`Conta referente ao ID: ${uuid}`)
}

userLogin('1', 'Leandro')
userLog(1)


type Currency = 'BRL' | 'EUR' | 'USD' | 'BTC'

function purchaseItem(currency: Currency) {
    console.log(`Compra com a moeda ${currency}`)
}

purchaseItem('BRL')