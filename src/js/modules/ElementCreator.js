class ElementCreator {
    constructor() {
        this.element = null;
    }

    create(tagName) {
        this.element = document.createElement(tagName);
        return this;
    }

    createSvg() {
        this.element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        return this;
    }

    addClass(className) {
        if (this.element && className) {
            this.element.classList.add(className);
        }
        return this;
    }

    setStyle(property, value) {
        if (this.element && property && value) {
            this.element.style[property] = value;
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
