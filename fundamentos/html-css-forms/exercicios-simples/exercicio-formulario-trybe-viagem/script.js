let botaoSubmit = document.querySelector('#botao-submit');
let botaoReset = document.querySelector('#botao-reset');
let nomeCompleto = document.querySelector('#input-name')
 //function cancela(event){
   // event.preventDefault();
//}
//botaoSubmit.addEventListener('click', cancela);

function alerta(){
    if(nomeCompleto.textContent < 10){
    window.alert('escreve direito burro(a)');
}   
    

    }

botaoSubmit.addEventListener('click', alerta);
