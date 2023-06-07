/* eslint-disable import/extensions */
/* eslint-disable max-len */
// import FetchAPI from '../services/FetchAPI.js';
import ElementCreator from '../services/ElementCreator.js';
import Validation from '../services/Validation.js';
import ValidationAnimation from '../services/ValidationAnimation.js';
import ValidationMessage from '../services/ValidationMessage.js';
import Router from '../services/Router.js';

export default class RegPage {
    constructor() {
        this.loginPage = document.querySelector('.login_page');
        this.build = new ElementCreator();
    }

    createPage() {
        this.router = new Router();

        this.registrationPage = this.build.create('div')
            .addClass('flex-container')
            .addClass('reg_page')
            // .addClass('hide')
            .appendTo(document.body);

        this.regForm = this.build.create('div')
            .addClass('reg_form')
            .appendTo(document.querySelector('.reg_page'));

        this.regHeader = this.build.create('p')
            .addClass('reg_header')
            .setTextContent('Create your account')
            .appendTo(document.querySelector('.reg_form'));

        this.regFormWrapper = this.build.create('form')
            .addClass('regFormWrapper')
            .appendTo(document.querySelector('.reg_form'));

        this.regTextLogin = this.build.create('p')
            .addClass('regText')
            .setTextContent('Login:')
            .appendTo(document.querySelector('.regFormWrapper'));

        this.regloginBlock = this.build.create('div')
            .addClass('reginputBlock')
            .setAttribute({ id: 'regloginBlock' })
            .appendTo(document.querySelector('.regFormWrapper'));

        this.regLoginInput = this.build.create('input')
            .addClass('reginputWindow')
            .setAttribute({ placeholder: 'Your login...', type: 'text', name: 'login' })
            .appendTo(document.querySelector('#regloginBlock'));

        this.regTextPassword = this.build.create('p')
            .addClass('regText')
            .setTextContent('Password:')
            .appendTo(document.querySelector('.regFormWrapper'));

        this.regPasswordBlock = this.build.create('div')
            .addClass('reginputBlock')
            .setAttribute({ id: 'regpasswordBlock' })
            .appendTo(document.querySelector('.regFormWrapper'));

        this.regPasswordInput = this.build.create('input')
            .addClass('reginputWindow')
            .setAttribute({ id: 'passwordRegInputWindow',
              placeholder: 'Your password...',
              type: 'password',
              name: 'password' })
              .appendTo(document.querySelector('#regpasswordBlock'));

        this.imgPasswordSwitcher = this.build.create('img')
            .addClass('imgPasswordSwitcher')
            .setAttribute({ id: 'regPasswordSwitcher', src: './assets/img/eye-off-outline.svg', alt: '' })
            .appendTo(document.querySelector('#regpasswordBlock'));

        this.regBtn = this.build.create('button')
            .addClass('regbtnForm')
            .setTextContent('Registration')
            .appendTo(document.querySelector('.regFormWrapper'));

        this.loginUrl = this.build.create('a')
            .setAttribute({ id: 'loginUrl', href: './login' })
            .setTextContent('Go back')
            .appendTo(document.querySelector('.reg_form'));

        return this;
    }

    initEventListeners() {
        this.registrationPage = document.querySelector('.reg_page');
        this.regFormWrapper = document.querySelector('.regFormWrapper');

        this.loginUrl = document.querySelector('#loginUrl').addEventListener('click', (e) => {
            e.preventDefault();
            // this.registrationPage.classList.add('hide');
            // this.loginPage.classList.remove('hide');

            this.router.navigateTo('');
            this.loginPage = document.querySelector('.reg_page').remove();

            if (document.querySelector('.regMessageError')) {
                document.querySelector('.regMessageError').remove();
            }

            if (document.querySelector('.regMessageOk')) {
                document.querySelector('.regMessageOk').remove();
            }

            this.regFormWrapper.reset();
        });

        this.regBtn = document.querySelector('.regbtnForm').addEventListener('click', (e) => {
            e.preventDefault();

            const userData = Object.fromEntries(new FormData(this.regFormWrapper));

            if (document.querySelector('.regMessageError')) {
                document.querySelector('.regMessageError').remove();
            }

            if (!Validation.isNotEmpty(userData.login)) {
                ValidationMessage.message('regMessageError', 'Please enter the desired login', this.regFormWrapper);
                ValidationAnimation.animation('#regloginBlock');
            } else if (Validation.isTooLong(userData.login, 20)) {
                ValidationMessage.message('regMessageError', 'Your login is too long', this.regFormWrapper);
                ValidationAnimation.animation('#regloginBlock');
            } else if (Validation.isTooLong(userData.password, 20) || Validation.isTooShort(userData.password, 5)) {
                ValidationMessage.message('regMessageError', 'Password length should be between 5 and 20 characters', this.regFormWrapper);
                ValidationAnimation.animation('#regpasswordBlock');
            } else if (!Validation.hasNoNumbers(userData.password)) {
                ValidationMessage.message('regMessageError', 'Password should contain at least one number', this.regFormWrapper);
                ValidationAnimation.animation('#regpasswordBlock');
            } else if (!Validation.hasNoLetters(userData.password)) {
                ValidationMessage.message('regMessageError', 'Password should contain at least one letter', this.regFormWrapper);
                ValidationAnimation.animation('#regpasswordBlock');
            } else {
                    localStorage.setItem('userData', JSON.stringify(userData));
                    ValidationMessage.message('regMessageOk', 'Registration successful', this.regFormWrapper);
                    setTimeout(() => {
                        this.router.navigateTo('/login');
                        this.loginPage = document.querySelector('.reg_page').remove();

                    if (document.querySelector('.regMessageOk')) {
                        document.querySelector('.regMessageOk').remove();
                    }
                    }, 1000);
            }
        });

        this.passwordToggle = document.querySelector('#regPasswordSwitcher');
        this.passwordInput = document.querySelector('#passwordRegInputWindow');

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
