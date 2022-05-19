//Problema de hoje: Dada a posição da rainha e a posição e a posição do oponente, devemos verificar se ela pode ou nao atacar.
//OBS: Não iremos efetivamente movimentar a rainha.

//Posição da rainha
let queenRowPosition = 1;   //Row = Linha
let queenColumnPosition = 8;    //Column = Coluna

//Posição do oponente
let opponentRowPosition = 8;
let opponentColumnPosition = 1;

//Armazenar se o ataque pode ou não acontecer
let canAttack = false;

if(opponentColumnPosition === queenColumnPosition || opponentRowPosition === queenRowPosition) {
    canAttack = true;
    console.log('Ataque em linha reta');
};

//Diagonal superior direita:
for(let indiceSupDir = 0; indiceSupDir < 8; indiceSupDir += 1){
    let currentQuennRow = queenRowPosition + indiceSupDir;
    let currentQueenColumn = queenColumnPosition + indiceSupDir;
    if(currentQuennRow > 8 || currentQueenColumn > 8){
        break;
    }
    if(currentQuennRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
        canAttack = true;
        console.log('Ataque na diagonal superior direita.');
    }
}

//Diagonal inferior esquerda
for(let indiceInfEsquerdo = 1; indiceInfEsquerdo < 8; indiceInfEsquerdo += 1){
    let currentQuennRow = queenRowPosition - indiceInfEsquerdo;
    let currentQueenColumn = queenColumnPosition - indiceInfEsquerdo;
    
    if(currentQuennRow < 1 || currentQueenColumn < 1){
        break;
    }

    if(currentQuennRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
        canAttack = true;
        console.log('Ataque na diagonal inferior esquerda.');
    }
}

//Diagonal superior esquerda
for(let indiceSupEsquerdo = 1; indiceSupEsquerdo < 8; indiceSupEsquerdo += 1){
    let currentQuennRow = queenRowPosition + indiceSupEsquerdo;
    let currentQueenColumn = queenColumnPosition + indiceSupEsquerdo;
    
    if(currentQuennRow > 8 || currentQueenColumn < 1){
        break;
    }

    if(currentQuennRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
        canAttack = true;
        console.log('Ataque na diagonal superior esquerda.');
    }
}

//Diagonal inferior direita
for(let indiceInfDireito = 1; indiceInfDireito < 8; indiceInfDireito += 1){
    let currentQuennRow = queenRowPosition + indiceInfDireito;
    let currentQueenColumn = queenColumnPosition - indiceInfDireito;
    
    if(currentQuennRow < 1 || currentQueenColumn > 8){
        break;
    }

    if(currentQuennRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
        canAttack = true;
        console.log('Ataque na diagonal inferior direita.');
    }
}