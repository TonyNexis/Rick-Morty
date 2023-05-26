import ElementCreator from './ElementCreator.js';
import FetchAPI from './FetchAPI.js';
import Validation from './Validation.js';
import ErrorAnimation from './ErrorAnimation.js';
import ErrorMessage from './ErrorMessage.js';

const loginPage = () => {
    const build = new ElementCreator();

    const loginWrapper = build.create('div')
        .addClass('flex-container')
        .addClass('login_page')
        .appendTo(document.body);

    const loginForm = build.create('div')
        .addClass('login_form')
        .appendTo(document.querySelector('.login_page'));

    const helloText = build.create('p')
        .addClass('login_header')
        .setTextContent('Hello! You need to login')
        .appendTo(document.querySelector('.login_form'));

    const form = build.create('form')
        .addClass('loginFormWrapper')
        .appendTo(document.querySelector('.login_form'));

    const loginText = build.create('p')
        .addClass('loginText')
        .setTextContent('Login:')
        .appendTo(document.querySelector('.loginFormWrapper'));

    const loginBlock = build.create('div')
        .addClass('inputBlock')
        .setAttribute({ id: 'loginBlock' })
        .appendTo(document.querySelector('.loginFormWrapper'));

    const loginInput = build.create('input')
        .addClass('inputWindow')
        .setAttribute({ placeholder: 'Your login...', type: 'text', name: 'login' })
        .appendTo(document.querySelector('#loginBlock'));

    const passwordText = build.create('p')
        .addClass('loginText')
        .setTextContent('Password:')
        .appendTo(document.querySelector('.loginFormWrapper'));

    const passwordBlock = build.create('div')
        .addClass('inputBlock')
        .setAttribute({ id: 'passwordBlock' })
        .appendTo(document.querySelector('.loginFormWrapper'));

    const passwordInput = build.create('input')
        .addClass('inputWindow')
        .setAttribute({ id: 'loginPasswordInput', placeholder: 'Your password...', type: 'password', name: 'password' })
        .appendTo(document.querySelector('#passwordBlock'));

    const passwordSwitcher = build.create('img')
        .addClass('imgPasswordSwitcher')
        .setAttribute({ id: 'imgSwitcher', src: './assets/img/eye-off-outline.svg' })
        .appendTo(document.querySelector('#passwordBlock'));

    const btnForm = build.create('button')
        .addClass('btnForm')
        .setTextContent('Lets start')
        .appendTo(document.querySelector('.loginFormWrapper'));

    const registrationUrl = build.create('a')
        .setAttribute({ id: 'regUrl', href: '' })
        .setTextContent('Registration')
        .appendTo(document.querySelector('.login_form'));

    const buttonLogin = document.querySelector('.btnForm'),
          loginFormWrapWrap = document.querySelector('.loginFormWrapper'),
          regUrl = document.querySelector('#regUrl');

    const passwordToggle = document.querySelector('#imgSwitcher'),
          loginPasswordInput = document.querySelector('#loginPasswordInput');

        passwordToggle.addEventListener('click', () => {
        if (loginPasswordInput.getAttribute('type') === 'password') {
            passwordToggle.src = './assets/img/eye-outline.svg';
            loginPasswordInput.setAttribute('type', 'text');
        } else {
            passwordToggle.src = './assets/img/eye-off-outline.svg';
            loginPasswordInput.setAttribute('type', 'password');
        }
    });

    regUrl.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector('.login_page').classList.add('hide');
        document.querySelector('.reg_page').classList.remove('hide');

        loginFormWrapWrap.reset();
    });

    buttonLogin.addEventListener('click', (e) => {
        e.preventDefault();

        if (document.querySelector('.regMessageError')) {
            document.querySelector('.regMessageError').remove();
        }

        const userData = JSON.parse(localStorage.getItem('userData')),
              loginFormData = new FormData(loginFormWrapWrap),
              login = loginFormData.get('login'),
              password = loginFormData.get('password');

        if (userData && userData.login === login && userData.password === password) {
            document.querySelector('.login_page').classList.add('hide');
            document.querySelector('.main_page').classList.remove('hide');

            localStorage.setItem('login', true);
          } else {
            ErrorMessage.message('regMessageError', 'Wrong login or password', loginFormWrapWrap);
            ErrorAnimation.animation('#loginBlock');
            ErrorAnimation.animation('#passwordBlock');
          }
    });
};

export default loginPage;
