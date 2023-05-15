import filter from './modules/filter.js';
import profile from './modules/profile.js';
import getCharacters from './modules/getCharacters.js';
import ElementCreator from './modules/ElementCreator.js';

window.addEventListener('DOMContentLoaded', () => {
getCharacters();
filter();
profile();
});
