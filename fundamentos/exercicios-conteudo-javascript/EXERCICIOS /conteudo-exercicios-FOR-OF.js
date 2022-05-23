//Com a chegada do ES6, ganhamos uma nova funcionalidade para iterar arrays e objetos. Objetos iteráveis são objetos ou uma estrutura de dados que permite acessar o seu conteúdo com um for. O for/of nos permite criar loops em objetos iteráveis como strings, arrays, entre outros, mas vamos focar somente nesses dois!

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}   // resultado:
        //1
        //2
        //3
        //4
        //5
//O laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array numeros

//outro exemplo:
let word = ['Hello'];
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"
// com for of também conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31
//É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro, e no caso, adicionando 1 à soma.

//EXERCICIO FOR/OF
//exercicio 1: utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['joao', 'maria', 'antonio', 'margarida'];
for(let nomes of names){
    console.log(nomes);
}

//EXERCICIOS PARA VALER ARRAY E LOOP FOR:
//exerciocio 1:
//Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

//exercicio 2:
//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for(let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
    //ME BATI MUITO NISSO PORQUE ESTAVA COLOCANDO CONSOLE.LOG() DENTRO DO FOR E FICAVA DANDO LOOP TAMBÉM NO CONSOLE APRESENTANDO VARIOS VALORES.
}
console.log(sum);

//exercicio 3:
//Para o terceiro exercicio, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let aritmetica = 0;
for(let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
    aritmetica = sum / numbers.length;
}
console.log(aritmetica);

//exercicio 4:
//com o mesmo codigo do exercicio anterior, caso o valor final seja maior que 20, imprima a mensagem: 'valor maior que 20'. caso contrario, imprima a mensagem: 'valor menor ou igual a 20;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let aritmetica = 0;
for(let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
    aritmetica = sum / numbers.length;
}
if(aritmetica > 20){
    console.log('valor maior que 20');
} else{
    console.log('valor menor que 20');
}

//exercicio 5:
//utilizando for, descubra qual o maior valor contido no array e imprima-o. EXERCICIO FUGUETE
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = 0;
for(index = 0; index < numbers.length; index += 1){
    if(numbers[index] > higherNumber){
        higherNumber = numbers[index]
    }
    
}console.log(higherNumber);

//exercicio 6:
//descubra quantos valores impares existem no array e imprima o resultado. caso nao exista nenhum imprima a mensagem 'nenhum valor impar encontrado'
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 2;
let result;
let todosImpares;
for(index = 0; index < numbers.length; index += 1){
    result = numbers[index] % impares;
    if(numbers[index] % impares == 1){
        console.log(numbers[index]);
    }
}

if(result == 1){

    console.log('tem numero é impar');
} else{
    console.log('nao tem numero nao é impar');
}

//exercicio 7
//utilizando for, descubra qual o menor valor contido no array e imprima-o
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lessNumber = 0;
for(let index = 1; index < numbers.length; index += 1){
    if(numbers[index] < index){
        lessNumber = numbers[index];
        
    }
}
console.log(lessNumber);

//exercicio 8:
//utilizando for, crie um array que va de 1 até 25 e imprima o resultado.
let array = 0;
for(let index = 1; index <= 25; index += 1){
    array = index;
    console.log(array);
    
}

//exercicio 9:
//utilizando o array criado no exercicio anterior imprima o resultado da divisão de cada um do elementos por 2.
let array = 0;
let divisao = 2;
let resultado = 0;
for(let index = 1; index <= 25; index += 1){
    array = index;
    resultado = array / divisao;
    console.log(resultado);
    
}

//exercicio bonus: ordenando array
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
array.sort(function(a,b){
    if(a < b) return 1;
    if(a > b) return -1;
    return 0;
})
console.log(array);

//parte 2

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
array.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
})
console.log(array);

//parte 3

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array2;
for(let index = 1; index <= array.length; index += 1){
    for(let indexx = 0; indexx < index; indexx += 1){
        let multiplicacao = array[index] * array[indexx];
        array2 = multiplicacao;
        
    }
    console.log(array2);
}