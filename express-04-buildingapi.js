const express = require('express')
const app = express()
const {products } = require('./data')

app.get('/',(req,res) => {
    res.send('<h1>home page</h1><a href ="/api/products">products</a>')
})

app.get('/api/products',(req,res) => {
    const newProducts = products.map((product) => {
        const{id,name, images} = product;
        return {id,name,images}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID',(req,res) => {
    // console.log(req);
    // console.log(req.params)
    const {productID} = req.params; 
    const singleproduct = products.find((product) => product.id === Number(productID))
    if(!singleproduct) {
        return res.status(404).send('product does not exist')
    }
    res.json(singleproduct)
})

app.get('/api/products/:productID/reviews/:reviewsID' , (req,res) => {
    console.log(req.params);
    res.send("hello world")
})
app.get('/api/v1/query',(req,res)=> {
    const {search,limit} = req.query;
     
    let sortedproduct = [...products]
    if(search) {
        sortedproduct=sortedproduct.filter((product) =>{
            return product.name.startsWith(search)
        })
    }
    if(limit) {
        sortedproduct=sortedproduct.slice(0,Number(limit))
    }
    res.status(200).json(sortedproduct)
})


app.listen(5000,() => {
    console.log('server is running on the port 5000.....')

})