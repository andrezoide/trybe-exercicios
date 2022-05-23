// levanto da cama, faço café, tomo um banho. lavo meu cabelo com shampoo e condicionador e meu corpor com sabonete. desiligo o chuveiro me seco com a toalaha, saio do banheiro, abro o guardaroupa e escolho alguma roupa.
// me visto, passo um perfume, coloco o tenis e verifico se os gatos estao com raçção, e limpo a areia deles. verificio se peguei a carteira e se nao estou esquecendo de nada e então saio de casa com o celular na mao pedindo um uber para o enderçeo da festa.
//exemplo de codigo:
let fruits = [3,4,10,1,12];
let sum = 0;
for(let index = 0; index < fruits.length; index += 1){
    sum += fruits[index];
   
}
if(sum > 15){
    console.log(sum);
}
else{
    console.log('valor menor que 16');
}

//exercicios logica de programação:
//exercicio 1: retornar fatorial de 10

let number = 10;
let result = number;

for(let index = 1; index <= number; index += 1){
    result *= index;
    
}
console.log(result);

//exercicio 2: agora desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra banana, seria para "ananab". utilize a string abaixo como exemplo depois troque por outras para verificar se seu algoritimo esta funcionando corretamente.

let word = 'cuzao verde';
let invertedWord = word.split('').reverse().join('');
             //split separa os caracteres.
      //reverse que inverte o array criado pelo split  
      //por fim usamos join, para juntar novamente
      //o array em uma string e entregar ela para nós de forma inversa.
console.log(invertedWord);

//exercicio 3: considere o array de strings abaixo:
//escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. considere o numero de caracteres de cada palavra:

let array = ['java', 'javascript', 'python', 'html', 'css'];
let higherWord = '';
for (word of array){
    if (word.trim().length > higherWord.length) {
        higherWord = word.trim();
      }
}
console.log(higherWord);

//exercicio 4: um numero primo é aquele divisivel apenas por 1 e por ele mesmo. sabendo disso, escreva um algoritmo que retorne o maior numero primo entre 0 e 50

let numbers = [0];
let numberPrimo = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47];
let resultado;
let divisao = numbers / 1

for(let indexx = 0; indexx < numberPrimo.length; indexx += 1){
    resultado = numberPrimo[indexx];
    
}

for(let index = 0; index <= 50; index += 1){
    numbers = index;

    if(divisao == numbers){
        let resultadoDosPrimos = numbers.length / resultado.length;
        console.log(resultadoDosPrimos);
    }

    
}
