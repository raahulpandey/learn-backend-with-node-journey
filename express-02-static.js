const express = require('express')
const path = require('path')
const app = express()

//app.use(express.static('./filename)) //use all the file togther dont have to do again and again acess the file  
//setup satic and midleware
app.get('/',(req,res) => {
res.sendFile(path.resolve(__dirname,'./content/navbar app/index.html')) 
})


app.all(/.*/,(req,res) => {
    res.status(404).send('resource not found')
})





app.listen(5000, () => {
    console.log("Server is listening at the port 5000.....")
})