const { json } = require('express')
const express = require('express')
const app = express()
const port = 8080
const url = require('./db.json')

app.get('/', (req,res,next) =>{
    res.send([{
        name:'Company',
        unity:'Salvador - BA'
    }])
})
app.get('/data', (req,res) =>{
    res.send({
         ...url
    })
})
app.listen(port, ( )    =>{
    console.log('Active')
})

// http://localhost:8080/
// http://localhost:8080/data