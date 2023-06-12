/* eslint-disable import/extensions */
import MainPage from './modules/mainPage.js';
import LoginPage from './modules/loginPage.js';
import RegPage from './modules/regPage.js';
import Router from './services/Router.js';

export default class App {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.router = new Router();

        this.router.addRoute('/main', () => {
            if (document.querySelector('.profile_page')) {
                document.querySelector('.profile_page').remove();
            }

            if (document.querySelector('.main_page')) {
                document.querySelector('.main_page').remove();
            }
                this.mainPage = new MainPage()
                .createPage()
                .initEventListeners()
                .filter();
            });

        this.router.addRoute('/login', () => {
            if (!document.querySelector('.login_page')) {
                this.loginPage = new LoginPage()
                .createPage()
                .initEventListeners();
            }
        });

        this.router.addRoute('/registration', () => {
            if (!document.querySelector('.reg_page')) {
                this.RegistrationPage = new RegPage()
                .createPage()
                .initEventListeners();
            }
            });

        if (localStorage.getItem('login') === 'true' && (window.location.hash === '#/registration' || window.location.hash === '#/login' || window.location.hash === '#/main' || window.location.hash === '')) {
                this.router.navigateTo('/main');
            } else if (window.location.hash === '#/registration') {
                this.router.navigateTo('/registration');
            } else {
                this.router.navigateTo('/login');
            }

        // for (let i = 1; i <= 20; i++) {
        //     this.router.addRoute(`/profile/${і}`), () => {
        //             if (!document.querySelector('.profile_page')) {
        //                 this.profilePage = new ProfilePage()
        //                 .createPage()
        //                 .getProfileData(і);
        //     if (window.location.hash === `#/profile/${i}`) {
        //         this.router.navigateTo(`/profile/${i}`);
        //     }
        // }

        this.router.handleRouteChange();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const app = new App();
});
