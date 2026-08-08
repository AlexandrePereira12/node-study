var http = require('http')

http.createServer(function(req, res){
    res.end('Ola servidor ta rodando')
}).listen(8000)

console.log('servidor aberto')