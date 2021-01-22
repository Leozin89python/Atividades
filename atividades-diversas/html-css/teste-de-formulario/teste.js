




                         /**escopo de funções de teste */


 let showOnAlert = () => {
   let name = document.getElementById('name').value
   let age  = document.getElementById('age').value 
   let sex  = document.getElementById('sex').value
   let date = document.getElementById('date').value
   alert(name)
   alert(age)
   alert(sex)
   alert(date)
}


let showOnConsole = () => {
    let name = document.getElementById('name').value
    let age  = document.getElementById('age').value 
    let sex  = document.getElementById('sex').value
    let date = document.getElementById('date').value
    console.log(name)
    console.log(age)
    console.log(sex)
    console.log(date)
 }

 function showOnBody(){
    let name = document.getElementById('name').value
    let age  = document.getElementById('age').value 
    let sex  = document.getElementById('sex').value
    let date = document.getElementById('date').value

    const query = name + age + sex + date

    document.body.appendChild.innerHTML = query

 }



 onIvisibleObj = (e) =>{
    console.log( 'fix the problem')
    noReset = document.addEventListener('click',noRestart) 

 }


                                  /**escopo de funções de teste */












                                  
                                /*   escopo de funções em uso    */ 






noRestart = (e) =>{
    e.preventDefault()
 }

onClear = () => {
    let name = document.getElementById('name').value
    let age  = document.getElementById('age').value 
    let sex  = document.getElementById('sex').value
    let date = document.getElementById('date').value

    name.value = ''
    age.value = ''
    sex.value = ''
    date.value = ''
}

function submitOnStorage()   {
    let name = document.getElementById('name').value
    let age  = document.getElementById('age').value 
    let sex  = document.getElementById('sex').value
    let date = document.getElementById('date').value

    const STORAGE = '_DATA'
    let data = {
        name:name,
        age:age,
        sex:sex,
        date:date
    }

    let datas = localStorage.getItem(STORAGE)

    if(!datas){
        datas = []
    }else{
        datas = JSON.parse(datas)
    }

    datas.push(data)
    localStorage.setItem(STORAGE, JSON.stringify(datas))
}




 render = (e,noReset,onStorage,clean) =>{

        //noReset = document.addEventListener('click',noRestart)  por causa deste  método*
        onStorage = document.addEventListener('click',submitOnStorage)
        clean = document.addEventListener('click',onClear)

}

      
                          /*   escopo de funções em uso    */ 



        /*   há um evento indesejado*

         este metodo o boReset, faz com que os eventos de listeners
         não fixem ao botão e sim ao clicar em qualquer area da página
         a solução foi desativá-lo

        * /




/*
pegou = () =>   {
    document.addEventListener('click',render)
}
*/

  //http://127.0.0.1:5500/teste.html

 