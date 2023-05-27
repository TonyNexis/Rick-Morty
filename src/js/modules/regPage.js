/* eslint-disable import/extensions */
/* eslint-disable max-len */
// import FetchAPI from '../services/FetchAPI.js';
import ElementCreator from '../services/ElementCreator.js';
import Validation from '../services/Validation.js';
import ValidationAnimation from '../services/ValidationAnimation.js';
import ValidationMessage from '../services/ValidationMessage.js';

export default class RegPage {
    constructor() {
        this.loginUrl = document.querySelector('#loginUrl');
        this.loginPage = document.querySelector('.login_page');
        this.registrationPage = document.querySelector('.reg_page');
        this.regForm = document.querySelector('.regFormWrapper');
        this.regBtn = document.querySelector('.regbtnForm');
        this.build = new ElementCreator();

        this.initEventListeners();
    }

    initEventListeners() {
        this.loginUrl.addEventListener('click', (e) => {
            e.preventDefault();
            this.regastrationPage.classList.add('hide');
            this.loginPage.classList.remove('hide');

            if (document.querySelector('.regMessageError')) {
                document.querySelector('.regMessageError').remove();
            }

            this.regForm.reset();
        });

        this.regBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const userData = Object.fromEntries(new FormData(this.regForm));

            if (document.querySelector('.regMessageError')) {
                document.querySelector('.regMessageError').remove();
            }

            if (!Validation.isNotEmpty(userData.login)) {
                ValidationMessage.message('regMessageError', 'Please enter the desired login', this.regForm);
                ValidationAnimation.animation('#regloginBlock');
            } else if (Validation.isTooLong(userData.login, 20)) {
                ValidationMessage.message('regMessageError', 'Your login is too long', this.regForm);
                ValidationAnimation.animation('#regloginBlock');
            } else if (Validation.isTooLong(userData.password, 20) || Validation.isTooShort(userData.password, 5)) {
                ValidationMessage.message('regMessageError', 'Password length should be between 5 and 20 characters', this.regForm);
                ValidationAnimation.animation('#regpasswordBlock');
            } else if (!Validation.hasNoNumbers(userData.password)) {
                ValidationMessage.message('regMessageError', 'Password should contain at least one number', this.regForm);
                ValidationAnimation.animation('#regpasswordBlock');
            } else if (!Validation.hasNoLetters(userData.password)) {
                ValidationMessage.message('regMessageError', 'Password should contain at least one letter', this.regForm);
                ValidationAnimation.animation('#regpasswordBlock');
            } else {
                    localStorage.setItem('userData', JSON.stringify(userData));
                    ValidationMessage.message('regMessageOk', 'Registration successful', this.regForm);
                    setTimeout(() => {
                        this.registrationPage.classList.add('hide');
                        this.loginPage.classList.remove('hide');
                    }, 1000);
            }
        });

        this.passwordToggle = document.querySelector('.imgPasswordSwitcher');
        this.passwordInput = document.querySelector('#passwordinputWindow');

        this.passwordToggle.addEventListener('click', () => {
            if (this.passwordInput.getAttribute('type') === 'password') {
                this.passwordToggle.src = './assets/img/eye-outline.svg';
                this.passwordInput.setAttribute('type', 'text');
            } else {
                this.passwordToggle.src = './assets/img/eye-off-outline.svg';
                this.passwordInput.setAttribute('type', 'password');
            }
        });
    }
}
