/* eslint-disable import/extensions */
import ElementCreator from '../services/ElementCreator.js';
import ProfileFilter from '../services/ProfileFilter.js';
import GetCharacters from '../services/GetCharacters.js';
import Router from '../services/Router.js';
import ProfilePage from './profilePage.js';

export default class MainPage {
    constructor() {
        this.build = new ElementCreator();
        this.router = new Router();
        this.getCharacters = new GetCharacters();
    }

    createPage() {
        this.getCharacters.createCard();

        this.mainPageWrapper = this.build.create('div')
            .addClass('flex-container')
            .addClass('main_page')
            .appendTo(document.body);

        this.userBlock = this.build.create('div')
            .setAttribute({ id: 'userBlock' })
            .appendTo(document.querySelector('.main_page'));

        this.user = this.build.create('span')
            .addClass('user')
            .appendTo(document.querySelector('#userBlock'));

        this.login = localStorage.getItem('login');
            if (this.login) {
                this.userDataObj = JSON.parse(localStorage.getItem('userData'));
                this.user.setTextContent(`Hello, ${this.userDataObj.login}`);
            }

        this.logoutUrl = this.build.create('a')
            .addClass('user')
            .setAttribute({ id: 'logoutUrl', href: '' })
            .setTextContent('(Logout)')
            .appendTo(document.querySelector('#userBlock'));

        this.header = this.build.create('header')
            .appendTo(document.querySelector('.main_page'));

        this.mainImg = this.build.create('img')
            .addClass('main_img')
            .setAttribute({ src: './assets/img/PngItem_438051.png', alt: 'Rick & Morty' })
            .appendTo(document.querySelector('header'));

        this.searchBar = this.build.create('div')
            .addClass('search_bar')
            .appendTo(document.querySelector('.main_page'));

        this.btnSearch = this.build.create('button')
            .addClass('btn_search')
            .setAttribute({ type: 'submit' })
            .appendTo(document.querySelector('.search_bar'));

        this.searchImg = this.build.create('img')
            .addClass('search_img')
            .setAttribute({ src: './assets/img/Vector.svg', alt: 'search' })
            .appendTo(document.querySelector('.btn_search'));

        this.searchInput = this.build.create('input')
            .addClass('search_input')
            .setAttribute({
            id: 'name-filter', placeholder: 'Filter by name...', type: 'text', name: 'filter',
            })
            .appendTo(document.querySelector('.search_bar'));

        this.cards = this.build.create('div')
            .addClass('cards')
            .appendTo(document.querySelector('.main_page'));

        this.profileFilter = new ProfileFilter();

        return this;
    }

    initEventListeners() {
        this.logoutUrl = document.querySelector('#logoutUrl').addEventListener('click', (e) => {
            localStorage.setItem('login', false);
        });

        this.cards = document.querySelector('.cards').addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            if (card) {
                window.cardID = card.id;

                this.router.addRoute(`/profile/${card.id}`, () => {
                    if (!document.querySelector('.profile_page')) {
                        this.profilePage = new ProfilePage()
                        .createPage()
                        .getProfileData()
                        .initEventListeners();
                    }
                });

            this.router.navigateTo(`/profile/${card.id}`);
            this.loginPage = document.querySelector('.main_page').remove();
        }
        });

        return this;
    }

    filter() {
        this.searchByName = this.profileFilter.search();
    }
}
