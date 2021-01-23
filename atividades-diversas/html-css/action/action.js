

                  /** metodos de desenvolvimento/em produção */
onSend = () =>  {
        //levantamento dos dados/variáveis
        let  name = document.getElementById('name').value 
        let  email = document.getElementById('email').value 
        let  buy = document.getElementById('buy').value 
        let  price = document.getElementById('price').value 
        let  quantity = document.getElementById('quantity').value 
        let  adress = document.getElementById('adress').value 
        
        //total(price,quantity)
        let section = document.getElementById('section').value
        let date = document.getElementById('date').value 


        data = {
            name:name,
            email:email,
            buy:buy,
            price:price,
            quantity:quantity,
            adress:adress,
            section:section,
            date:date
            // total:total
        }


        //processamento dos dados e envio ao storage
        const FORMULARY = '_FORMULARY'

        let formularies = localStorage.getItem(FORMULARY)
        if(!formularies){
            formularies = []
        }else{
            formularies = JSON.parse(formularies)
        }

        formularies.push(data)
        localStorage.setItem(FORMULARY,JSON.stringify(formularies))

}

              



onClear = () => {

        
        //levantamento de dados/criação de variáveis
        let  name = document.getElementById('name')
        let  email = document.getElementById('email')
        let  buy = document.getElementById('buy')
        let  price = document.getElementById('price')
        let  quantity = document.getElementById('quantity')
        let  adress = document.getElementById('adress')
        let section = document.getElementById('section')
        let date = document.getElementById('date') 


        //processamento das variáveis/mudança de comportamento
        name.value     = ''
        email.value    = ''
        buy.value      = ''
        price.value    = ''
        quantity.value = ''
        adress.value   = ''
        section.value  = ''
        date.value     = '' 

       // console.log('?') 
}



total = (price,quantity) =>   {
         let calc = price * quantity
}

                    /** metodos de desenvolvimento/em produção */









                         /** metodos de teste */


                         /**teste de sincronização e chamada-1 */
/*
         


                neste bloco de métodos testo a captura do objeto Total(input)




teste = () =>   {
		console.log('mostrou')
}

showTotalTest = () =>   {

		let total = document.getElementById('total')
		total.value = teste()
		
		console.log(total.value)
		alert
}

window.onloadstart = showTotalTest()

*/
                      /**teste de sincronização e chamada-1 */


                     /**teste de sincronização e chamada-2 */
                     /*




            neste bloco de métodos testo a captura dos objetos preço e quantidade
            ambos com valores setados.



testeComParametros = ( price, quantity ) => {

		 price = document.getElementById('price')
		 quantity = document.getElementById('quantity') 
		 price.value = 0
		 quantity.value = 0
		 console.log(price)
		 console.log(quantity)
}
showTotalTestComParametros = () =>{
		let total = document.getElementById('total')
		total.value = testeComParametros()
		console.log(total.value)
}
document.oninput = showTotalTestComParametros()

  

*/

      





                     /**teste de sincronização e chamada-2 */




                     /**teste de sincronização e chamada-3 */


                     /*


            neste bloco de métodos testo a captura dos objetos preço e quantidade
            ambos com valores variando ou seja capturando suas respectivas mudanças.






testeComParametros1 = ( price, quantity ) => {

		price = document.getElementById('price').value
		quantity = document.getElementById('quantity').value 
		console.log(price)
		console.log(quantity)
            }
showTotalTestComParametros1 = () =>{
		let total = document.getElementById('total')
		total.value = testeComParametros1()
		console.log(total.value)       
				}

 document.addEventListener('change', change =>{

    
       console.log( document.onchange = showTotalTestComParametros1() ) 
    
     
                    })
                        */

                      /**teste de sincronização e chamada-3 */



                        /**teste de sincronização e chamada-4 */


                        /**
            neste bloco de métodos testo a captura dos objetos preço e quantidade
            ambos com valores variando ou seja capturando suas respectivas mudanças e 
            capturo um metodo de processamento/tratamento dos campos.
            (fazendo a multiplicação dos mesmos)
                         * 
                         */


                        
testeComParametros2 = ( price, quantity ) => {

        price = document.getElementById('price').value
        quantity = document.getElementById('quantity').value 
        console.log(price)
        console.log(quantity)
                                    }

mult = () => {
		price = document.getElementById('price')
		quantity = document.getElementById('quantity') 
		multiplying = price.value * quantity.value
		console.log(multiplying)
}

showTotalTestComParametros2 = () =>{
        let total = document.getElementById('total')
        total.value = testeComParametros2()
        console.log(total.value)       
                                    }
                        
        document.addEventListener('change', change =>{
                        
                            
        document.onchange = showTotalTestComParametros2()
        document.onratechange = mult()
         
                            
                             
                     })
    
                /*     */

                        /**teste de sincronização e chamada-4 */




                       /**teste de sincronização e chamada-5 */




                      /**teste de sincronização e chamada-5 */

                      


                     /** metodos de teste */