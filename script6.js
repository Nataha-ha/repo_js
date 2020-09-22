var arg1;
var arg2;

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return arg1 + arg2;
        case 'difference':
            return arg1 - arg2;
        case 'composition':
            return arg1 * arg2;
        case 'division':
        return arg1 / arg2;
    }

}

var result = mathOperation(4, 5, 'sum');
alert(result);
result = mathOperation(4, 5, 'difference');
alert(result);
result = mathOperation(4, 5, 'composition');
alert(result);
result = mathOperation(5, 5, 'division');
alert(result);


