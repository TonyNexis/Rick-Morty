import FetchAPI from './FetchAPI.js';
import ElementCreator from './ElementCreator.js';

const profile = () => {
      const build = new ElementCreator();

      const profilePage = build.create('div')
          .addClass('profile_page')
          .appendTo(document.body);

      const profilePageBtn = build.create('button')
          .addClass('profile_page_btn')
          .setInnerHtml(`<svg class="arrow" width="16" height="16" viewBox="0 0 16 16">
          <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"/></path>
          </svg><span>GO BACK</span>`)
          .appendTo(document.querySelector('.profile_page'));

      const profileWrapper = build.create('div')
          .addClass('flex-container')
          .addClass('profile')
          .appendTo(document.querySelector('.profile_page'));

      const main = document.querySelector('.main_page'),
          goBackBtn = document.querySelector('.profile_page_btn'),
          cards = document.querySelector('.cards'),
          profileCard = document.querySelector('.profile_page');

    cards.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card) {
            let urlCharacter = 'https://rickandmortyapi.com/api/character/' + card.id;

            FetchAPI.get(urlCharacter).then(character => {
                let type;
                if (character.type === '') {
                    type = 'Unknown';
                } else {
                    type = character.type;
                }

                let statusIcon;
                if (character.status === 'Alive') {
                    statusIcon = 'status_icon_alive';
                } else if (character.status === 'Dead') {
                    statusIcon = 'status_icon_dead';
                } else {
                    statusIcon = 'status_icon_unknown';
                }

                profileWrapper
                    .setInnerHtml(`
                       <img class="profile_img" src="${character.image}" alt="profile_image">
                       <p class="profile_name">${character.name}</p>
                       <p class="profile_info">Informations</p>
                       <div class="profile_container">
                         <p class="profile_cont_mainText">Gender</p>
                         <p class="profile_cont_secondText">${character.gender}</p>
                       </div>
                       <div class="profile_container">
                         <p class="profile_cont_mainText">Status</p>
                         <p class="profile_cont_secondText"><span class="${statusIcon}"></span>${character.status}</p>
                       </div>
                       <div class="profile_container">
                         <p class="profile_cont_mainText">Specie</p>
                         <p id="race" class="profile_cont_secondText">${character.species}</p>
                       </div>
                       <div class="profile_container">
                         <p class="profile_cont_mainText">Origin</p>
                         <p class="profile_cont_secondText">${character.origin.name}</p>
                       </div>
                       <div class="profile_container">
                         <p class="profile_cont_mainText">Type</p>
                         <p class="profile_cont_secondText">${type}</p>
                       </div>
                       <div class="profile_container">
                       <p class="profile_cont_mainText">Episodes</p>
                       <p class="profile_cont_secondText">${character.episode.length}</p>
                     </div>`);
            });

        main.style.display = 'none';
        profileCard.style.display = 'block';
        // console.log(profilePage);
        // profilePage
        //     .setStyle('display', 'block');
        }
    });

    function goBack() {
        const profileBlock = document.getElementById('profileBlock');
        goBackBtn.addEventListener('click', () => {
            setTimeout(() => {
                main.style.display = '';
                profileCard.style.display = 'none';
                document.querySelector('.profile').innerHTML = '';
            }, 150);
        });
    }

    goBack();
};

export default profile;
