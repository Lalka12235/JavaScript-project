const generate = document.getElementById('generate');
const guess = document.getElementById('text');
const examination = document.getElementById('examination');
const div = document.getElementById('base');
const message = document.getElementById('message');

let randomValue;
let guessTry = 10;



function generateNumber(){
    guessTry = 10;
    guess.value = ''
    randomValue = Math.floor(Math.random() * 100) + 1;
    p.textContent = 'Number is generate';
    message.textContent = `Your try ${guessTry}`;
    console.log(randomValue);

    
}

function guessTheNumber(){
    const guessedNumber = parseInt(guess.value);
    if(guessedNumber === randomValue){
        message.textContent = 'You won'
        message.style.color = 'green'
        examination.style.backgroundColor = 'green';
    } else{
        guessTry--;
        message.textContent = `Your try ${guessTry}`;
        message.textContent = 'Try again'
        message.textContent = `You have ${guessTry} attempts left.`;
        examination.style.backgroundColor = 'red';
        if(guessTry === 0){
            examination.disabled = true;
        }
    }
}

generate.addEventListener('click',generateNumber);
examination.addEventListener('click',guessTheNumber);