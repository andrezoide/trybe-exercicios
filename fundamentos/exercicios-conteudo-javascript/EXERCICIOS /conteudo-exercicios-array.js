//array é declarado desse jeito:
// let pizzas = []; assim colocamos varios valores dentro de só uma variavel ARRAY ao invés de criar varias variaveis para cada sabor de pizza.

let pizzas = ['frango', 'calabre','catupiru', 'queirjo'];
                //0         1         2          3       e assim por
//cada valor/sabor dentro do array é um indice/chave e o indice sempre começa do 0, sendo assim, frango é o indidce 0, calabresa é o indice 1 e assim por diante.

// para adicionarmos mais sabores de pizzas/valores dentro do array,
// pizzas[5] = 'peito de peru';
// pizzas: que é nosso variavel array e [5]: indica o indice que quero adicionar um novo sabor de pizza, nesse caso o 5 é o ultimo lugar no array.

pizzas[5] = 'peito de peru';

//caso fizermos o mesmo passo acima de adicionar um novo valor no array e colocarmos um indice que ja existe, ou seja, que ja tem um valor naquele indice, o valor anterior é sobreescrevido pelo novo valor que voce colocar entao: pizzas[3] = 'ferro';   o novo valor ferro, rouba o lugar do queijo.
    //3 no array seria o valor:queijo
pizzas[4] = 'cu';
pizzas[3] = 'ferro';

//podemos fazer essa mesma coisa feita acima de inserir um novo valor dentro array na ultima posição com o .push, entao utilizamos o pizzas.push('sabor zé'); isso faz que o valor 'sabor zé' sera atribuido na ultima posição do array junto com o restante dos valores ja atribuidos antes.
pizzas.push('sabor zé');
//podemos também adicionar um valor ao inicio do array com o: .unshift , ao inves do ultimo que é oque o .push faz.
pizzas.unshift('sabor dedo amassado');

//outra informaçao que podemos precisar é saber quantas posições/elementos temos dentro do array, com o .length: pizzas.length

console.log(pizzas.length); // mostra todos os sabores/valores dentro do array.     mostrara 7. porque temos 7 elementos dentro do array. LENGTH É DIFERENTE DE INDICE.

//podemos também organizar o array em ordem alfabetica/numerica usando o     .sort()

 console.log(pizzas.sort());

//até agora estamos mostrando todos os valores dentro do array, podemos fazer com que retorne para gente somente 1 valor especifico do array, com console.log(pizzas[1]); nesse caso mostrara o catupiru, porque é o indice dele dentro do array
console.log(pizzas[1]);
//para mostrasmos todos os valores individualmente teriamos que criar varios console.log, dessa forma:
console.log(pizzas[0]);
console.log(pizzas[1]);
console.log(pizzas[2]);
console.log(pizzas[3]);
//mas teriamos que criar varios console.log, pra que isso nao seja necessario podemos criar um laço de repetição for, dessa forma:
for(index = 0; index < pizzas.length; index += 1){
  //denominamos o contador=0 porque ele vai percorrer todo nosso array 'pizzas'. logo depois denominamos sua condição de parada que é quando o index for menor que o comprimento do nosso array 'pizzas.length'. e por ultimo denominamos de quanto em quanto vamos percorrer esse array.
    console.log(pizzas[index]);
    
}

//exemplo para mostrar primeiro valor e ultimo de um array.
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
   //array

let searchForFirstTask = tasksList[0];
                        //indicando primeiro indice do array:'tomar café'.
console.log(searchForFirstTask);
// sera impresso: Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
                        //indicando o ultimo indice com -1: 'brincar...'
console.log(searchForLastTask);
// sera impresso: Brincar com o cachorro

//Como podemos observar, é possível acessar os arrays pelo seu índice. O fato curioso é que a primeira posição do array é representada pelo número 0. Desse modo, para acessarmos o último elemento da estrutura, devemos pegar a quantidade de seus elementos utilizando o .length e subtrair 1.


//OBVIO que alem de adicionar podemos remover um valor de dentro do array com o: .pop()
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);
// [ 'Tomar café', 'Reunião' ]

//O método .pop() nos permite remover o último item do array. Agora, se precisarmos remover o primeiro item da lista, podemos usar o .shift(). Faça em seu console e veja o resultado.

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.shift();  // remove o primeiro valor.
console.log(tasksList);
// [ 'Tomar café', 'Reunião' ]

//Outra importante ferramenta é o indexOf(), usado para procurar o índice de um item no Array. Veja o exemplo:
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);
// 1

//EXERCICIOS DO CONTEUDO ARRAY.
//exercicio 1: obtenho o valor 'serviços' do array menu:
let menu = ['Home', 'serviços', 'portfolio', 'links'];
let menuServices = menu[1];

console.log(menuServices);

//exercicio 2: procure o indice do valor 'portfolio' do array menu.
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//exercicio 3: adicione o valor 'contato' no final do array menu:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);
