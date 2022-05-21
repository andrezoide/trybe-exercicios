//exercicio 1 area do triangulo
 const base = 5;
let height = 8;

const area = base * height;
console.log(area)

const perimeter = base + height + height;
console.log(perimeter)

//exercicio 2 if / else
const notaPessoa = 80;
if(notaPessoa >= 80){
    console.log('voce foi aprovado');}

else if(notaPessoa < 80 && notaPessoa >= 60){
    console.log('voce esta na nossa lista de espera');
} 
else if(notaPessoa < 60){
    console.log('reprovado');
}

//exercicio 3 operadores logicos
const currentHour = 5;
let message = '';

if(currentHour >= 22){
    message = 'nao deveriamos comer nada hoje';
} 
else if(currentHour >= 18 && currentHour < 22){
    message = 'rango da noite vamos jantar';
}
else if(currentHour >= 14 && currentHour < 18){
    message = 'vamos fazer um bolo pro cafe da tarde';
}
else if(currentHour >= 11 && currentHour < 14){
    message = 'hora do almoço';
}
else if(currentHour >= 4 && currentHour < 11){
    message = 'hmm cheirinho de café';
};
console.log(message)

//exercicio switch/case
let state = 'aprovada';
switch(state){
    case 'aprovada':
        console.log('parabens');
        break;

    case 'reprovada':
        console.log('reprovada inferlizmente');
        break;
    
    default:
        console.log('lista de espera');
};



//exercicios sobre o bloco todo:
//exercicio 1;
const a = 12;
const b = 234;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;
console.log(soma, subtracao, multiplicacao, divisao, modulo);

//exercicio 2 programa que retorne o maior de dois numeros;
const valor1 = 5613;
const valor2 = 782727;
let result;
if(valor1 < valor2){
    result = valor2;
}
else{
    result = valor1;
};
console.log(result)

//exercicio 3 programa que retorne o maior de 3 numeros
const value1 = 150;
const value2 = 250;
const value3 = 350;
let result2;
if(value1 > value2 && value3 < value1){
    result2 = value1;
}
else if(value2 > value1 && value3 < value2){
    result2 = value2;
}
else{
    result2 = value3;
}
console.log(result2)

//exercicio 4 programa que retorna positivo se valor for positivo e negativo caso seja negativo;
const defined = 45454545;
let definedvalue;
if(defined >= 0){
    definedvalue = 'positivo';
}
else if(defined < 0){
    definedvalue = 'negativo';
}
else {
    definedvalue = 'zero'
}
console.log(definedvalue)

//exercicio 5 programa que define 3 constantes com valores dos tres angulos internos de um triangulo. Retorne true se os angulos representarem os angulos de um triangulo e false caso contrario. Se algum angulo for invalido o programa deve retornar uma mensagem de erro.
const area1 = 60;
const area2 = 60;
const area3 = 60;
let arearesult;
if(area1 + area2 + area3 === 180){
    arearesult = true;
}
else{
    arearesult = false;
};
console.log(arearesult);

//exercicio 6 escreva um programa que receba o nome da peça de xadrez e retorne os movimentos que ela faz.
const bishop = 'diagonal';
const queen = 'todos lados e diagoanais';
const king = 'somente em volta dele';

let piecesResult = 'king';

if(piecesResult === 'bishop'){
    piecesResult = bishop;
    console.log(piecesResult);
}
else if(piecesResult === 'queen'){
    piecesResult = queen;
    console.log(piecesResult);
}
else if(piecesResult === 'nossa voking'){
    piecesResult = king;
    console.log(piecesResult);
}
else{
    console.log('essa peça nao existe')
}

//exercicio 7 escrever um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. siga essas regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let A; //81
let B; //64
let C; //49
let D; //36
let E; //25
let F; //16
let notaDada = 90;
let porcentagem = 102;
const percece = 100;
let percentValue;
let totalValue;
let messageError = 'erro';

if(porcentagem >= 90){
    percentValue = porcentagem / percece;
    totalValue = percentValue * notaDada;
    A = totalValue;
    console.log(A);

}
else if(porcentagem >= 80){
    percentValue = porcentagem / percece;
    totalValue = percentValue * notaDada;
    B = totalValue;
    console.log(B);
}
else if(porcentagem >= 70){
    percentValue = porcentagem / percece;
    totalValue = percentValue * notaDada;
    C = totalValue;
    console.log(C);
}
else if(porcentagem >= 60){
    percentValue = porcentagem / percece;
    totalValue = percentValue * notaDada;
    D = totalValue;
    console.log(D);
}
else if(porcentagem >= 50){
    percentValue = porcentagem / percece;
    totalValue = percentValue * notaDada;
    E = totalValue;
    console.log(E);
}
else if(porcentagem < 50){
    percentValue = porcentagem / percece;
    totalValue = percentValue * notaDada;
    F = totalValue;
    console.log(F);
}
else if(porcentagem < 0 || porcentagem > 100){
    console.log(messageError);
};

