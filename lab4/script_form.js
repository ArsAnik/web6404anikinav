const nameRegex = /^[А-Яа-яЁё\s-]+$/;
const phoneRegex = /^(\+7|8|7)\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/;

function showError(error_string){
    const error = document.getElementById('form_error');

    error.style.display = "block";
    error.innerHTML = error_string;
}

function hideError(){
    const error = document.getElementById('form_error');

    error.style.display = "none";
    error.innerHTML = '';
}


document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById('form_call');

    const name = document.getElementById('form_name');
    const phone = document.getElementById('form_tel');
    const time = document.getElementById('form_time');

    function checkPhone(){
        if (phone.value == '') {
            showError('Телефон должен быть заполнен');
        } else if (!phoneRegex.test(phone.value)) {
            showError('Неверно введён телефон. Проверьте формат ввода');
        } else {
            hideError();
        }
    }

    function checkName(){
        if (name.value == '') {
            showError('Имя не может быть пустым.');
        }else if(name.value.length < 2) {
            showError('Имя должно быть больше 1 символа.');
        }else if(!nameRegex.test(name.value)){
            showError('Имя содержит неверные символы. Можно использовать только русские буквы.');
        }else {
            hideError();
        }
    }

    function checkTime(){
        if (time.value == '') {
            showError('Заполните время звонка');
        } else {
            hideError();
        }
    }

    name.addEventListener('blur', checkName);
    phone.addEventListener('blur', checkPhone);
    time.addEventListener('blur', checkTime);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        checkName();
        checkPhone();
        checkTime();
    });

});