function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const ul = document.querySelector('#days');

const containerButtons = document.querySelector('.buttons-container');

for(let index = 0; index < dezDaysList.length; index += 1){
    let day = dezDaysList[index];

    const liDays = document.createElement('li');
    liDays.innerText = day;
    liDays.className = 'day';
    ul.appendChild(liDays);

    if(liDays.textContent == 24){
        liDays.className = 'day holiday'
    }
    else if(liDays.textContent == 25){
        liDays.className = 'day holiday friday'
    }
    else if(liDays.textContent == 31){
        liDays.className = 'day holiday'
    }
    else if(liDays.textContent == 4){
        liDays.className = 'day friday'
    }
    else if(liDays.textContent == 11){
        liDays.className = 'day friday'
    }
    else if(liDays.textContent == 18){
        liDays.className = 'day friday'
    }
}

    let feriados = 'Feriados';
    let botao = document.createElement('button');
    botao.innerText = feriados;
    botao.setAttribute('id', 'btn-holiday');
    containerButtons.appendChild(botao);

    let diasHolidays = document.querySelectorAll('.holiday');
    for(index = 0; index < diasHolidays.length; index += 1){
        let thisDays = diasHolidays[index];
        function clickBotao(){
            thisDays.style.backgroundColor = 'rgb(144,238,144)';
        }
        botao.addEventListener('click', clickBotao)
    
        function desclickBotao(){
            thisDays.style.backgroundColor = 'rgb(238,238,238)'
        }
        botao.addEventListener('dblclick', desclickBotao)
    }

    