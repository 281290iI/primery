//Задачи с условными операторами, конструктор if-else, switch-case
//переменная больше 10
let test = 0;
if (test > 10) {
  console.log(123);
} else {
  console.log(456);
}
//переменная меньше 10
let test1 = 0;
if (test1 < 10) {
  console.log(123);
} else {
  console.log(456);
}
// больше или равно 10
let test2 = 10;
if (test2 <= 10) {
  console.log(123);
} else {
  console.log(456);
}
// Проверьте, что переменная test равна 10.
if (test2 == 10) {
  console.log(123);
} else {
  console.log(456);
}
//Проверьте, что переменная test не равна 10.
if (test2 != 10) {
  console.log(123);
} else {
  console.log(456);
}
//Даны переменные test1 и test2. Проверьте, что значение какой из этих переменных больше и выведите соответствующее сообщение.
if (test2 > test1) {
  console.log("Первая больше второй");
} else {
  console.log("Вторая больше первой");
}
//Кроме операторов == и != существует также операторы === и !==, учитывающий тип при сравнении. Давайте рассмотрим различия между ними на примерах.
let tes = "123";
let tes2 = 123;
if (tes != tes2) {
  console.log("Да");
} else {
  console.log("Нет");
}
if (tes !== tes2) {
  console.log("Да");
} else {
  console.log("Нет");
}
console.log(tes == test2);

if (tes === tes2) {
  console.log("Да");
} else {
  console.log("Нет");
}
//Использовать оператьр || для сравнения
let n = 3;
let m = 4;

if (n > 0 || m == 200) {
  console.log("+++");
} else {
  console.log("---");
}
//Операция && имеет приоритет над ||.
if ((n > 0 && n < 5) || (n > 10 && n < 20)) {
  console.log("+++");
} else {
  console.log("---");
}
//Инвертирование логических выражений в JavaScript. Гораздо проще будет использовать оператор !, представляющий собой логическое НЕ.
if (!(tes2 > 0 && tes == 200)) {
  console.log("+++");
} else {
  console.log("---");
}
//Прверка значений типа Boolean
let t = true;

if (t === true) {
  console.log("+++");
} else {
  console.log("---");
}
// Пусть теперь мы хотим проверить значение переменной на ложь. Это можно сделать следующим образом:
if (!t) {
  console.log("...");
} else {
  console.log("---");
}
// Сложные операторы
if (test && !test2) {
  console.log("+++");
} else {
  console.log("---");
}
//Конструкция else if позволяет задавать условия в блоке else. Давайте посмотрим на примере: Преимуществом использования else if вместо нескольких ифов является возможность отловить ситуацию, когда значение переменной num не подходит ни под одно из условий:
let day = 90;
if (day >= 1 && day <= 10) {
  console.log("1 декада");
} else if (day >= 11 && day <= 20) {
  console.log("2 декада");
} else if (day >= 21 && day <= 31) {
  console.log("3 декада");
} else {
  console.log("ошибка");
}
//Перепишите следующий код через switch-case:

let lang = "mk,";

if (lang == "ru") {
  console.log("русск");
} else if (lang == "en") {
  console.log("анг");
} else if (lang == "de") {
  console.log("нем");
} else {
  console.log("язык не поддерживается");
}
//Решение
switch (lang) {
  case "ru":
    console.log("русск");
    break;
  case "en":
    console.log("анг");
    break;
  case "de":
    console.log("нем");
    break;
  default:
    console.log("язык не поддерживается");
    break;
}
//Давайте напишем скрипт, который будет проверять, делится ли нацело одно число на второе:
let a = 10;
let b = 3;

if (a % b === 0) {
  console.log("делится нацело");
} else {
  console.log("делится c остатком");
}
//Код должен проверить, что в числе ровно две цифры:
let nddum = 12;
let strN = String(nddum);
if (strN.length === 2) {
  console.log("Да");
} else {
  console.log("Нет");
}
//Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
let xy = 12345;
let yx = String(xy);
if (yx[0] == 1 || yx[0] == 2 || yx[0] == 3) {
  console.log("да");
} else {
  console.log("нет");
}
// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let month = 9;
if (month >= 1 && month <= 2 && month == 12) {
  console.log("Зима");
}
if (month >= 3 && month <= 5) {
  console.log("Весна");
}
if (month >= 6 && month <= 8) {
  console.log("Лето");
}
if (month >= 9 && month <= 11) {
  console.log("Осень");
}
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
let day = 12;

if (day >= 1 && day <= 10) {
    console.log('1 декада')
} else if (day > 10 && day <= 20) {
    console.log('2 декада')
} else if (day > 20 && day <= 31) {
    console.log('3 декада')
} else {
    console.log('не день месяца');
}

// Пусть в переменной num хранится число. Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двухзначна.

let num = 55;
let sum = 0;

if (num >= 10 && num <= 99) {
  let numString = num.toString();
  for (let i = 0; i < numString.length; i++) {
    sum += parseInt(numString[i]);
  }
  if (sum <= 9) {
    console.log("Сумма цифр однозначна");
  } else {
    console.log("Сумма цифр двухзначна");
  }
} else {
  console.log("Число не находится в диапазоне от 10 до 99");
}
// Перепишите следующий код через тернарный оператор:
let num = 1;
let res;

if (num >= 0) {
	res = '1';
} else {
	res = '2';
}

console.log(res);
//Решение
let num = 1;
let res num >= 0 ? '1' : '2'
console.log(res);



