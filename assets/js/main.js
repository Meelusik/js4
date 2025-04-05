/*!!!!!!!!!! Задача 1 */
alert('задание 1');
let a = prompt('Введите начальное a');
let b = prompt('Введите конечное b');

function printChet(a, b) {
    if (a < b) {
        for (let i = a; i < b; i++) {
            if (i % 2 == 0) {
                i + 2;
            }
            else {
                i++;
            }
            alert(i);
        }

    } else {
        alert('Введите a меньше b');
    }

}

printChet(a, b)
/* Задача 2 */
alert('задание 2');

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}
/* Задача 3 */
alert('задание 3');
alert('Угадай загаданные числа');
let c = prompt('Введите число');

for (let i = 0; c <= 10; i++) {
    if (c != null) {
        alert('Попробуй еще раз');
        c = prompt('Введите число');
    } else {

    }

}

/* Задача 4 */
alert('задание 4');
let d = prompt('Введите число a');
let e = prompt('Введите число b');

function min(d, e) {
    if (d < e) {
        return true;
    } else if (e < d) {
        return false;
    }
}

if ((min(d, e))) {
    alert(d);
} else if ((min(d, e)) == false) {
    alert(e);
} else {
    alert('Одинаковые значения');
}



/*!!!!!!!!! Задача 5 */
alert('задание 5');
function ask(question, yes, no) {
    if (confirm(question)) { yes(); }
    else { no(); }
}
ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);

/*!!!!!!!!! Задача 6 */
alert('задание 6');
let age = prompt('Ваш возраст');
function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
}
if (checkAge(age) == true) {
    alert("доступ открыт");
} else {
    alert("доступ ограничен");
}

