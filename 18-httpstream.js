const http = require('http')
var fs= require('fs')
http.createServer(function(req,res) {
    //const text =fs.readFileSync('./content/big.txt','utf8')
    const text = fs.createReadStream('./content/big.txt','utf8')
    text.on('open',() =>{
    text.pipe(res)
    })
    text.on('error',(err) => {
        res.end(err)
    })
})
.listen(5000)