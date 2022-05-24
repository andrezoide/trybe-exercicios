//DOM (Document Object Model): estrutura que faz a ponta entre o html e o javascript e que permite interação entre os dois.

//Window: Representa uma janela que contém um elemento DOM, sendo possível acessar o documento que a janela contém através de Window;

//location: Representa a localização do objeto a qual ele está associado, isso é, o documento atual;

//document: Representa qualquer página da web carregada no navegador e serve como um ponto de entrada para o conteúdo na página da web, sendo assim o document contém todos os documentos HTML;

//history: Permite a manipulação do histórico da sessão do navegador, ou seja, as páginas visitadas na guia ou quadro em que a página atual está carregada;

//element: É a classe base mais geral da qual todos os objetos em um Document herdam, isso é, são todas as tags que estão em arquivos HTML e se transformam em elementos da árvore DOM;

//text: Texto que vai entre os elementos, é todo o conteúdo das tags;

//atribute: São todos os atributos que um nó específico possui, como uma class ou id.


//SELETORES DE ELEMENTOS:
//getElementById                           innerText/
//                           style:retorna todos estilos usados na tag
console.log(document.getElementById('teste').innerText = 'Aprendizados da aula de hoje.')
                                        //usado para acessar conteúdo.



//há mais formas de acessar o conteudo dos elemtnos do seu html. ai vao algumas outras!
//Você pode acessar os elementos filtrando pelo nome da classe:
//getElementsByClassName: usamos para selecionar todos elementos de uma classe:        
//document.getElementsByClassName('nomes')[0]
                                //aqui indicamos indice porque nomes é uma lista com varios nomes declarados com a classe 'nomes' entao precisamos indicar o indice para pegar o nome que quisermos, o [0] seria o primeiro nome.
//podemos criar um laço de repetição for para percorrer todos os elemtentos dentro da classe.


//getElementsByTagName: tem uma caracteristica muito importante que é: os elementos que vem pelo TagName, são retornado em formato de lista de elementos e nao só 1 elemento, que é o caso do ById.


//querySelector: ela tem uma especificidade, ela retorna apenas 1 elemento e o primeiro elemento que for encontrado a partir da chamada dessa função. trabalha com seletores CSS. também é mais flexvel que os getElementBy...

//também temos que especificar bem na hora de selecionar, do mesmo jeito que quando vamos implementar no CSS uma classe com o '.' ou a ID com o '#'. Quando for TAG, nao precisamos especificar com o '.' ou o '#'.

//para selecionarmos alguma TAG ou elemento sem ser o primeiro que ele encontrar, fazemos também da mesma forma que o CSS:
//document.querySelector('.nomes p');


//existe o querySelectorAll, que tem comportamento semelhante ao querySelector. A diferença é simples: ela retorna uma array com todos os elementos que "casem" com a sua seleção, ao invés de retornar apenas o primeiro deles. Veja o vídeo a seguir para entender melhor essa função.
