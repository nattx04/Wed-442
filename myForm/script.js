const form = document.getElementById('MYform');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkPassword(password, confirmPassword);
    checkUser(6,10);
});

const checkPassword = (password, confirmPassword) => {
    if (password.value === confirmPassword.value) {
        showSucessBorder(confirmPassword);
    } else {
        showErrorMessage('Password not matching', confirmPassword);
    }
};


const showSucessBorder = (input) =>{
    const formControl = input.parentElement;
    formControl.className = 'frmdiv success';
    const small = formControl.querySelector("small");
    small.innerText = 'Password is matching';
}

const showErrorMessage = (message , input) => {
    const formcontrol = input.parentElement;
    formcontrol.className = 'frmdiv error';
    const small = formcontrol.querySelector("small");
    small.innerText = message;
}

const checkUser = (min, max) => {
    if (username.value.length < min) {
        showErrorMessage(`Your Username is less than ${min} characters`, username);
    } else if (username.value.length > max) {
        showErrorMessage(`Your Username is more than ${max} characters`, username);
    }
};
