const profile = () => {
    const main = document.querySelector('.main_page'),
          goBackBtn = document.querySelector('.profile_page_btn'),
          profilePage = document.querySelector('.profile_page'),
          cards = document.querySelector('.cards');

          async function fetchCharacter(url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const character = data;
                return character;
            } catch (error) {
                console.log(error);
            }
        }

    cards.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card) {
            const profileBlock = document.querySelector('.profile');
            let urlCharacter = 'https://rickandmortyapi.com/api/character/' + card.id;

            fetchCharacter(urlCharacter).then(character => {
                console.log(character);

                let type;
                if (character.type === '') {
                    type = 'Unknown';
                } else {
                    type = character.type;
                }

                profileBlock.innerHTML = `
            <img class="profile_img" src="${character.image}" alt="profile_image">
            <p class="profile_name">${character.name}</p>
            <p class="profile_info">Informations</p>
            <div class="profile_container">
              <p class="profile_cont_mainText">Gender</p>
              <p class="profile_cont_secondText">${character.gender}</p>
            </div>
            <div class="profile_container">
              <p class="profile_cont_mainText">Status</p>
              <p class="profile_cont_secondText">${character.status}</p>
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


        main.style.display = 'none';
        profilePage.style.display = 'block';
        }
    });

    function goBack() {
        goBackBtn.addEventListener('click', () => {
            setTimeout(() => {
                main.style.display = '';
                profilePage.style.display = 'none';
            }, 150);
        });
    }

    goBack();
};

export default profile;
