var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
// Сначало идёт прибавление к а 1 а затем присвоение
// полученного числа в переменную с при этом а сохраняет
// полученное число
d = b++; alert(d);           // 1
// Сначало идёт присвоение к d значение b а потом идёт
// прибавление 1 к b
c = (2+ ++a); alert(c);      // 5
// Сначало идёт прибавление к а 1, затем к виртуальной переменной
// кроме значения а ещё прибавляется 2 и записывается в с
// виртуальная переменная стирается
d = (2+ b++); alert(d);      // 4
// Сначало идёт прибавление к виртуальной переменной
// кроме b ещё прибавляется 2 и записывается в d а
// затем к b прибовляется 1
alert(a);                    // 3
// 2 раза к значению а прибавили 1
alert(b);                    // 3
// 2 раза к значению b прибавили 1