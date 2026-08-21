const Sequelize = require('sequelize')
const { FORCE } = require('sequelize/lib/index-hints')
const sequelize = new Sequelize('node_js', 'admin', 'admin', {
    host: '127.0.0.1',
    port: 3009,
    dialect: 'mysql'
})

const Post = sequelize.define('post', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
})

Post.sync({FORCE: true})
Post.create({
    title: "FFEJ PULLOF",
    content: "kgsfgjsfgjkdfjgdkgkfgkdfgjk"
})

sequelize.authenticate().then(function(){
    console.log("Conectado")
}).catch(function(erro){
    console.log(erro)
})

