/* eslint-disable import/extensions */
import profile from './modules/profilePage.js';
import getCharacters from './modules/getCharacters.js';
import mainPage from './modules/mainPage.js';
import LoginPage from './modules/loginPage.js';
import RegPage from './modules/regPage.js';

export default class App {
    constructor() {
        this.initialize();
    }

    initialize() {
        mainPage();
        getCharacters();
        profile();
        const login = new LoginPage()
            .createLoginPage()
            .initEventListeners();

        const RegistrationPage = new RegPage();

        if (localStorage.getItem('login') === 'true') {
            document.querySelector('.login_page').classList.add('hide');
            document.querySelector('.main_page').classList.remove('hide');
        } else {
            document.querySelector('.main_page').classList.add('hide');
            document.querySelector('.login_page').classList.remove('hide');
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const app = new App();
});
