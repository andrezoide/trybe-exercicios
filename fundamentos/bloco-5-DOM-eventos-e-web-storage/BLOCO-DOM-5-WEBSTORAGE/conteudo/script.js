const myObj = {
    name: 'Link',
    age: 20,
  };
  
  // Precisamos transformar este objeto em uma string. Para isso, utilizamos a função `JSON.stringify()`.
  
  localStorage.setItem('myDtaa', JSON.stringify(myObj));
  
  // Como dito anteriormente, o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, precisamos passar como primeiro parâmetro do método `setItem()` o nome da chave, passamos `myData` e como segundo parâmetro, a função `JSON.stringify()` com o objeto-valor que queremos armazenar na chave `myData`. Feito isso, teremos salvo no `localStorage` um objeto com a chave `myData` e o valor `{ "name": "Link", "age": 20 }`.
  
  // Agora, precisamos recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string. Para isso, utilizaremos a função `JSON.parse()`.
  
  const recoveredObject = JSON.parse(localStorage.getItem('myData'));
  
  // Utilizamos a função `JSON.parse()` para transformar a string que está armazenada no `localStorage` de volta para seu formato original, um objeto.

  console.log(recoveredObject); // { name: 'Link', age: 20 }


  

  let organization = {
    name: 'trybe',
    since: 2019,
  };
  
  // A variável 'storage' pode ser localStorage ou sessionStorage
  let storage = localStorage;
  
  storage.setItem('trybe', JSON.stringify(organization));
  let org = JSON.parse(storage.getItem('trybe'));
  console.log(org); // { name: 'trybe', since: 2019 }
  
  let classes = ['2019/set', '2019/oct'];
  storage.setItem('classes', JSON.stringify(classes));
  let cls = JSON.parse(storage.getItem('classes'));
  console.log(cls); // ['2019/set', '2019/oct']

  const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
};