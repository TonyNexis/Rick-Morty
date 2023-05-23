import ElementCreator from './ElementCreator.js';

const build = new ElementCreator();

export default class Validation {
    static isNotEmpty(value) {
        return value.trim() !== '';
    }

    static isTooLong(value) {
        const length = value.length > 20;
        return length;
    }

    static isTooShort(value) {
        const length = value.length < 5;
        return length;
    }

    static hasNoNumbers(value) {
        const numberCheck = /\d/;
        return numberCheck.test(value);
    }

    static hasNoLetters(value) {
        const numberCheck = /[a-zA-Z]/;
        return numberCheck.test(value);
    }

    static message(msgClass, text, parentSelector) {
        build.create('p')
        .addClass(msgClass)
        .setTextContent(text)
        .appendTo(parentSelector);
    }

    static animation(selector) {
        document.querySelector(selector).animate(
            [
              { transform: 'translateX(0)' },
              { transform: 'translateX(5px)' },
              { transform: 'translateX(-5px)' },
              { transform: 'translateX(2.5px)' },
              { transform: 'translateX(-2.5px)' },
              { transform: 'translateX(0)' },
            ],
            {
              duration: 200,
              iterations: 2,
            },
          );
    }
}
