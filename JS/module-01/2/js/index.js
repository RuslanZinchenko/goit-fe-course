"use strict";

const sharm = 15;
const hurgada = 25;
const taba = 6;
const placeNumber = prompt('Введите количество мест!');
const intPlaceNumber = Math.abs(parseInt(placeNumber));
const min = Math.min(sharm, hurgada, taba);
const max = Math.max(sharm, hurgada, taba);
console.log(placeNumber, intPlaceNumber, isNaN(placeNumber), isNaN(intPlaceNumber));
if (isNaN(intPlaceNumber)) {
    alert('Ошибка ввода!');
} else if (intPlaceNumber > max) {
    alert('Извините, столько мест нет ни в одной группе!');
}
let isConfirm
switch (true) {
    case (taba >= intPlaceNumber):
    isConfirm = confirm('Вы согласны быть в группе taba?') ? 'taba' : null;
    break;
    case (sharm >= intPlaceNumber):
    isConfirm = confirm('Вы согласны быть в группе sharm?') ? 'sharm' : null;
    break;
    case (hurgada >= intPlaceNumber):
    isConfirm = confirm('Вы согласны быть в группе hurgada?') ? 'hurgada' : null;
    break;
}
if (isConfirm) {
    alert (`Приятного путешествия в группе ${isConfirm}`); 
} else if (isConfirm === null) {
    alert ('Нам очень жаль, приходите еще!');
}