
const os = require('os')

//Info about the current user
const user = os.userInfo();
console.log(user);

///method return that system uptime in second
console.log(`The system uptime is ${os.uptime}`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOs)