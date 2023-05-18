const filter = () => {
 const button = document.querySelector('.search_img'),
       nameFilter = document.getElementById('name-filter'),
       input = document.querySelector('.search_input'),
       cards = document.querySelector('.cards');

 function clickEnterFilter(e) {
    if (e.type === 'click' || e.key === 'Enter') {
        const filterValue = nameFilter.value.toLowerCase();

        Array.from(cards.children).forEach(card => {
            const name = card.querySelector('.name');
            if (name.innerText.toLowerCase().includes(filterValue)) {
                name.parentElement.closest('.card').style.display = 'block';
                    } else {
                        name.parentElement.closest('.card').style.display = 'none';
            }
        });
    }
 }

 button.addEventListener('click', clickEnterFilter);
 input.addEventListener('keydown', clickEnterFilter);
};

export default filter;
