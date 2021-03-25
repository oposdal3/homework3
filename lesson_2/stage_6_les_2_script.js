function plus(a, b){
    return a + b;
}
function minus(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function split(a, b){
    return a / b;
}
function mathOperation(arg1, arg2, operation){
    switch (operation){
        case 'плюс': return plus(arg1, arg2);
        case 'минус': return minus(arg1, arg2);
        case 'умножить': return multiply(arg1, arg2);
        case 'разделить': return split(arg1, arg2);
    }
}

alert(mathOperation(5, 5, 'плюс'));  // 10
alert(mathOperation(5, 5, 'минус'));   // 0
alert(mathOperation(5, 5, 'умножить'));   // 25
alert(mathOperation(5, 5, 'разделить'));  // 1