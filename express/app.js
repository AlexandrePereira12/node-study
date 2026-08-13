const express = require('express')
const app = express()
//Codigo fica aqui

app.get('/', function(req, res){
    res.sendFile(__dirname + "/templates/index.html")
})

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + "/templates/sobre.html")
})

app.get('/blog', function(req, res){
    res.send("Blog do pullof")
})

app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send("Ola " + req.params.nome + " Cargo: " + req.params.cargo + " Tua cor é " + req.params.cor)
    // res.send("Cargo: " + req.params.cargo)
    // res.send("Tua cor é " + req.params.cor)
})

app.listen(8001, function(){
    console.log('Servidor no ar')
})