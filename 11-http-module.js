const http=require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end("welcome to our home page")
    }
    else if(req.url === '/about') {
        res.end("here is our short history");
    }
    else {
        res.end(`
        <h1>opps!</h1>
        <p>we won't to able to see the page what are you looking for</p>
        <a href ="/">Back to hime</a>
    `)
    }
})

server.listen(5000)