const markupGenerator = () => {
    class ElementCreator {
        constructor(tagName, className, parentSelector) {
            this.tagName = tagName;
            this.className = className;
            this.parentSelector = parentSelector;
        }

        create() {
            const element = document.createElement(this.tagName);
            element.classList.add(this.className);
            const parentElement = document.querySelector(this.parentSelector);
            parentElement.appendChild(element);
            return element;
        }
    }

    const card = new ElementCreator('div', 'card', '.cards');
    const test = card.create();
    test.textContent = 'hello!';
};

export default markupGenerator;
