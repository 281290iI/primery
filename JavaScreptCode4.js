//Даны три натуральных числа. Возможно ли построить треугольник с такими сторонами. Если это возможно, выведите строку YES, иначе выведите строку NO.
//Треугольник — это три точки, не лежащие на одной прямой.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (inputA) => {
  rl.question('', (inputB) => {
    rl.question('', (inputC) => {

    const a = parseInt(inputA);
    const b = parseInt(inputB);
    const c = parseInt(inputC);
    const sum = a + b;
    const sum1 = a + c;
    const sum2 = b + c;
    if ((sum > c) && (sum1 > b) && (sum2 > a)) {
        console.log("YES");
      } else {
        console.log("NO");
      }
    rl.close();
  });
});
});

// Напишите код, который выводит все простые числа из интервала от 2 до n. Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log( i ); // простое число
}


