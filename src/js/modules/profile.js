const profile = () => {
    const cards = document.querySelectorAll('.card'),
          main = document.querySelector('.main_page'),
          goBackBtn = document.querySelector('.profile_page_btn'),
          profilePage = document.querySelector('.profile_page');

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            const name = card.querySelector('.card_info .name'),
                  race = card.querySelector('.card_info .race'),
                  nameProfile = document.querySelector('.profile_name'),
                  raceProfile = document.querySelector('.profile_page #race');

            nameProfile.textContent = name.textContent;
            raceProfile.textContent = race.textContent;

            main.style.display = 'none';
            profilePage.style.display = 'block';
        });
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
