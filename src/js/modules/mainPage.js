import ElementCreator from './ElementCreator.js';

const mainPage = () => {
    const build = new ElementCreator();

    const mainPageWrapper = build.create('div')
        .addClass('flex-container')
        .addClass('main_page')
        .appendTo(document.body);

    const header = build.create('header')
        .appendTo(document.querySelector('.main_page'));

    const mainImg = build.create('img')
        .addClass('main_img')
        .setAttribute({ src: './assets/img/PngItem_438051.png', alt: 'Rick & Morty' })
        .appendTo(document.querySelector('header'));

    const searchBar = build.create('div')
        .addClass('search_bar')
        .appendTo(document.querySelector('.main_page'));

    const btnSearch = build.create('button')
        .addClass('btn_search')
        .setAttribute({ type: 'submit' })
        .appendTo(document.querySelector('.search_bar'));

    const searchImg = build.create('img')
        .addClass('search_img')
        .setAttribute({ src: './assets/img/Vector.svg', alt: 'search' })
        .appendTo(document.querySelector('.btn_search'));

    const searchInput = build.create('input')
        .addClass('search_input')
        .setAttribute({ id: 'name-filter', placeholder: 'Filter by name...', type: 'text', name: 'filter' })
        .appendTo(document.querySelector('.search_bar'));

    const cards = build.create('div')
        .addClass('cards')
        .appendTo(document.querySelector('.main_page'));
};

export default mainPage;
