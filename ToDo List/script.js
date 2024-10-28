const button = document.getElementById('btn');
const input = document.getElementById('text');
const ul = document.getElementById('ul');

document.addEventListener('DOMContentLoaded', loadTasks);

function saveTasks() {
    const tasks = [];
    ul.querySelectorAll('li').forEach(li => {
        tasks.push({
            text: li.childNodes[1].textContent, // Используем childNodes для доступа к тексту
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTask(task.text, task.completed));
}

function createTask(inputText, completed = false) {
    const li = document.createElement('li');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = completed;
    checkBox.addEventListener('change', () => {
        li.classList.toggle('completed');
        saveTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        ul.removeChild(li);
        saveTasks();
    });

    li.appendChild(checkBox);
    li.appendChild(document.createTextNode(inputText));
    li.appendChild(deleteBtn);
    if (completed) li.classList.add('completed'); // Если задача завершена, добавляем класс

    ul.appendChild(li);
    input.value = '';
}

button.addEventListener('click', () => {
    const inputText = input.value.trim();
    if (inputText) {
        createTask(inputText); // Вызываем createTask с текстом задачи
        saveTasks();
    } else {
        alert('Please, enter the task');
    }
});
