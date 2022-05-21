
//adicionando array do enunciado
let fruits = [3, 4, 10, 1, 12];

//criar variavel para guardar o resultado depois
let sum = 0;

//criando loop que percore o array Fruits
for(let index = 0; index < fruits.length; index +=1){
    //incrementar a varivel de resultado com o valor correspondente a cada loop
    sum += fruits[index];
}

//Criar um if com a condição da váriavel ser maior que 15
if(sum > 15){
    //Caso a varíavel obedeça a condição: Imprimir a varíavel;
    console.log(sum);
} else{
    //Caso não obedeça a condição: Imprimir a mensagem “valor menor que 16”;
    console.log('valor menor que 16');
}
