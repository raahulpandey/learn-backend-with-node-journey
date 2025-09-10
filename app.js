const http = require('http')
const {readFileSync}=require('fs');
const hompage = readFileSync('./content/navbar app/index.html')
const server = http.createServer((req,res)=> {
    const url=req.url;
    if(url === '/') { 
        res.writeHead(200,{'content-type' : 'text/html'}) // here you have compulsory to give the text type or content type in node.js
        res.write(hompage);
        res.end()
    }
    else if (url === '/about') {
         res.writeHead(200,{'content-type' : 'text/html'}) 
        res.write('<h1>about page</h1>');
        res.end()
    }else {
         res.writeHead(404,{'content-type' : 'text/html'}) 
        res.write('<h1>page not found</h1>');
        res.end()
    }
})
server.listen(5000)
 