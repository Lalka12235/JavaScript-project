const text = document.getElementById('text');
const range = document.getElementById('range');
const options = document.querySelectorAll('.option input');
const button = document.getElementById('button');

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!$%&|[](){}:;.,*+-#@<>~"
}
function generatePassword(){
    let password = '',
        randomPassword = '',
        excludeDuplicate = false, 
        passLength = range.value;

    options.forEach(option =>{
        if(option.checked){
            password += characters[option.id];
        }
    });

    const exc = document.getElementById('exc-duplicate');
    if(exc.checked){
        excludeDuplicate = true; 
    };

    if (password.length === 0) {
        text.value = "Выберите хотя бы один тип символов!";
        return;
    }

    for(let i = 0; i < passLength; i++){
        let randomChar = password[Math.floor(Math.random() * password.length)]; 
        if (excludeDuplicate) { 
            if(!randomPassword.includes(randomChar)){ 
                randomPassword += randomChar;
            } else {
                i--;
            }
        } else {
            randomPassword += randomChar;
        }
    }
    text.value = randomPassword;
}
button.addEventListener('click',generatePassword);
