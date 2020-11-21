const form = document.getElementById('form');
const date = new Date().getFullYear();
const dateField = document.getElementById('date-field');
const ageField = document.getElementById('age-field');

form.addEventListener('submit', function (e) {
    // SHOW LOADER
    document.querySelector('.loader').style.display = 'block';

    // HIDE THE AGE RESULT
    document.querySelector('.age-container').style.display = 'none';

    // TIME OUT
    setTimeout(calculateAge, 2000);

    e.preventDefault();
});

function calculateAge(e) {
    if (dateField.value !== '') {
        const userDate = dateField.value;
        ageField.value = date - userDate;

        // HIDE THE LOADER
        document.querySelector('.loader').style.display = 'none';

        // SHOW AGE THE RESULT
        document.querySelector('.age-container').style.display = 'block';
    } else {
        errorMsg('Please input your year of birth');
        // HIDE THE LOADER
        document.querySelector('.loader').style.display = 'none';
    }

    e.preventDefault();
}

function errorMsg(error) {
    // CREATE THE ERROR DIV
    const errorDiv = document.createElement('div');

    // GET ELEMENTS
    const heading = document.querySelector('.heading');
    const container = document.querySelector('.container');

    // ADD CLASSES TO IT
    errorDiv.className = 'alert alert-danger';

    // ADD TEXTNODE
    errorDiv.appendChild(document.createTextNode(error));

    // INSERT THE ERROR DIV IN THE CONTAINER BUT BEFORE THE HEADING
    container.insertBefore(errorDiv, heading);

    // TIMEOUT
    setTimeout(clearErrorMsg, 3000);
}

function clearErrorMsg() {
    document.querySelector('.alert').remove();
}