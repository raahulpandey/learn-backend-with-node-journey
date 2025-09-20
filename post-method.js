const express = require('express')
const app = express()
let {people} = require('./data')


// middleware to parse incoming JSON
app.use(express.json())

// middleware to parse form data (urlencoded)
app.use(express.urlencoded({ extended: false }))

//parse jason
app.use(express.json())

app.use(express.static('./method-public'))
app.get('/api/people',(req,res) => {
    res.status(200).json({success:true,data:people})
})

app.post('/api/people',(req,res) => {
    const {name}=req.body
    if(!name) {
        return res.status(400).json({success:false,msg:`please provide name value`})
    }
    res.status(201).send({success:true,person:name})
})

app.post('/login',(req,res) => {
    const{name}=req.body
    if(name) {
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('please provide valid credetainls')
})



app.listen(5000,() => {
    console.log('server is running on the port 5000')
})