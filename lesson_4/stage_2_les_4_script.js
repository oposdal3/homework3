//let basket = [['яблоки', 53, 10], ['бананы', 75, 6], ['апельсины', 65, 4]]; // было

function countBasketPrice(basket){
    let sum = 0
    for (let i = 0; i < basket['item'].length; i++){
        sum += basket['price'][i] * basket['quantity'][i];
    }
    return sum;
}

let basket = {// стало
item: ['яблоки','бананы','апельсин'],
price: [53, 75, 65],
quantity: [10, 6, 4]
};

console.log(countBasketPrice(basket));
