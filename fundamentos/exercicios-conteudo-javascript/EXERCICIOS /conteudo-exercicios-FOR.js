//for é uma estrutura de repetição.
let numero = 783;
for(let contador = 1; contador <= 9; contador += 1){
    console.log('* *');
    console.log(' ');
    console.log('* *');
    console.log(numero * contador);
                    //10
                    //20
                    //30
                    //40
                    //50
                    //60
                    //70
                    //80
                    //90
}
//outro exemplo: precisamos escrever um codigo que de boas vindas a cada uma das pessoas dentro array.
let listaDeNomes = ['creverson', 'paxeco', 'paolo'];
for(index = 0; index < listaDeNomes.length; index += 1){
    let mensagem = 'bom dia, ' + listaDeNomes[index];
    console.log(mensagem);
}

//EXERCICIOS SOBRE FOR:
//exercicio 1: utilize o for para imprimir os elementos da lista groceryList com o console.log();
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let index = 0; index < groceryList.length; index += 1){
    console.log('cu ' + groceryList[index]);
}
