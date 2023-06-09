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
            if (document.querySelector('.profile_page')) {
                document.querySelector('.profile_page').remove();
            }
            this.mainPage = new MainPage()
                .createPage()
                .initEventListeners();
                 // .filter();
        });

        this.router.addRoute('/login', () => {
            if (!document.querySelector('.login_page')) {
                this.loginPage = new LoginPage()
                .createPage()
                .initEventListeners();
            }
        });

        this.router.addRoute('/registration', () => {
            this.RegistrationPage = new RegPage()
                .createPage()
                .initEventListeners();
            });

        this.router.addRoute(`/profile/${window.cardID}`, () => {
                this.profilePage = new ProfilePage()
                    .createPage()
                    .initEventListeners();
            });

        if (localStorage.getItem('login') === 'true') {
                this.router.navigateTo('/main');
            } else if (window.location.hash === '#/registration') {
                this.router.navigateTo('/registration');
            } else if (window.location.hash === `/profile/1`) {
                // this.router.navigateTo(`/profile/${window.cardID}`);
                // window.cardID = card.id;
                this.router.addRoute(`/profile/1`, () => {
                    this.profilePage = new ProfilePage()
                        .createPage()
                        .getProfileData();
                        // .initEventListeners();
                });
            this.router.navigateTo(`/profile/1`);
            } else {
                this.router.navigateTo('/login');
            }

        this.router.handleRouteChange();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const app = new App();
});
