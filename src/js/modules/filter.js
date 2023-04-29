const filter = () => {
 const button = document.querySelector('.search_img'),
       cards = document.querySelectorAll('.card'),
       nameFilter = document.getElementById('name-filter'),
       input = document.querySelector('.search_input');

 function clickEnterFilter(e) {
    if (e.type === 'click' || e.key === 'Enter') {
        const filterValue = nameFilter.value.toLowerCase();

        cards.forEach(card => {
            const name = card.querySelector('.name');
            if (name.innerText.toLowerCase().includes(filterValue)) {
                card.style.display = 'block';
                    } else {
                card.style.display = 'none';
            }
        });
    }
 }

 button.addEventListener('click', clickEnterFilter);
 input.addEventListener('keydown', clickEnterFilter);
};

export default filter;
