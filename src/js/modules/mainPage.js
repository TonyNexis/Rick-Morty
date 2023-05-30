/* eslint-disable import/extensions */
import ElementCreator from '../services/ElementCreator.js';
// import ProfileFilter from '../services/ProfileFilter.js';

export default class MainPage {
    constructor() {
        this.build = new ElementCreator();
        // this.profileFilter = new ProfileFilter();
    }

    createPage() {
        this.mainPageWrapper = this.build.create('div')
        .addClass('flex-container')
        .addClass('main_page')
        .addClass('hide')
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

        return this;
    }

    initEventListeners() {
        this.logoutUrl = document.querySelector('#logoutUrl').addEventListener('click', (e) => {
            localStorage.setItem('login', false);
        });

        return this;
    }

    // NOT WORKING!!!! SOS!!! NEED HELP!!!
    // filter() {
    //     this.test = this.profileFilter().search();
    // }
}
