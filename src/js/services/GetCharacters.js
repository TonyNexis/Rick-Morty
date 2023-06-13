import FetchAPI from './FetchAPI.js';
import ElementCreator from './ElementCreator.js';

export default class GetCharacters {
    constructor() {
        this.build = new ElementCreator();
    }

    createCard() {
        FetchAPI.get('https://rickandmortyapi.com/api/character').then(data => {
            this.characters = data.results;
            this.cards = document.querySelector('.cards');
            for (let i = 0; i < this.characters.length; i++) {
                this.card = this.build.create('div')
                    .addClass('card')
                    .setAttribute({ id: `${this.characters[i].id}` });

                if (this.characters[i].status === 'Alive') {
                    this.statusIcon = 'status_icon_alive';
                } else if (this.characters[i].status === 'Dead') {
                    this.statusIcon = 'status_icon_dead';
                } else {
                    this.statusIcon = 'status_icon_unknown';
                }

                this.card.setInnerHtml(`<img class="card_img" src="${this.characters[i].image}" alt="">
                <div class="card_info">
                  <p class="name">${this.characters[i].name}</p>
                  <p class="status"><span class="${this.statusIcon}"></span>${this.characters[i].status} - ${this.characters[i].species}</p>
                </div>`);

                this.card.appendTo(document.querySelector('.cards'));
            }
        });
    }
}