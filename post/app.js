const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')

// Config
    // Template Engine
        app.engine('handlebars', engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // DB Connection
    const sequelize = new Sequelize('node_js', 'admin', 'admin', {
        host: '127.0.0.1',
        port: 3009,
        dialect: 'mysql'
    })
    //Body-Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use((bodyParser.json()))

// Routes
    app.get('/cad', function(req, res) {
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        req.body.titulo
        res.send('Texto: ' + req.body.titulo + "<br>Conteudo: " + req.body.conteudo)
    })

app.listen(8001, function() {
    console.log('Servidor no ar')
})