import filter from './modules/filter.js';
import profile from './modules/profile.js';
import getCharacters from './modules/getCharacters.js';
import mainPage from './modules/mainPage.js';

window.addEventListener('DOMContentLoaded', () => {
mainPage();
getCharacters();
filter();
profile();
});
