import ElementCreator from './ElementCreator.js';
import DataFetcher from './DataFetcher.js';

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
        .appendTo(document.querySelector('form'));

    const loginBlock = build.create('div')
        .addClass('inputBlock')
        .setAttribute({ id: 'loginBlock' })
        .appendTo(document.querySelector('form'));

    const loginInput = build.create('input')
        .addClass('inputWindow')
        .setAttribute({ placeholder: 'Your login...', type: 'text', name: 'login' })
        .appendTo(document.querySelector('#loginBlock'));

    const passwordText = build.create('p')
        .addClass('loginText')
        .setTextContent('Password:')
        .appendTo(document.querySelector('form'));

    const passwordBlock = build.create('div')
        .addClass('inputBlock')
        .setAttribute({ id: 'passwordBlock' })
        .appendTo(document.querySelector('form'));

    const passwordInput = build.create('input')
        .addClass('inputWindow')
        .setAttribute({ placeholder: 'Your password...', type: 'password', name: 'password' })
        .appendTo(document.querySelector('#passwordBlock'));

    const btnForm = build.create('button')
        .addClass('btnForm')
        .setTextContent('Lets start')
        .appendTo(document.querySelector('form'));

    const registrationUrl = build.create('a')
        .setAttribute({ id: 'regUrl' })
        .setTextContent('Registration')
        .appendTo(document.querySelector('.login_form'));

    const buttonLogin = document.querySelector('.btnForm'),
          loginFormWrapWrap = document.querySelector('.loginFormWrapper');

    loginFormWrapWrap.addEventListener('submit', (e) => {
        e.preventDefault();

        const loginFormData = new FormData(loginFormWrapWrap);

        console.log(loginFormData);
    });
};

export default loginPage;
