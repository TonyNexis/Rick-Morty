/* eslint-disable import/extensions */
import FetchAPI from '../services/FetchAPI.js';
import ElementCreator from '../services/ElementCreator.js';
import Router from '../services/Router.js';

export default class ProfilePage {
    constructor() {
        this.build = new ElementCreator();
        this.mainPage = document.querySelector('.main_page');
        this.router = new Router();
    }

    createPage() {
        this.profilePage = this.build.create('div')
            .addClass('profile_page')
            .appendTo(document.body);

        this.profilePageBtn = this.build.create('button')
            .addClass('profile_page_btn')
            .appendTo(document.querySelector('.profile_page'));

        this.arrow = this.build.createSvg()
            .addClass('arrow')
            .setAttribute({ width: '16', height: '16', viewBox: '0 0 16 16' })
            .setInnerHtml('<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"/></path>')
            .appendTo(document.querySelector('.profile_page_btn'));

        this.goBack = this.build.create('span')
            .setTextContent('GO BACK')
            .appendTo(document.querySelector('.profile_page_btn'));

        this.profileWrapper = this.build.create('div')
          .addClass('flex-container')
          .addClass('profile')
          .appendTo(document.querySelector('.profile_page'));

        return this;
    }

    getProfileData() {
        let urlCharacter = `https://rickandmortyapi.com/api/character/${window.cardID}`;

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

                // не работает
                this.profileWrapper = document.querySelector('.profile');

                this.profileWrapper.innerHTML = `
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
                     </div>`;
            });

            this.goBackBtn = document.querySelector('.profile_page_btn');

            this.goBackBtn.addEventListener('click', () => {
              setTimeout(() => {
                this.router.navigateTo('/main');
              }, 150);
          });
    }

    initEventListeners() {
      this.goBackBtn = document.querySelector('.profile_page_btn');

      this.goBackBtn.addEventListener('click', () => {
        setTimeout(() => {
          this.router.navigateTo('/main');
        }, 150);
    });
    }

    // initEventListeners() {
    //     this.goBackBtn = document.querySelector('.profile_page_btn');
    //     this.cards = document.querySelector('.cards');
    //     this.profileCard = document.querySelector('.profile_page');

    //     this.cards.addEventListener('click', (e) => {
    //     const card = e.target.closest('.card');
    //     if (card) {
    //         let urlCharacter = `https://rickandmortyapi.com/api/character/${card.id}`;

    //     FetchAPI.get(urlCharacter).then(character => {
    //             let type;
    //             if (character.type === '') {
    //                 type = 'Unknown';
    //             } else {
    //                 type = character.type;
    //             }

    //             let statusIcon;
    //             if (character.status === 'Alive') {
    //                 statusIcon = 'status_icon_alive';
    //             } else if (character.status === 'Dead') {
    //                 statusIcon = 'status_icon_dead';
    //             } else {
    //                 statusIcon = 'status_icon_unknown';
    //             }

    //             // не работает
    //             this.profileWrapper = document.querySelector('.profile');

    //             this.profileWrapper.innerHTML = `
    //                    <img class="profile_img" src="${character.image}" alt="profile_image">
    //                    <p class="profile_name">${character.name}</p>
    //                    <p class="profile_info">Informations</p>
    //                    <div class="profile_container">
    //                      <p class="profile_cont_mainText">Gender</p>
    //                      <p class="profile_cont_secondText">${character.gender}</p>
    //                    </div>
    //                    <div class="profile_container">
    //                      <p class="profile_cont_mainText">Status</p>
    //                      <p class="profile_cont_secondText"><span class="${statusIcon}"></span>${character.status}</p>
    //                    </div>
    //                    <div class="profile_container">
    //                      <p class="profile_cont_mainText">Specie</p>
    //                      <p id="race" class="profile_cont_secondText">${character.species}</p>
    //                    </div>
    //                    <div class="profile_container">
    //                      <p class="profile_cont_mainText">Origin</p>
    //                      <p class="profile_cont_secondText">${character.origin.name}</p>
    //                    </div>
    //                    <div class="profile_container">
    //                      <p class="profile_cont_mainText">Type</p>
    //                      <p class="profile_cont_secondText">${type}</p>
    //                    </div>
    //                    <div class="profile_container">
    //                    <p class="profile_cont_mainText">Episodes</p>
    //                    <p class="profile_cont_secondText">${character.episode.length}</p>
    //                  </div>`;
    //         });

    //     // this.mainPage.style.display = 'none';
    //     // this.profileCard.style.display = 'block';
    //     }

        // this.goBackBtn.addEventListener('click', () => {
        //     setTimeout(() => {
        //         this.mainPage.style.display = '';
        //         this.profileCard.style.display = 'none';
        //         document.querySelector('.profile').innerHTML = '';
        //     }, 150);
        // });
    // });
    // }
}
