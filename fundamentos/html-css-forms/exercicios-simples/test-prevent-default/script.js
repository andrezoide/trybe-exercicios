const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


function test(e){
    e.preventDefault();
}
HREF_LINK.addEventListener('click', test);


function test(e){
    e.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', test);



function keypress(e){
e.preventDefault()
}
INPUT_TEXT.addEventListener('keypress', keypress);