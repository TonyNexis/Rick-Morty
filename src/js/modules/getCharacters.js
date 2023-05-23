import FetchAPI from './FetchAPI.js';

const getCharacters = () => {
    FetchAPI.get('https://rickandmortyapi.com/api/character').then(data => {
            const characters = data.results;
            const cards = document.querySelector('.cards');
            for (let i = 0; i < characters.length; i++) {
                let card = document.createElement('div');
                card.classList.add('card');
                card.setAttribute('id', `${characters[i].id}`);

                let statusIcon;
                if (characters[i].status === 'Alive') {
                    statusIcon = 'status_icon_alive';
                } else if (characters[i].status === 'Dead') {
                    statusIcon = 'status_icon_dead';
                } else {
                    statusIcon = 'status_icon_unknown';
                }

                card.innerHTML = `<img class="card_img" src="${characters[i].image}" alt="">
                <div class="card_info">
                  <p class="name">${characters[i].name}</p>
                  <p class="status"><span class="${statusIcon}"></span>${characters[i].status} - ${characters[i].species}</p>
                </div>`;
                cards.appendChild(card);
            }
        });
};

export default getCharacters;
