let name = 'milton';
let lastName = 'nascimento';
let nickname = 'bituca'
let age = 77;
let bestAlbuns = ['travessia', 'clube da esquina', 'minas'];
//sem o object, as informações estariam meio "soltas", veremos no exemplo abaixo como organizariamos essas informações dentro de um object.

//declaração de objeto:
let singer = {
    name: 'milton', //a entrada é separada por virgula para podermos adicionar mais entradas.
    lastName: 'nascimento',
    nickname: 'bituca',
    age: 77,
    bestAlbuns: ['travessia', 'clube da esquina', 'minas'],
    bornInfo: {
        city: 'rio de janeiro',
        state: 'rio de janeiro',
    }
};
//como que acessamos as propriedades dentro de cada chave ?:
//pode ser dado por 2 formas, a primeira é a notação por ponto '.' por exemplo:
console.log('o cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

//a outra forma de acessar propriedades dentro de objetos é com colchetes '[]'. por exemplo:
console.log('o cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

//criar nova propriedade:
singer['fullName'] = singer.name + ' ' + singer.lastName;
console.table(singer);

//objetos podem ter outros objetos como valores também: exemplo la em cima com o bornInfo:
console.log('o cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state);


//exemplos:
let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
  };
  
   //diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo

// outro exemplo:
  let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4

  //outro exmeplo:
  let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

  //agora se nosso objeto esta dentro de um array ? como acessamos as propriedades do objeto ? veja o exemplo:
  let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey

  //alguns exercicios:
  //exercicio 1: crie um objeto player contendo as variaveis listadas abaixo:
  let nome = 'Marta';
  let ultimoNome = 'Silva';
  let idade = 34;
  let medals = { golden: 2, silver: 3 };

  let player = {
      name: 'marta',
      lastName: 'silva',
      age: 34,
      medals:{
          golden: 2,
          silver:3,
      }
  };
//exercicio 2: acesse as chaves name, last name e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: 'a jogadora marta silva tem 34 anos de idade'.
console.log('a jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

//exercicio 3: Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.table(player);

//exercicio 4:  Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por 6 vezes! Nos anos: ' + player.bestInTheWorld);

//exercicio 5: Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log('A jogadora possui: ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');




