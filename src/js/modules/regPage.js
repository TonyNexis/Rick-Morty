import FetchAPI from './FetchAPI.js';
import ElementCreator from './ElementCreator.js';
import Validation from './Validation.js';
import ErrorAnimation from './ErrorAnimation.js';
import ErrorMessage from './ErrorMessage.js'

const regPage = () => {
    const loginUrl = document.querySelector('#loginUrl'),
          loginPage = document.querySelector('.login_page'),
          regastrationPage = document.querySelector('.reg_page'),
          regForm = document.querySelector('.regFormWrapper'),
          regBtn = document.querySelector('.regbtnForm'),
          build = new ElementCreator();

        loginUrl.addEventListener('click', (e) => {
        e.preventDefault();
        regastrationPage.classList.add('hide');
        loginPage.classList.remove('hide');

        if (document.querySelector('.regMessageError')) {
            document.querySelector('.regMessageError').remove();
        }

        regForm.reset();
    });

    regBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const userData = Object.fromEntries(new FormData(regForm));

        if (document.querySelector('.regMessageError')) {
            document.querySelector('.regMessageError').remove();
        }

        if (!Validation.isNotEmpty(userData.login)) {
            ErrorMessage.message('regMessageError', 'Please enter the desired login', regForm);
            ErrorAnimation.animation('#regloginBlock');
        } else if (Validation.isTooLong(userData.login, 20)) {
            ErrorMessage.message('regMessageError', 'Your login is too long', regForm);
            ErrorAnimation.animation('#regloginBlock');
        } else if (Validation.isTooLong(userData.password, 20) || Validation.isTooShort(userData.password, 5)) {
            ErrorMessage.message('regMessageError', 'Password length should be between 5 and 20 characters', regForm);
            ErrorAnimation.animation('#regpasswordBlock');
        } else if (!Validation.hasNoNumbers(userData.password)) {
            ErrorMessage.message('regMessageError', 'Password should contain at least one number', regForm);
            ErrorAnimation.animation('#regpasswordBlock');
        } else if (!Validation.hasNoLetters(userData.password)) {
            ErrorMessage.message('regMessageError', 'Password should contain at least one letter', regForm);
            ErrorAnimation.animation('#regpasswordBlock');
        } else {
                localStorage.setItem('userData', JSON.stringify(userData));
                ErrorMessage.message('regMessageOk', 'Registration successful', regForm);
                setTimeout(() => {
                    regastrationPage.classList.add('hide');
                    loginPage.classList.remove('hide');
                }, 1000);
        }
    });

    const passwordToggle = document.querySelector('.imgPasswordSwitcher'),
          passwordInput = document.querySelector('#passwordinputWindow');

    passwordToggle.addEventListener('click', () => {
        if (passwordInput.getAttribute('type') === 'password') {
            passwordToggle.src = './assets/img/eye-outline.svg';
            passwordInput.setAttribute('type', 'text');
        } else {
            passwordToggle.src = './assets/img/eye-off-outline.svg';
            passwordInput.setAttribute('type', 'password');
        }
    });
};

export default regPage;
