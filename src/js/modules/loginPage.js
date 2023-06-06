/* eslint-disable import/extensions */
import ElementCreator from '../services/ElementCreator.js';
// import FetchAPI from './FetchAPI.js';
import ValidationAnimation from '../services/ValidationAnimation.js';
import ValidationMessage from '../services/ValidationMessage.js';
import Router from '../services/router.js';

export default class LoginPage {
    constructor() {
        this.build = new ElementCreator();
    }

    createPage() {
        this.router = new Router();

        const loginWrapper = this.build.create('div')
            .addClass('flex-container')
            .addClass('login_page')
            .appendTo(document.body);

        const loginForm = this.build.create('div')
            .addClass('login_form')
            .appendTo(document.querySelector('.login_page'));

        const helloText = this.build.create('p')
            .addClass('login_header')
            .setTextContent('Hello! You need to login')
            .appendTo(document.querySelector('.login_form'));

        const form = this.build.create('form')
            .addClass('loginFormWrapper')
            .appendTo(document.querySelector('.login_form'));

        const loginText = this.build.create('p')
            .addClass('loginText')
            .setTextContent('Login:')
            .appendTo(document.querySelector('.loginFormWrapper'));

        const loginBlock = this.build.create('div')
            .addClass('inputBlock')
            .setAttribute({ id: 'loginBlock' })
            .appendTo(document.querySelector('.loginFormWrapper'));

        const loginInput = this.build.create('input')
            .addClass('inputWindow')
            .setAttribute({ placeholder: 'Your login...', type: 'text', name: 'login' })
            .appendTo(document.querySelector('#loginBlock'));

        const passwordText = this.build.create('p')
            .addClass('loginText')
            .setTextContent('Password:')
            .appendTo(document.querySelector('.loginFormWrapper'));

        const passwordBlock = this.build.create('div')
            .addClass('inputBlock')
            .setAttribute({ id: 'passwordBlock' })
            .appendTo(document.querySelector('.loginFormWrapper'));

        const passwordInput = this.build.create('input')
            .addClass('inputWindow')
            .setAttribute({ id: 'loginPasswordInput', placeholder: 'Your password...', type: 'password', name: 'password' })
            .appendTo(document.querySelector('#passwordBlock'));

        const passwordSwitcher = this.build.create('img')
            .addClass('imgPasswordSwitcher')
            .setAttribute({ id: 'imgSwitcher', src: './assets/img/eye-off-outline.svg' })
            .appendTo(document.querySelector('#passwordBlock'));

        const btnForm = this.build.create('button')
            .addClass('btnForm')
            .setTextContent('Lets start')
            .appendTo(document.querySelector('.loginFormWrapper'));

        const registrationUrl = this.build.create('a')
            .setAttribute({ id: 'regUrl', href: './registration' })
            .setTextContent('Registration')
            .appendTo(document.querySelector('.login_form'));

        return this;
    }

    initEventListeners() {
        this.buttonLogin = document.querySelector('.btnForm');
        this.loginFormWrapWrap = document.querySelector('.loginFormWrapper');
        this.regUrl = document.querySelector('#regUrl');
        this.passwordToggle = document.querySelector('#imgSwitcher');
        this.loginPasswordInput = document.querySelector('#loginPasswordInput');

        this.passwordToggle.addEventListener('click', () => {
        if (this.loginPasswordInput.getAttribute('type') === 'password') {
            this.passwordToggle.src = './assets/img/eye-outline.svg';
            this.loginPasswordInput.setAttribute('type', 'text');
        } else {
            this.passwordToggle.src = './assets/img/eye-off-outline.svg';
            this.loginPasswordInput.setAttribute('type', 'password');
            }
        });

        this.regUrl.addEventListener('click', (e) => {
            e.preventDefault();

            // document.querySelector('.login_page').classList.add('hide');
            // document.querySelector('.reg_page').classList.remove('hide');



            this.router.navigateTo('/registration');
            this.loginPage = document.querySelector('.login_page').remove();

            // this.loginFormWrapWrap.reset();
        });

        this.buttonLogin.addEventListener('click', (e) => {
            e.preventDefault();

        if (document.querySelector('.regMessageError')) {
            document.querySelector('.regMessageError').remove();
        }

        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.loginFormData = new FormData(this.loginFormWrapWrap);
        this.login = this.loginFormData.get('login');
        this.password = this.loginFormData.get('password');

        if (this.userData && this.userData.login === this.login && this.userData.password === this.password) {
            document.querySelector('.user').textContent = `Hello, ${this.login}`;

            document.querySelector('.login_page').classList.add('hide');
            document.querySelector('.main_page').classList.remove('hide');

            localStorage.setItem('login', true);
          } else {
            ValidationMessage.message('regMessageError', 'Wrong login or password', this.loginFormWrapWrap);
            ValidationAnimation.animation('#loginBlock');
            ValidationAnimation.animation('#passwordBlock');
          }
    });
    }
}
