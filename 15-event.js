const eventEmitter= require('events')
const customevent = new eventEmitter()

customevent.on('response' , (name,id) => {
    console.log('data recived',`of ${name} with ${id}`)
})

customevent.emit('response','john',20) 