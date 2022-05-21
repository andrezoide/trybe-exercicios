
//corpo de um objeto
let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickname: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas']
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
};

//como podemos acessar valores dento do objeto; com o "."
console.log('O cantos ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

//como podemos acessar valores dento do objeto; com o "[]""
console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

//podemos ter dentro de um objeto mais um objeto, por exmeplo, vamos adicionar mais um objeto ao objeto singer: adicionamos o "bornInfo" ao objeto singer.

// também podemos acessar os valores dentro dos objeto criados dentro de outro objeto da mesma forma:
console.log('O cantos ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.' + '.E nasceu na cidade de ' + singer.bornInfo.city + ' no estado de ' + singer.bornInfo.state);

// array composto por objetos:
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

  //podemos especificar o elemento desejado pelo indice. No exemplo abaixo o indice para o primeiro morador é 0 entao ele pega o primeiro morador.
  let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

// aqui com o moradores.length - 1, puxamos o ultimo morador da lista.
let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey