import ElementCreator from './ElementCreator.js';

const build = new ElementCreator();

export default class Validation {
    static isNotEmpty(value) {
        return value.trim() !== '';
    }

    static isTooLong(value, num) {
        return value.length > num;
    }

    static isTooShort(value, num) {
        return value.length < num;
    }

    static hasNoNumbers(value) {
        const numberCheck = /\d/;
        return numberCheck.test(value);
    }

    static hasNoLetters(value) {
        const numberCheck = /[a-zA-Z]/;
        return numberCheck.test(value);
    }
}