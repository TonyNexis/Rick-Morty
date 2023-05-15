class ElementCreator {
    constructor() {
        this.element = null;
    }

    create(tagName) {
        this.element = document.createElement(tagName);
        return this;
    }

    addClass(className) {
        if (this.element && className) {
            this.element.classList.add(className);
        }
        return this;
    }

    setAttribute(attributes) {
        if (this.element && attributes && typeof (attributes) === 'object') {
            for (const key in attributes) {
                this.element.setAttribute(key, attributes[key]);
            }
        }
        return this;
    }

    setTextContent(text) {
        if (this.element && text) {
            this.element.textContent = text;
        }
        return this;
    }

    appendTo(parentElement) {
        if (this.element && parentElement) {
            parentElement.appendChild(this.element);
        }
        return this;
    }
}

    const build = new ElementCreator();

    const mainPage = build.create('div')
        .addClass('flex-container')
        .addClass('main_page')
        .appendTo(document.body);

    const header = build.create('header')
        .appendTo(document.querySelector('.main_page'));

    const mainImg = build.create('img')
        .addClass('main_img')
        .setAttribute({ src: './assets/img/PngItem_438051.png', alt: 'Rick & Morty' })
        .appendTo(document.querySelector('header'));

        // searchBar

    const cards = build.create('div')
        .addClass('cards')
        .appendTo(document.querySelector('.main_page'));

    const profilePage = build.create('div')
        .addClass('profile_page')
        .appendTo(document.body);

export default ElementCreator;
