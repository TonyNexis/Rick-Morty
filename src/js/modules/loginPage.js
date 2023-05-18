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
        .setTextContent('Hello! You need to login')
        .appendTo(document.querySelector('.login_form'));

    const form = build.create('form')
        .appendTo(document.querySelector('login_form'));
};

export default loginPage;
