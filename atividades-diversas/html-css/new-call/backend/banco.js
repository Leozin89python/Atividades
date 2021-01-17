const express = require('express')
const app = express()
const port = 8081
const banco = require('./banco/db.json')


app.get('/', (req,res)  =>{
    res.send({
        banco
    })
})
app.listen(port, () =>{
    console.log('active')
})

