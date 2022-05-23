// Agora veremos uma variação do laço for, que nos garante facilidade ao lidar com objetos.
//pedidos de pizzas:
let pizzas = {
    sabor: 'calabresa',
    preco: 82.60,
    bordaChocolate: true
};
//vamos criar um laço for/in para trabalhar em cima do nosso objeto PIZZAS:
// estrutura do for/in:
for(let chave in pizzas){
//chave porque percorrera todas as chaves do objeto pizzas.
 console.log(chave); 
 //mostras as 3 propriedades/chaves
 //também conseguimos com o for/in passar por todas as propriedades pegando somente o valor delas.
 console.log(pizzas[chave]); 
}

//podemos tambem trabalhar com for in dentro de array:
let pizzasDoces = ['chocolarte', 'café', 'CU'];
for(let key in pizzasDoces){
    console.log(key, pizzasDoces[key]);
   //mostra o indice do array primeiro, logo em seguida os seus valores.
}

//Depois de conhecer o laço for/in, o código que mostra as marcas de carros presentes em um Array é:
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

//Um outro exemplo é a iteração nas chaves de um objeto:
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }




    //FOR/OF


//O for/of tem uma aplicação bastante parecida com o que vimos agora no for/in, mas com uma diferença crucial.
//Como dito no vídeo, o for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice. Por exemplo, se tivermos um array com três strings dentro:
let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;

//Se percorrermos um objeto, também teremos o mesmo resultado. O for/in irá percorrer a propriedade declarada, e não o seu valor em si.

  //Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in. Vejamos o exemplo:
  let comida = ['hamburguer', 'bife', 'acarajé'];
for (let value of comida) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

//exercicios:
//exercicio 1:Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for(let chave in names){
      console.log('ola! ' + names[chave]);
  }

  //exercicio 2:Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
  let carros = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for(let keys in carros){
      console.log(keys, carros[keys]);
  }

   //exemplo for/in
   const object = { a: 1, b: 2, c: 3 };

   for (const property in object) {
     console.log(property + ' = ' + object[property]);
   }

   