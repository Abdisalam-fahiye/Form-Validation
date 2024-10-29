const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm');

const small = document.querySelector('small');

const showError = (input, message) => {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];

    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = message;
}

const showSuccess = (input) => {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success';
    const successIcon = parentElement.querySelectorAll('i')[0];
    const errorIcon = parentElement.querySelectorAll('i')[1];

    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
}

const checkEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(reg.test(email.value)) {
        showSuccess(email);
    }
    else{
        showError(email, 'Invalid email');
    }
}

const checkPasswordLength = (input, min, max) => {
    if(input.value.length < min) {
        showError(input, `Password must be at least ${min} characters`);
    }
    else if(input.value.length > max) {
        showError(input, `Password must be at most ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}

const checkEmpty = (elements) => {
    elements.forEach((element) => {
        if(element.value === '') {
            showError(element, 'Input Required');
        }
        else{
            showSuccess(element);
        }
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkEmpty( [username,email,password,confirmPassword]);
    checkEmail(email);
    checkPasswordLength(password,6,10);
    checkPasswordLength(confirmPassword,6,10);
})