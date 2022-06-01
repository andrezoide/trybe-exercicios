let botaoSubmit = document.querySelector('#botao-submit');
let botaoReset = document.querySelector('#botao-reset');
let nomeCompleto = document.querySelector('#input-name')
 //function cancela(event){
   // event.preventDefault();
//}
//botaoSubmit.addEventListener('click', cancela);

function alerta(){
    if(nomeCompleto.textContent < 10){
    window.alert('Dados Inválidos');
}   else{
    window.alert('Dados enviados com sucesso! Obrigado por participar <3')
}
    

    }

botaoSubmit.addEventListener('click', alerta);