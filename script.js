const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs()
});

function checkInputs() {
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value

    if (usernameValue === ''){
        setErrorFor(username, 'o nome de usuario é obrigatorio.');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'o email é obrigatório.');
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'por favor, insira um email valido.');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === '') {
        setErrorFor(passwordConfirmation, 'a confirmação de senha é obrigatoria');
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, 'as senhas não conferem');
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll('.form-control')
    
    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });

    if (formIsValid) {
        alert('o formulario esta completo');
    }

};

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = 'form-control error'

};

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'

}




function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
