const input = document.getElementById('input');
const p = document.getElementById('age');

function Calculate() {
    const dateToday = new Date();
    const yearToday = dateToday.getFullYear();
    const monthToday = dateToday.getMonth();
    const dayToday = dateToday.getDate();

    if (input.value) {
        const dateInput = new Date(input.value);
        const inputYear = dateInput.getFullYear();
        const inputMonth = dateInput.getMonth();
        const inputDay = dateInput.getDate();

        let ageYears = yearToday - inputYear;
        let ageMonths = monthToday - inputMonth;
        let ageDays = dayToday - inputDay;
        if (ageYears < 0 || ageMonths < 0 || ageDays < 0) {
            p.textContent = 'Введите корректный возраст';
        } else {
            p.textContent = `Ваш возраст: ${ageYears} лет, ${ageMonths} месяцев, и ${ageDays} дней.`;
        }
    } else {
        p.textContent = 'Ошибка: Введите год рождения.';
    }
}
