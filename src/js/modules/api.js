const api = () => {
    async function fetchCharacters() {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            const characters = data.results;
            console.log(characters);
            return characters;
        } catch (error) {
            console.log(error);
        }
    }

        fetchCharacters().then(characters => {
            console.log(characters[0].image);
            for (let i = 0; i <= characters.length; i++) {
                let card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = '<img class="card_img" src=`${characters[i].image}`>
                <div class="card_info"">
                  <p class="name">Rock Sanchez</р>
                  <p class="race">Human</p>
                </div>';
            }
        });
};

export default api;
