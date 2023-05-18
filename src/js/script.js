import filter from './modules/filter.js';
import profile from './modules/profilePage.js';
import getCharacters from './modules/getCharacters.js';
import mainPage from './modules/mainPage.js';
import loginPage from './modules/loginPage.js';

window.addEventListener('DOMContentLoaded', () => {
mainPage();
getCharacters();
filter();
profile();
loginPage();
});
