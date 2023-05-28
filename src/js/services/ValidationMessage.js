import ElementCreator from '../services/ElementCreator.js';

const build = new ElementCreator();

export default class ValidationMessage {
    static message(msgClass, text, parentSelector) {
        build.create('p')
        .addClass(msgClass)
        .setTextContent(text)
        .appendTo(parentSelector);
    }
}
