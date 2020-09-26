var basket = [
    {
        'name': 'Товар 1',
        'price': 600,
        'count': 5,
    },

    {
        'name': 'Товар 2',
        'price': 700,
        'count': 4,
    }, 

    {
        'name': 'Товар 3',
        'price': 400,
        'count': 8,
    }
];

function countBasketPrice(items) {
    var sum = 0;
    for (var item of items) {
        sum = sum + item.price * item.count;
    }
    return sum;
}

alert(countBasketPrice(basket));