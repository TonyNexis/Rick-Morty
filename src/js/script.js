/* eslint-disable import/extensions */
import ProfilePage from './modules/profilePage.js';
import getCharacters from './modules/getCharacters.js';
import MainPage from './modules/mainPage.js';
import LoginPage from './modules/loginPage.js';
import RegPage from './modules/regPage.js';
// import ProfileFilter from './services/ProfileFilter.js';
import Router from './services/Router.js';

export default class App {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.router = new Router();

        this.router.addRoute('/main', () => {
            this.mainPage = new MainPage()
                .createPage()
                .initEventListeners();
                 // .filter();
        });

        // this.mainPage = new MainPage()
        //     .createPage()
        //     .initEventListeners();
        //     // .filter();

            // getCharacters();

        // this.profilePage = new ProfilePage()
        //     .createPage()
        //     .initEventListeners();

        // this.loginPage = new LoginPage()
        //     .createPage()
        //     .initEventListeners();

        this.loginPage = new LoginPage()
        .createPage()
        .initEventListeners();

        // this.RegistrationPage = new RegPage()
        //     .createPage()
        //     .initEventListeners();

        this.router.addRoute('/registration', () => {
            if (document.querySelector('.login_page')) {document.querySelector('.login_page').remove();}
            this.RegistrationPage = new RegPage()
                .createPage()
                .initEventListeners();
            });

        // if (localStorage.getItem('login') === 'true') {
        //     document.querySelector('.login_page').classList.add('hide');
        //     document.querySelector('.main_page').classList.remove('hide');
        // } else {
        //     document.querySelector('.main_page').classList.add('hide');
        //     document.querySelector('.login_page').classList.remove('hide');
        // }

        this.router.handleRouteChange();
        // this.router.navigateTo('/login');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const app = new App();
});
