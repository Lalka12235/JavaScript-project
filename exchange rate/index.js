const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
const input = document.getElementById('input');
const button = document.getElementById('button');
const result = document.getElementById('result'); 
const nameRate = document.getElementById('name');
const rate = document.querySelector('.rate');

async function getExchange() {
    if (input.value) {
        const response = await fetch(url);
        const data = await response.json();

        const currencyCode = input.value.toUpperCase();
        if (data.Valute[currencyCode]) {
            const exchangeRate = data.Valute[currencyCode].Value.toFixed(2); 
            result.textContent = exchangeRate; 
            nameRate.textContent = data.Valute[currencyCode].Name;
            rate.style.opacity = 1;
        } else {
            result.textContent = 'Валюта не найдена';
            nameRate.textContent = ''
        }
    }else{
        result.textContent = 'Введите валюту'
    }
}

button.addEventListener('click', getExchange); 

