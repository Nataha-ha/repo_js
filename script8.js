var val = +prompt('Введите положительное число:');
var pow = +prompt('Введите степень числа:');
function power(val, pow) {
    return (pow == 1) ? val : (val * power(val, pow - 1));
  }
alert(power(val,pow));