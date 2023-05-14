import filter from './modules/filter.js';
import profile from './modules/profile.js';
import getCharacters from './modules/getCharacters.js';
import markupGenerator from './modules/markupGenerator.js';

window.addEventListener('DOMContentLoaded', () => {
getCharacters();
filter();
profile();
markupGenerator();
});
