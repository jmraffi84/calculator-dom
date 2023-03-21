
let button= document.querySelector('#makezero')
let slicelen = document.querySelector('#slicelen')
let equals = document.querySelector('#equal')


function cala(e){
    // console.log('kala btn pressed');
    var data = document.querySelector('.display')
    // let c = data.innerText 
     data.innerText += e.innerText
    //   console.log(data);
    //   console.log(c);

}

slicelen.addEventListener('click',(e)=>{
    var data = document.querySelector('.display')
   
    data.textContent =  e.textContent
    // data.textContent 
    if(data.textContent==undefined){
        var val =+ data.textContent.toString()
        val.slice(0,-1)
    }
   
   console.log(val);
   

})

equals.addEventListener('click',(e)=>{
    var data = document.querySelector('.display')
    data.textContent = eval(data.textContent)
    console.log(data)
})

button.addEventListener('click', (e)=>{
    var data = document.querySelector('.display')
    data.textContent = ""
    console.log(data)
})

window.addEventListener('keydown',(e)=>{
    // let char = a-z

    var data = document.querySelector('.display')
    if(e.code.includes('Numpad')){
        console.log(e, 'hui')
        data.innerText += e.key
       
        // e.innerText = eval(e.innerText)
        console.log(data)
    }
    else if(e.code.includes('Digit')){
        console.log(e)
        data.textContent += e.key
       
        // e.innerText = eval(e.innerText)
        console.log(data)
    }
    // Key
    else if(e.code == 'NumpadEnter' && e.key== 'Enter'){
        // data.textContent += e.key
        data.textContent = eval(data.textContent)
        console.log( data)
    } 
   
    else if(e.code == 'Equal' && e.key == '='){
        //  console.log(data, 'from equal to')
        data.textContent = eval(data.textContent)
        // console.log(data)
        // e.Enter = '';
    }
    console.log(e)
    
})