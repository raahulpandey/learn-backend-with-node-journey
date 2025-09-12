const express = require('express')
const app =express()

app.get('/',(req,res) => {
    res.json([{name: 'Rahul'}, {name: 'Pandey'}])
})



app.listen(5000, () => {
    console.log('server is running on the port 5000....')
})