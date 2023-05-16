class ElementCreator {
    constructor() {
        this.element = null;
    }

    create(tagName) {
        this.element = document.createElement(tagName);
        return this;
    }

    addClass(className) {
        if (this.element && className) {
            this.element.classList.add(className);
        }
        return this;
    }

    setAttribute(attributes) {
        if (this.element && attributes && typeof (attributes) === 'object') {
            for (const key in attributes) {
                this.element.setAttribute(key, attributes[key]);
            }
        }
        return this;
    }

    setInnerHtml(html) {
        if (this.element && html) {
            this.element.innerHTML = html;
        }
        return this;
    }

    setTextContent(text) {
        if (this.element && text) {
            this.element.textContent = text;
        }
        return this;
    }

    appendTo(parentElement) {
        if (this.element && parentElement) {
            parentElement.appendChild(this.element);
        }
        return this;
    }
}

export default ElementCreator;
