"use strict";

'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let userInput;
let userPass;


while ( userPass !== false || userInput !== null  && attempts !== 0) {
    if ( userInput === null) {
        alert ('Всего хорошего!');
        break;
    }
    console.log(attempts);
    userInput = prompt ('Введите пароль');
    attempts -= 1;
    if (userInput !== null) {
        userPass = passwords.includes(userInput);
        if (userPass === true) {
            alert ('Добро пожаловать!');
            break;
        } else if (attempts === 0) {
        alert ('У вас закончились попытки, аккаунт заблокирован!');
        break;
    } else {
    alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
    }
}
}