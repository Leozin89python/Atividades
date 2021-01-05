const servidor = require('express')
const app = servidor()

const parser = require('body-parser')

app.use(servidor.static('.'))
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.get('/teste', (req,res)  =>{
    res.send([{
        "nome":"Laura Santos",
        "conta":"0324"
    },{
        "nome":"Erica Souza",
        "conta":"0347"
    },{
        "nome":"Fernada Sena",
        "conta":"0308"
    }])
})

app.listen(3000, ()   =>{
    console.log('executando')
})