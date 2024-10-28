const you = document.getElementById('you');
const ai = document.getElementById('ai');
const itog = document.getElementById('itog');

let countYou = 0;
let countAi = 0;


function gamePlay(userChoice){
    const choices = ['Камень','Ножницы','Бумага']
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if(userChoice === computerChoice ){
        itog.textContent = 'Tie'; 
    } else if(userChoice === 'Камень' && computerChoice === 'Ножницы' || userChoice === 'Ножницы' && computerChoice === 'Бумага' || userChoice === 'Бумага' && computerChoice === 'Камень'){
        itog.textContent = 'You won';
        countYou++;
        you.textContent = 'Your score: ' + countYou;
    }else{
        itog.textContent = 'Computer is won';
        countAi++;
        ai.textContent = 'Computer score: ' + countAi;
    }
}