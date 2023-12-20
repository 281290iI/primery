//Практика for - of

//Выведите в консоль все элементы следующего массива:

let arr1 = ['a', 'b', 'c', 'd', 'e'];
for (let h of arr1) {
    console.log(h);
}
//Перебор объекта циклом for-in в JavaScript
//Выведите в консоль все ключи следующего объекта, а после все элементы

let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	console.log(key); 
    console.log(obj[key]);
}

// Цикл while
//Выведите в консоль числа от 1 до 100.

let i = 1;

while (i <= 100) {
	console.log(i);
	i++;
}
// Цикл while
//Выведите в консоль числа от 1 до 100.

let ii = 1;

while (ii <= 100) {
	console.log(ii);
	ii++;
}

// Выведите в консоль числа от 11 до 33.
let i1 = 11;

while (i1 <= 33) {
	console.log(i1);
	i1++;
}

// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.

let num2 = 15;

while (num2 < 1000) {
	num2 = num2 * 3;
}
console.log(num2);

//Пусть в переменной num хранится число. Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двухзначна.

let  num = 11

if (num >=10 && num <= 99) {
    let num1 = String(num);
let sum = (Number(num1[0]) + Number(nam1[1]))
if (sum <= 9) {
    console.log('сумма однозначна')
}
else {
    console.log('сумма двузначна')
}

}
// Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при значение возраста большим 18 лет выводит в консоль значение undefined. Исправьте ошибку автора кода.
let age = 19;
let res;

if (age >= 18) {
 let res; // локальная переменная(ошибка)
 
 if (age <= 23) {
  res = 'от 18 до 23';
 } else {
  res = 'больше 23';
 }
} else {
 res = 'меньше 18';
}

console.log(res);
// Исправленный код
let age1 = 19;
let res1;

if (age1 >= 18) {
 
 if (age1 <= 23) {
  res1 = 'от 18 до 23';
 } else {
  res1 = 'больше 23';
 }
} else {
 res1 = 'меньше 18';
}

console.log(res1);

// Пусть у нас есть переменная min, в которой хранится количество минут от 1 до 60.  определите в какую треть часа попадает указанное количество минут.
let min = 10;

if (min >= 0 && min <= 19) {
 console.log('1 треть');
}

if (min >= 20 && min <= 39) {
 console.log('2 треть');
}

if (min >= 40 && min <= 59) {
 console.log('3 треть');
}
// В переменной arr содержится некоторый массив с числами. Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.
let arr = [1, 2, 3];
let sum;

if (arr.length === 3) {
 console.log(arr[0] + arr[1] + arr[2]);
} else {
    console.log('No')
}
// Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a'.
 let js = 'a28888'
 if (js[0] == 'a') {
    console.log('Да')
 } 
// Дана переменная, содержащая некоторую строку. Проверьте, что эта строка заканчивается на символ 'x'.
let js1 = 'a28888x'
 if (js1[js1.length - 1] == 'x') {
    console.log('Да')
 } 
// Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a' или символ 'b'.
let js2 = 'a28888x'
 if (js2[0] == 'a' || js2[0] == 'b') {
    console.log('Да')
 }

 // Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.

 let num1 = 12340;
let str = String(num1)

 if ( str[str.length-1] == 0) {
     console.log('верно');  
 } else {
     console.log('неверно');
 }

 // Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.

 let nam = 1335757
 let chi = String(nam);
 let ky = chi[chi.length-1]


 if (ky == 0 || ky == 2 || ky == 4 || ky == 6 || ky == 8) {
	console.log('+++');
} else {
	console.log('---');
}

// Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком. Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет.

let per = 11;
let ost = per % 2;
if (ost === 0) {
    console.log('no ost')
} else {
    console.log('ostat =' + ost)
}
// Дано число. Проверьте, что оно делится на 3
let l = 12;
if (l % 3 === 0) {
    console.log('Del')
}

//С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.
for (i > 0; i <= 100; i += 2) {
  console.log(i)
}

//С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.

for (i = 1; i <= 99; i += 2) {
	console.log(i)
  }

//С помощью цикла for выведите в консоль числа от 100 до 0.
  for (i = 100; i >= 0; i--) {
    console.log(i)
    }

