import FetchAPI from './FetchAPI.js';
import ElementCreator from './ElementCreator.js';

const regPage = () => {
    const loginUrl = document.querySelector('#loginUrl'),
          loginPage = document.querySelector('.login_page'),
          regastrationPage = document.querySelector('.reg_page'),
          regForm = document.querySelector('.regFormWrapper'),
          regBtn = document.querySelector('.regbtnForm'),
          build = new ElementCreator();

        loginUrl.addEventListener('click', (e) => {
        e.preventDefault();
        regastrationPage.classList.add('hide');
        loginPage.classList.remove('hide');

        if (document.querySelector('.regMessageError')) {
            document.querySelector('.regMessageError').remove();
        }

        regForm.reset();
    });

    regBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const userData = Object.fromEntries(new FormData(regForm));

        if (document.querySelector('.regMessageError')) {
            document.querySelector('.regMessageError').remove();
        }

        if (!userData.login) {
            regMessage('regMessageError', 'Please enter the desired login', '#regloginBlock');
        } else if (userData.login.length > 20) {
            regMessage('regMessageError', 'Your login is too long', '#regloginBlock');
        } else if (userData.password.length < 5 || userData.password.length > 10) {
            regMessage('regMessageError', 'Password length should be between 5 and 10 characters', '#regpasswordBlock');
        } else if (!/\d/.test(userData.password)) {
            regMessage('regMessageError', 'Password should contain at least one number', '#regpasswordBlock');
        } else if (!/[a-zA-Z]/.test(userData.password)) {
            regMessage('regMessageError', 'Password should contain at least one letter', '#regpasswordBlock');
        } else {
                localStorage.setItem('userData', JSON.stringify(userData));
                regMessage('regMessageOk', 'Registration successful');
                setTimeout(() => {
                    regastrationPage.classList.add('hide');
                    loginPage.classList.remove('hide');
                }, 1000);
        }
    });

    const passwordToggle = document.querySelector('.imgPasswordSwitcher'),
          passwordInput = document.querySelector('#passwordinputWindow');

    passwordToggle.addEventListener('click', () => {
        if (passwordInput.getAttribute('type') === 'password') {
            passwordToggle.src = './assets/img/eye-outline.svg';
            passwordInput.setAttribute('type', 'text');
        } else {
            passwordToggle.src = './assets/img/eye-off-outline.svg';
            passwordInput.setAttribute('type', 'password');
        }
    });

    function regMessage(msgClass, text, selector) {
        build.create('p')
            .addClass(msgClass)
            .setTextContent(text)
            .appendTo(regForm);

        if (selector) {
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
};

export default regPage;
