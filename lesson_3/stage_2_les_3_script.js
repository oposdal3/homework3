let basket = [['яблоки', 53, 10], ['бананы', 75, 6], ['апельсины', 65, 4]];

function countBasketPrice(basket){
    let sum = 0
    for (let i = 0; i < basket.length; i++){
        sum += basket[i][1] * basket[i][2];
    }
    return sum;
}
console.log(countBasketPrice(basket));