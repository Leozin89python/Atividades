
const server = require('express')
const app = server()

app.listen(8080, ( ) =>{
    console.log('===============')
    console.log('|             |')
    console.log('|   Company   |')
    console.log('|             |')
    console.log('| tecnologies |')
    console.log('|             |')
    console.log('===============')
    requisicao()
})

function requisicao(){
    app.get('/', (req,res) =>{
        res.send({
            'message':'this is the backend of your application'
        })
    })


    app.get('/company', (req,res,next) =>{
       res.send([
           {'enterprise':'Company.tecnologies inc all right reserved'}
       ]) 
    })

    app.get('/company-products',(req,res,next) =>{
            res.send([
                {'product':'hairis system',
                 'price': '103.546,25 R$'},
                {'product':'merc',
                 'price': null },
                {'product':'eu.',
                 'price': '12,90R$/mês'}
            ])
    })

    app.get('/about', (req,res) =>{
        res.send({
           'message':"were're tenological enterprise of comunication and application of software to make your life better!"  
        })
    })



} 

//  http://localhost:8080
//  http://localhost:8080/coav-products
//  http://localhost:8080/about

 /* */