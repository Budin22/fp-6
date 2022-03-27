'use strict';

const mark = prompt('Введите нужную операцию "+","-","*","/"');
const firstNumber = +prompt('Введите первое число');
const secondNumber = +prompt('Введите второе число');

function calc() {
    if (mark === '+') {
        return firstNumber+secondNumber;
    }
    if (mark === '-') {
        return firstNumber-secondNumber;
    }
    if (mark === '*') {
        return firstNumber*secondNumber;
    }
    if (mark === '/') {
        return firstNumber/secondNumber;
    }
}

if (isNaN(firstNumber)) {
    alert('Не верно заполненно поле введите число')
}
else if (isNaN(secondNumber)) {
    alert('Не верно заполненно поле введите число')
}
else if (mark === '+') {
    alert(`Ваше выражение: ${firstNumber}+${secondNumber}=${calc()}`);
}
else if (mark === '-') {
    alert(`Ваше выражение: ${firstNumber}-${secondNumber}=${calc()}`);
}
else if (mark === '*') {
    alert(`Ваше выражение: ${firstNumber}*${secondNumber}=${calc()}`);
}
else if (mark === '/') {
    alert(`Ваше выражение: ${firstNumber}/${secondNumber}=${calc()}`);
}
else {
    alert('Допущена ошибка при заполнении поля операции');
}