//exercicio 8 escreva um programa que defina tres numeros em constates e retorne TRUE se pelo menos uma das tres for par. caso contrario ele retorna FALSE.
//USAR SOMENTE 1 IF
const number1 = 24;
const number2 = 56;
const number3 = 65;
let impOuPar1 = number1 / 2;
let impOuPar2 = number2 / 2;
let impOuPar3 = number3 / 2;
let resultado1 = impOuPar1 % 2;
let resultado2 = impOuPar2 % 2;
let resultado3 = impOuPar3 % 2;

if(resultado1 / 2 == 0 || resultado2 / 2 == 0 || resultado3 / 2 == 0){
    
    console.log(true);
}
else{
    console.log(false);
}

//exercicio 9 escreva unm programa que defina 3 numeros em constantes e retorne true se pelo menos uma deas 3 for impar. caso contrario, ele retorna false.
const number4 = 23;
const number5 = 56;
const number6 = 65;
let impOuPar4 = number4 / 2;
let impOuPar5 = number5 / 2;
let impOuPar6 = number6 / 2;
let resultado4 = impOuPar4 % 2;
let resultado5 = impOuPar5 % 2;
let resultado6 = impOuPar6 % 2;

if(resultado4 / 2 !== 1 || resultado5 / 2 !== 1 || resultado6 / 2 !== 1){
    
    console.log(true);
}
else{
    console.log(false);
}

//exercicio 10 escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valo de venda descontado o custo do proprio produto) a empresa tera ao vender mil desses produtos.
const productCost = 10.800;
const productSellValue = 12.160;
const percente = 100;
const percenteInProduct = 20;
let productImpost = percenteInProduct / percente;
let resultPercentValue = productImpost * productCost;
let finalResult = productSellValue - productCost;
console.log(finalResult);
if(productCost <= 0){
    console.log('error');
};

//exercicio 11 Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
const bruteSalary = 3000.00;
const aliquota1 = 8;
const aliquota2 = 9;
const aliquota3 = 11;
const aliquota4 = 570.88;
const aliquotaIr2 = 7.5;
const aliquotaIr3 = 15;
const aliquotaIr4 = 22.5;
const aliquotaIr5 = 27.5;
const parcela1 = 142.82;
const parcela2 = 354.80;
const parcela3 = 636.13;
const parcela4 = 869.36;

const porcent = 100;

if(bruteSalary <= 1556.94){
    let resultadoValor = aliquota1 / porcent;
    let resultadoValor1 = resultadoValor * bruteSalary;
    resultadoValor1 = bruteSalary - resultadoValor1;
    let salarioLiquido = resultadoValor1;
    

    let resultadoValor2 = aliquotaIr2 / porcent;
    let resultadoValor3 = resultadoValor2 * salarioLiquido;
    let resultadofinale = resultadoValor3 - parcela1;
    let resultadofinale2 = resultadofinale;
    console.log(resultadofinale2);
}

else if(bruteSalary >= 1556.95 && bruteSalary <= 2594.92){
    let resultadoValor = aliquota2 / porcent;
    let resultadoValor1 = resultadoValor * bruteSalary;
    resultadoValor1 = bruteSalary - resultadoValor1;
    let salarioLiquido = resultadoValor1;

    let resultadoValor2 = aliquotaIr3 / porcent;
    let resultadoValor3 = resultadoValor2 * salarioLiquido;
    let resultadofinale = parcela2 - resultadoValor3;
    let resultadofinale2 = resultadofinale;
    console.log(resultadofinale2);
    
}
else if(bruteSalary >= 2594.93 && bruteSalary <= 5189.82){
    let resultadoValor = aliquota3 / porcent;
    let resultadoValor1 = resultadoValor * bruteSalary;
    resultadoValor1 = bruteSalary - resultadoValor1;
    let salarioLiquido = resultadoValor1;

    let resultadoValor2 = aliquotaIr4 / porcent;
    let resultadoValor3 = resultadoValor2 * salarioLiquido;
    let resultadofinale = resultadoValor3 - parcela3;
    let resultadofinale2 = resultadofinale;
    console.log(resultadofinale2);
    
}
else if(bruteSalary > 5189.83){
    let resultadoValor = aliquota4 - bruteSalary;
    let resultadoValor1 = resultadoValor;
    let salarioLiquido = resultadoValor1;

    let resultadoValor2 = aliquotaIr5 / porcent;
    let resultadoValor3 = resultadoValor2 * salarioLiquido;
    let resultadofinale = resultadoValor3 - parcela4;
    let resultadofinale2 = resultadofinale;
    console.log(resultadofinale2);
    
}