//como utilizar o for in em objetos e arrays:
let pizzas = {
    sabor: 'pau',
    preco: 39.90,
    bordaCatupiry: true,
};

//estrutura for in: a variavel de dentro do for mostra as propriedade do objeto pizzas a cima
for(let key in pizzas) {
    console.log(key); //vai mostrar as chaves detnro do objeto pizzas
    console.log(pizzas) //vai mostrar 3x(mesmo numero de chaves dentro dele) o objeto completo
    console.log(pizzas.preco); //vai mostrar somente o preço 3x NOTAÇÃO POR PONTO object.property
    console.log(pizzas['bordaCatupiry']) // vai mostra do mesmo jeito só que usamos o colchetes
    console.log(pizzas[key]); //passa por cada propriedade e traz cada valor
}

//dentro de arrays:
let pizzasDoces = ['chocolate', 'banana', 'morango'];

for(let key in pizzasDoces){
    console.log(key); //mostra as 3 chaves em posição de indice(0, 1, 2)
    console.log(pizzasDoces); //mostra para nos 3x os valores
    console.log(pizzasDoces[key]); //mostra 1x por vez os valores de dentro de pizzasDoces
    console.log(key, pizzasDoces[key]); //mostra o indice de cada valor e o valor também
}
//Podemos adicionar uma nova propriedade utilizando .
pizzasDoces.saboresFavoritos ='cebola';
