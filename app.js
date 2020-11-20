const form = document.getElementById('form');
const date = new Date().getFullYear();

form.addEventListener('submit', calculateAge);

function calculateAge(e) {

    const dateField = document.getElementById('date-field');
    const userDate = dateField.value;

    const ageField = document.getElementById('age-field');
    ageField.value = date - userDate;

    e.preventDefault();
}