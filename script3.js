var a = +prompt('Введите a:');
var b = +prompt('Введите b:');
if (a >= 0 && b >= 0) {
    alert('Разность чисел: ' + (a - b));
} else if (a < 0 && b < 0) {
    alert('Произведение чисел: ' + a * b);
} else {
    alert('Сумма чисел: ' + (a + b));
}