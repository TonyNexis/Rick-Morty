import FetchAPI from './FetchAPI.js';
import ElementCreator from './ElementCreator.js';
import Validation from './Validation.js';

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
            Validation.message('regMessageError', 'Please enter the desired login', regForm);
            Validation.animation('#regloginBlock');
        } else if (Validation.isTooLong(userData.login)) {
            Validation.message('regMessageError', 'Your login is too long', regForm);
            Validation.animation('#regloginBlock');
        } else if (Validation.isTooLong(userData.password) || Validation.isTooShort(userData.password)) {
            Validation.message('regMessageError', 'Password length should be between 5 and 20 characters', regForm);
            Validation.animation('#regpasswordBlock');
        } else if (!Validation.hasNoNumbers(userData.password)) {
            Validation.message('regMessageError', 'Password should contain at least one number', regForm);
            Validation.animation('#regpasswordBlock');
        } else if (!Validation.hasNoLetters(userData.password)) {
            Validation.message('regMessageError', 'Password should contain at least one letter', regForm);
            Validation.animation('#regpasswordBlock');
        } else {
                localStorage.setItem('userData', JSON.stringify(userData));
                Validation.message('regMessageOk', 'Registration successful', regForm);
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
