import filter from './modules/filter.js';
import profile from './modules/profilePage.js';
import getCharacters from './modules/getCharacters.js';
import mainPage from './modules/mainPage.js';
import loginPage from './modules/loginPage.js';
import regPage from './modules/regPage.js';

window.addEventListener('DOMContentLoaded', () => {
mainPage();
getCharacters();
filter();
profile();
loginPage();
regPage();

if (localStorage.getItem('login') === 'true') {
    document.querySelector('.login_page').classList.add('hide');
    document.querySelector('.main_page').classList.remove('hide');
}
});
