/*var http = require('http')

http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text'})
    res.end("Welcome Back India!!!")
}).listen(8080)*/
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.listen(3000, () => console.log('Running port 3000!'));