//Цикл for для массивов

// Выведите в консоль все элементы следующего массива:
let arr5 = ['a', 'b', 'c', 'd', 'e'];

for(let i = 0 ; i < arr5.length; i++) {
  console.log(arr[i])
}

//Выведите в консоль все элементы следующего массива, за исключением нулевого и последнего:

let arr6 = ['a', 'b', 'c', 'd', 'e'];

for(let i = 1 ; i <= arr6.length - 2; i++) {
	console.log(arr6[i])
  }
  // Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

  let arr4 = [2, 5, 9, 15, 1, 4];

  for (let elem of arr4) {
    if (elem > 3 && elem < 10) {
      console.log(elem);
    }
  }

  //Выведите в консоль те элементы объекта, значения которых - нечетные числа.
let obj2 = {a: 1, b: 2, c: 3, d: 4, e: 5};

for (let el in obj2) { 
	if(obj2[el] % 2 != 0)
	console.log(obj2[el]);
}

//Найдите сумму четных чисел от 2 до 100.

let ress = 0;

for (let i = 2; i <= 100; i++) {
	ress += i;
}
console.log(ress);

// Найдите сумму нечетных чисел от 1 до 99.
let resq = 0;

for (let i = 1; i <= 99; i++) {
	if(i % 2 != 0)
	resq += i;   
}
console.log(resq);

//Найдите произведение целых чисел от 1 до 20.
let at = 1;

for (let i = 1; i <= 20; i++) {
	at = at * i;
}
console.log(at);

// Найдите сумму элементов элементов, являющихся четными числами.
let an = [2, 5, 9, 3, 1, 4];
let re = 0;

for (let elem of an) {
	if(elem % 2 == 0) {
        re += elem;
    }
}
console.log(re);

// Даны три натуральных числа. Возможно ли построить треугольник с такими сторонами. Если это возможно, выведите строку YES, иначе выведите строку NO. Треугольник — это три точки, не лежащие на одной прямой.
unction isTriangle(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
      return "YES";
    } else {
      return "NO";
    }
  }
  
  let side1 = 4;
  let side2 = 5;
  let side3 = 6;
  
  console.log(isTriangle(side1, side2, side3)); // Выведет "YES"
//В офисе, где работает программист Петр, установили кондиционер нового типа. Этот кондиционер отличается особой простотой в управлении. У кондиционера есть всего лишь два управляемых параметра: желаемая температура и режим работы.
//Кондиционер может работать в следующих четырех режимах:
//«freeze» — охлаждение. В этом режиме кондиционер может только уменьшать температуру. Если температура в комнате и так не больше желаемой, то он выключается.
//«heat» — нагрев. В этом режиме кондиционер может только увеличивать температуру. Если температура в комнате и так не меньше желаемой, то он выключается.
//«auto» — автоматический режим. В этом режиме кондиционер может как увеличивать, так и уменьшать температуру в комнате до желаемой.
//«fan» — вентиляция. В этом режиме кондиционер осуществляет только вентиляцию воздуха и не изменяет температуру в комнате. Кондиционер достаточно мощный, поэтому при настройке на правильный режим работы он за час доводит температуру в комнате до желаемой.
//Требуется написать программу, которая по заданной температуре в комнате troom, установленным на кондиционере желаемой температуре tcond и режиму работы определяет температуру, которая установится в комнате через час.

function calculateTemperature(troom, tcond, mode) {
  if (mode === 'freeze') {
    return Math.min(troom, tcond);
  } else if (mode === 'heat') {
    return Math.max(troom, tcond);
  } else if (mode === 'auto') {
    return tcond;
  } else if (mode === 'fan') {
    return troom;
  }
}

// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене или в случае если ничего не введено – «Отменено».
let Who = prompt("Who is this", "");

if (Who == null) {
  alert("Отменено");
} else if (Who == "Админ") {
  let Pasw = prompt("Пароль", "");
  if (Pasw == null) {
    alert("Отменено");
  } else if (Pasw == "Я главный") {
    alert("Здравствуйте!");
  } else {
    alert("Неверный пароль");
  }
} else {
  alert("Я вас не знаю");
}



