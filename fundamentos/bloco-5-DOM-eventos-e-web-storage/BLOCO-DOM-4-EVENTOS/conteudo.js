// EVENTOS NO JAVA SCRIPT
//PIarte  - O que é um escutador de eventos?
//Ele tem esse nome porque é um código colocado em um elemento que tem uma única razão de ser: ficar ali esperando que um evento específico ocorra (um click, por exemplo) e, quando isso acontecer, executar uma função pré-determinada pelo programador.

//Manipulação de eventos disparados pelo DOM - DOM on-event handlers

//Segundo exemplo: Manipulação de eventos declarados na linha do HTML - Inline event handlers.

//Você viu que pode usar o onload, que é um event listener que vem no objeto window do browser, e viu também que pode utilizar o atributo onclick para esperar por eventos de clique em um elemento.

//No entanto, utilizar atributos HTML de escutadores de eventos não é uma prática recomendada, por alguns motivos. Um deles é que o ideal é não misturar o seu código HTML com o código JavaScript. Outro motivo é que, se você precisar adicionar events listeners em muitos elementos, ou mesmo precisar mudar qual função é adicionada como resposta a esses eventos nesses elementos depois, fica complicado ter de adicionar manualmente a propriedade em cada um dos elementos. Por essas razões, utilizar eventos inline (como são chamados eventos adicionados diretamente no HTML) é considerada uma má prática.

//Mas então, como utilizar um evento de clique em um elemento? Bem, é para esse e outros que utilizamos o addEventListener, que você verá a seguir. 😉



//Parte II - Conheça o addEventListener
//O código mais comum para criar um escutador de eventos em um elemento é através de uma função nativa do JavaScript, chamada addEventListener. Funções nativas são funções que já existem prontas dentro da linguagem e, como toda função, podem receber parâmetros.
//No seu uso mais comum, addEventListener recebe dois parâmetros:
//O evento que estamos esperando escutar: Exemplos: click, change, mouseover etc;
//A função (criada por você) que será executada quando o evento acontecer.
//A seguir, você vai aprender a como utilizar essa função:

//addEventListener (tipoEvento, função);
//1- permite adicionar 'escutadores' de forma mais flexível;
//2- codigo javascript somente na parte javascript.

//tipos de eventos:
//click, change, dblclick, scroll, keydown, mouseleave, mouseover.

