const base = document.getElementById('base');
const input = document.getElementById('text');
const buttons = document.querySelectorAll('button');
const history = document.getElementById('history');
const ul = document.getElementById('ul');


function appendToDisplay(value) {
    if (value === 'C') {
        input.value = '';
    } else if (value === 'Ac') {
        input.value = '';
    } else {
        input.value += value;
    }
}

function calculate(){
    try{
        input.value = eval(input.value);
        historyAdd();
    } catch(error){
        input.value = 'Error';
    }
}
function clearEntry() {
    input.value = input.value.slice(0, -1);
}
function historyAdd() {
    const li = document.createElement('li');
    li.textContent = input.value;
    history.appendChild(li);
    localStorage.setItem('history',JSON.stringify(history));
}