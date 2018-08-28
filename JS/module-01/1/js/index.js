"use strict";

const userLogin = prompt ('Введите логин');
const adminLogin = 'admin';
const adminPassword = String(111);
const denied = 'Доступ запрещен!';
const canceled = 'Отменено пользователем!';
const welcome = 'Добро пожаловать!';

if (userLogin === null) {
    alert (canceled);
} else if (userLogin !== adminLogin) {
    alert (denied);
} else if (userLogin === adminLogin) {
    const userPassword = prompt ('Введите пароль');
    console.log ('логин', userLogin);
  if (userPassword === null) {
    alert (canceled);
} else if (userPassword !== adminPassword) {
    alert (denied);
} else if (userPassword === adminPassword) {
    alert (welcome); 
    console.log ('пароль', userPassword);
}
}