const a = 8;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

-----------------------------------------

const x = 10;
const y = 5;

if(x >= y){
    console.log(x);
} 


-----------------------------------------

const pedra = 10;
const papel = 500;
const tesoura = 605;

if(pedra >= papel && pedra >= tesoura){
    console.log(pedra);
}
else if(papel >= pedra && papel >= tesoura){
    console.log(papel);
}
else if(tesoura >= pedra && tesoura >= papel){
    console.log(tesoura);
}

-----------------------------------------

const cerelepe = 'negativo';

switch(cerelepe){
    case 'positivo':
    console.log('positive');
    break;

    case 'negativo':
    console.log('negative');
    break;

    default:
        console.log('zero');
}

-----------------------------------------

const v = 60;
const n = 60;
const z = 60;
let triangulo = v + n + z;

if(triangulo == 180){
    console.log(true);
}
else if(triangulo != 180){
    console.log(false);
}
else if(v != v || n != n || z != z) {
    console.log('mensagem de erro');
}

-----------------------------------------

