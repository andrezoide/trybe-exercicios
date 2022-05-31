document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'red'
document.querySelector('#primeiroFilhoDoFilho').innerText = 'primeiro filho'

let secaoPai = document.querySelector('#pai');
let irmaoElemento = document.createElement('section');
secaoPai.appendChild(irmaoElemento).textContent = 'irmao do elemetno'
irmaoElemento.setAttribute('id', 'irmao-elemento-onde-voce-esta');

let secaoElemento = document.querySelector('#elementoOndeVoceEsta');
let filhoElemento = document.createElement('section');
secaoElemento.appendChild(filhoElemento).textContent = 'filho do elemento';
filhoElemento.setAttribute('id', 'filho-elemento-onde-voce-esta');

let secaoFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoDoFilho = document.createElement('section');
secaoFilhoDoFilho.appendChild(filhoDoFilho).textContent = 'filho do primeiro filho do filho';
secaoFilhoDoFilho.setAttribute('id', 'filho-do-filho-elemento-onde-voce-esta');

let el = document.getElementById('segundoEUltimoFilhoDoFilho');
el.parentNode.removeChild( el );

let ul = document.getElementById('filho-elemento-onde-voce-esta');
ul.parentNode.removeChild( ul );

let ol = document.getElementById('terceiroFilho');
ol.parentNode.removeChild( ol );

let ll = document.getElementById('quartoEUltimoFilho');
ll.parentNode.removeChild( ll );

let gl = document.getElementById('irmao-elemento-onde-voce-esta');
gl.parentNode.removeChild( gl );