function DividingANumberIntoParts(number){
    let partsNumber = {};
    if (number >= 0 && number <= 999) {
        partsNumber['единицы'] = number % 10;
        partsNumber['десятки'] = Math.floor(number / 10) % 10;
        partsNumber['сотни'] = Math.floor(number / 100) % 10;
        return partsNumber
    }else{
        console.log('Число должен быть в промежутке от 0 до 999 включительно.');
        return partsNumber;
    }
}
console.log(DividingANumberIntoParts(789));