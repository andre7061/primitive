
const registrForm = document.querySelector(".form");
const password = registrForm.querySelector("#password");
const doublePassword = registrForm.querySelector("#password2");
const city = registrForm.querySelector("#city-select");
const beck = document.querySelector('.beckend');
const spans = beck.querySelectorAll('.beckend__span');
const button = document.querySelector('#btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');


const regex = /^[А-Яа-яЁё\s-]+$/;
const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

name.addEventListener('input', function (e) {
    const value = e.target
    showError(regex, value)
})

function showError(reg, target) {
    if (!reg.test(target.value)) {
        target.nextElementSibling.classList.add("input_error_activ");
        target.classList.add("error");
    } else {
        target.nextElementSibling.classList.remove("input_error_activ");
        target.classList.remove("error");
    }
}




function isPassword(e) {
    e.preventDefault();
    if (password.value !== doublePassword.value && regex.test(name.value)) {
        doublePassword.classList.add("error");
        doublePassword.nextElementSibling.classList.add("input_error_activ");
        return false;
    }
    registrForm.querySelectorAll('input').forEach((input, index) => {
        spans[index].textContent = input.value
    })
    beck.querySelector('.beckend__span-language').textContent = city.value
}
registrForm.addEventListener("submit", isPassword);

name.addEventListener('input', function (e) {
    const value = e.target
    showError(regex, value)
})
email.addEventListener('change', function (e) {
    const value = e.target
    showError(regexEmail, value)
})


i18next.init({
    fallbackLng: ['en', "ru"],
    lng: 'ru',
    debug: true,
    resources: {
        en: {
            translation: {
                "key": "Enter a name:",
                "key2": "Enter your email address:",
                "key3": "Enter the password",
                "key4": "Enter the password again:",
                "key5": "Consent to data processing:",
                "key6": "En",
                "key7": "Send",
                "key8": "Choose a city",
                "key9": "Moscow",
                "key10": "Nizhniy Novgorod",
            }
        },
        ru: {
            translation: {
                "key": "Введите имя:",
                "key2": "Введите email:",
                "key3": "Введите пароль",
                "key4": "Введите пароль повторно:",
                "key5": "Согласие на обрабтку данных:",
                "key6": "Pyc",
                "key7": "Отправить",
                "key8": "Выберите город",
                "key9": "Москва",
                "key10": "Нижний Новгород",
            }
        }

    },
    function(err, t) {
        document.getElementById('userName').textContent = t('key')
    }

});





button.addEventListener('click', () => {
    const lang = i18next.language === 'en' ? 'ru' : 'en'
    i18next.changeLanguage(lang, (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        document.getElementById('userName').textContent = t('key')
        document.getElementById('userEmail').textContent = t('key2')
        document.getElementById('userPasword').textContent = t('key3')
        document.getElementById('userPasword2').textContent = t('key4')
        document.getElementById('userCheckbox').textContent = t('key5')
        button.textContent = t('key6')
        document.querySelector('.form__btn').textContent = t('key7')
        document.getElementById('label-select').textContent = t('key8')
        document.querySelector('.form__option-1').textContent = t('key8')
        document.querySelector('.form__option-2').textContent = t('key9')
        document.querySelector('.form__option-3').textContent = t('key10')
    });
})

