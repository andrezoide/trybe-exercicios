//funções sao blocos de codigo que encapsulam instruções que executam uma tarefa especifica
//elas visam modularizar nossos programas, ou seja, dividir um programa em partes menores, em que, essas partes menores tenham uma unica responsabilidade.

//como é uma função ?
let statusCarro = 'desligado';
let aceleracao = 0;
let rotacaoDoVoltante = 0;
let statusFarol = 'desligado';

function ligarDesligarFarol(){
    if(statusFarol === 'desligado'){
        statusFarol = 'ligado'
    } else{
        statusFarol = 'desligado';
    }
    return statusFarol;
}

function ligarDesligar(){
    if(statusCarro === 'desligado'){
        statusCarro = 'ligado';
    }else {
        statusCarro = 'desligado';
    }
    return statusCarro;
}

function acelerar(incremento){
    aceleracao = aceleracao + incremento;
    return 'acelerando a ' + aceleracao + 'm/s';
}

function frear(decremento){
    aceleracao = aceleracao - decremento;
    return 'desacelerando para ' + aceleracao + 'm/s';
}

function girarVolante(anguloRotacao){
    rotacaoDoVoltante = anguloRotacao;
    return rotacaoDoVoltante + '¹';
}



//como declarar uma função ?:
function nomeDaFuncao(parametro1, parametro2){
                //nos parenteses recebemos as entradas de valores de fora
                //se precisarmos utilizamos com parametros: function nomeDaFuncao(parametro1, parametro2){}
                //os parametros serao convertidos em variaveis dentro da nossa função:
                console.log(parametro1);
                console.log(parametro2);
                //outra particularidade de uma função é que podemos fazer ela retornar um valor com return:
                return parametro1 + parametro2;
}



//Por exemplo, se a função tiver o objetivo de cumprimentar a pessoa que está executando o programa pelo nome, tal como: "Bom dia, João!", ela vai precisar receber o nome da pessoa como parâmetro. Porém, se ela foi desenvolvida apenas para dar "Bom dia!", um parâmetro não é necessário.
//Veja o exemplo abaixo:
// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

//outros exemplos de funões sem parametros:
function bomDia() {
    return 'Bom dia!';
  }
  
  console.log(bomDia()); // Bom dia!

  //outro:
  let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado



//E agora exemplos de funções usando parâmetros:
function soma(a, b) {
    return a + b;
  }
  
  console.log(soma(656, 456789)); // 457445


  //outro exemplo:
  function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
      return segundoNum + ' é maior que ' + primeiroNum;
    } else {
      return 'Os números são iguais';
    }
  }
  
  console.log(maiorNum(10, 20)); // 20 é maior que 10
  console.log(maiorNum(2, -5)); // 2 é maior que -5
  console.log(maiorNum(1, 1)); // Os números são iguais

 
  //EXERCICIOS DO BLOCO FUNÇOE/OBJETOS E FOR/IN, FOR/OF:
  //EXERCICIO IMPRIMA NO CONSOLE UMA MENSAGEM DE BOAS VINDAS PARA A PERSONAGEM ACIMA, INCLUINDO SEU NOME. VALOR ESPERADO NO CONSOLE: BEM-VINDA, MARGARIDA.
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Bem-vinda, ' + info.personagem);
  
  //EXERCICIO 2 INSIRA NO OBJETO UMA NOVA PROPRIEDADE COM O NOME DE CHAVE 'RECORRENTE' E O VALOR 'SIM' E, EM SEGUIDA, IMPRIMA O OBJETO NO CONSOLE. VALOR ESPERADO NO CONSOLE:
  //{
    //personagem: 'Margarida',
    //origem: 'Pato Donald',
    //nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    //recorrente: 'Sim'
  //}
info['recorrente'] = 'sim';
console.log(info)

//EXERCICIO 3: FAÇA UM FOR/IN QUE MOSTRE TODAS AS CHAVES DO OBJETO. VALOR ESPERADO NO CONSOLE:
//personagem
//origem
//nota
//recorrente
for(let key in info){
  console.log(key);
  console.log('-');
}

//EXERCICIO 4: FAÇA UM NOVO FOR/IN, MAS AGORA MOSTRE TODOS OS VALORES DAS CHAVES DO OBJETO. VALOR ESPERADO NO CONSOLE:
//Margarida
//Pato Donald
//Namorada do personagem principal nos quadrinhos do Pato Donald
//Sim
for(let key in info){
  console.log(info[key]);
  console.log('*');
}

//EXERCICIO 5:Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
//Margarida e Tio Patinhas
//Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
//Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
//Ambos recorrentes // Atenção para essa última linha!

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};
console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
if(info.recorrente === info2.recorrente){
  console.log('Ambos recorrentes')
}

//EXERCICIO 6 FUGUETE:Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ]
};
let nameBook = leitor.livrosFavoritos[0];
console.log('O livro de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + '"' + nameBook['titulo'] + '"');

leitor.livrosFavoritos['newBook'] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
};
console.log(leitor);

//EXERCICIO 8 : Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
console.log(leitor.nome + ' tem 2 livros favoritos');

//EXERCICIOS PARTE 2: 
//EXERCICIO 1:Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function checkePalindromo(palavraNormal,paralavraPalindromo){
  if(palavraNormal.split('').join() === paralavraPalindromo.split('').reverse().join()){
    return true;
  }
  else{
    return false;
  }
}console.log(checkePalindromo('tenet', 'tenet'));

//exercicio 2:Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let array = [2, 3, 6, 7, 10, 1].split('');


  for(let index = 0; index < array.length; index += 1){
    
  }
