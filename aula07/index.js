const express = require('express')
const app = express()
//Codigo fica aqui

app.get('/', function(req, res){
    res.send("Servidor em express online")
})

app.get('/sobre', function(req, res){
    res.send("Pagina sobre express")
})

app.get('/blog', function(req, res){
    res.send("Blog do pullof")
})

app.listen(8001, function(){
    console.log('Servidor no ar')
})