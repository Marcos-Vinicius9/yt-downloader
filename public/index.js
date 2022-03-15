let button = document.querySelector('#enviar');

let input = document.querySelector("#input");

button.addEventListener('click',()=>{
    if(input.value.length == 0){
        alert('campo vazio')
    }
})