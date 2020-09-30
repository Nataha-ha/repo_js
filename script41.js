//Вариант 1, генерируем число.

// var obj = {
//     unit: 0,
//     dozens: 0,
//     hundreds: 0
// };

// var min = 0;
// var max = 999;
// var n;
// n = Math.floor(Math.random() * (max - min) + min);
// console.log(n);


// function f(n) {
//     obj.unit = Math.floor(n%10);
//     obj.dozens = Math.floor(n/10%10);
//     obj.hundreds = Math.floor(n/100%10);

//     return obj;

// }

// f(n);

// console.log(obj);


//Вариант 2, просим пользователя ввести число

var obj = {
    number: +prompt('Введите число от 0 до 999'),
    unit: 0,
    dozens: 0,
    hundreds: 0
};


function f() {
    if (obj.number < 9) {
        obj.unit = obj.number;
    } else if (obj.number > 9 && obj.number <= 999) {
        obj.unit = Math.floor(obj.number % 10);
        obj.dozens = Math.floor(obj.number / 10 % 10);
        obj.hundreds = Math.floor(obj.number / 100 % 10);
    } else {
        console.log('Введенное значение не попадает под заданный диапазон чисел, либо вы ввели не число');
    }
    return obj;

}

f();

console.log(obj);