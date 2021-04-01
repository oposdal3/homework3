let n = 2;

while (n < 100) {
    let simple = true;
    for (let i = 2; i <= Math.floor(n / 2 + 1); i++){
        if (i != n){
            if (n % i == 0){
                simple = false;
                break;
            }
        }
    }
    if (simple){
        console.log(n);
    }
    n += 1;
}