import ElementCreator from './ElementCreator.js';

const build = new ElementCreator();

export default class ErrorMessage {
    static message(msgClass, text, parentSelector) {
        build.create('p')
        .addClass(msgClass)
        .setTextContent(text)
        .appendTo(parentSelector);
    }
}
