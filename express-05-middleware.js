const express = require('express') ;
const app= express()
const loger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res
//app.use('/api',loger) if you write this in all the api starting url dosent require to write loger in every get function
app.use([authorize,loger])
app.get('/',(req,res) => {
    res.send('Home')
})
//app.use(loger) if yo will write this the in the below you dont have to write in each and every get function
app.get('/about',(req,res) => {
    res.send('about')
})

app.get('/api/products',(req,res) => {
    res.send('products')
})
app.get('api/items',(req,res) => {
    res.send(items) 
})

app.listen(5000, () => {
    console.log('seerver is listening at the port 5000');
})