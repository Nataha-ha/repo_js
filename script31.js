var i = 1;
var simpleArr = [];

while (i <= 100) {
    if (i == 1) {
        simpleArr.push(1);
    } else {
        var result = 2;
        var j = 2;
        while (i % j !== 0) {
            j += 1;
            result += 1;
        }
        if (result == i) {
            simpleArr.push(result);
        }
    }
    i += 1;
}

console.log(simpleArr);