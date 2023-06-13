export default class ProfileFilter {
    constructor() {
        this.button = document.querySelector('.search_img');
        this.nameFilter = document.getElementById('name-filter');
        this.input = document.querySelector('.search_input');
        this.cards = document.querySelector('.cards');

        this.clickEnterFilter = this.clickEnterFilter.bind(this);
    }

    clickEnterFilter(e) {
        if (e.type === 'click' || e.key === 'Enter') {
            const filterValue = this.nameFilter.value.toLowerCase();
            Array.from(this.cards.children).forEach(card => {
                const name = card.querySelector('.name');
                if (name.innerText.toLowerCase().includes(filterValue)) {
                    name.parentElement.closest('.card').style.display = 'block';
                } else {
                    name.parentElement.closest('.card').style.display = 'none';
                }
            });
        }
    }

    search() {
        this.button.addEventListener('click', this.clickEnterFilter);
        this.input.addEventListener('keydown', this.clickEnterFilter);
    }
}