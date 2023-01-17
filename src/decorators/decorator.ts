// target - receber o construtor da classe

// function logInfo(message: string) {
//     return (target: any) => {
//         console.log(message, target)
//     }
// }

// @logInfo('Sistema está on')
// class System {

// }

// --------------

function setIpServer(ip: string) {
    return (target: any) => { 
        return class extends target {
            ip = ip
        }
    }
}

@setIpServer('200.1.1.1')
class Server {}

const serve1 = new Server()
console.log(serve1)