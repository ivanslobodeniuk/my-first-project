// 'use strict'

// for (let i = 0; i < 10; i++) {
//     // out.textContent += i;
//     out.innerHTML += i + ' integer ';
// }

// let str = ''; // пустий рядок
// const code = 'ewer'; // чіткод
// document.addEventListener("keypress", event => { // відслідковує нажаті кнопки клавіатури
//     str += event.key; // добавляємо нажаті кнопки
//     out.textContent = str; // виводимо на екран
//     if (code.indexOf(str)) { // накопичує нулі якщо перший символ 'e' і наступні символи співпадають
//         str = ''; // очищуємо якщо символ не правильний
//         return; // вихід із функції
//     }
//     if (str === code) { // якщо чіткод введений правильно
//         out.clear(); // очищаємо екран
//         out.innerHTML = 'secret string'; // виводимо секретну інформацію на екран
//         str = ''; // очищаємо екран
//     }
//     console.log(code.indexOf(str));
// })

// let userName = 'Вася';

// function showMessage() {
//     userName = "Петя"; // (1) изменяем значение внешней переменной

//     let message = 'Привет, ' + userName;
//     console.log(message);
// }

// console.log(userName); // Вася перед вызовом функции

// showMessage();

// console.log(userName); // Петя, значение внешней переменной было изменено функцией

// let userName = 'Вася';

// function showMessage() {
//     let userName = "Петя"; // объявляем локальную переменную 
//     let message = 'Привет, ' + userName; // Петя 
//     console.log(message);
// } // функция создаст и будет использовать свою собственную локальную переменную userName 
// showMessage();
// console.log(userName); // Вася, не изменилась, функция не трогала внешнюю переменную

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//         console.log(i);
//         out.textContent += i + ', ';
//     }
// }

// showPrimes(20);

// function showPrimes(n) {
//     for (let i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;
//         console.log(i);
//     }
// }

// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }

// showPrimes(20);

// function showPrimes(n) {
//     console.log('n = "' + n + '"');
//     nextPrime: for (let i = 2; i < n; i++) {
//         console.log('========== Зовнішній цикл начався! ==========');
//         console.log('i = "' + i + '"');
//         for (let j = 2; j < i; j++) {
//             console.log('---------- Внутрішній цикл начався! ----------');
//             console.log('j = "' + j + '"');
//             if (i % j === 0) {
//                 console.log('i % j === 0 => go the the start: nextPrime!');
//                 continue nextPrime;
//             }
//
//             console.log('---------- Внутрішній цикл закінчився! ----------');
//         }
//
//         console.log('i % j !== 0 => OUR "i" is: "' + i + '"!');
//         console.log('========== Зовнішній цикл закінчився! ==========');
//         out.textContent += i + ', ';
//     }
// }
//
// showPrimes(20);

// function sayHi() {
//     console.log('hello');
// }
// sayHi();

// let fun = sayHi;
// fun();

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else(no);
// }

// function showOk() {
//     alert('ok');
// }

// function showCancel() {
//     alert('you not ok');
// }

// ask('you ok?', showOk, showCancel);

// console.log(null == undefined);

// function hello(name) {
//     let p = console.log(name + ' hello');
//     debugger;
//     say(p);
// }
// hello('door');

// function pow(x, n) {
//     if (n < 0) {
//         alert("Отрицательные значения 'n' не поддерживаются");
//     } else {
//         let result = 1;

//         for (let i = 0; i < n; i++) {
//             result *= x;
//         }

//         return result;
//     }
// }
// console.log(pow(3, 2));

// function pow(x, n) {
//   if (n < 0) {
//     alert("Отрицательные значения 'n' не поддерживаются");
//     return;
//   }

//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let admin = {
//     name: 'ivan',
//     age: 33
// };

// admin.country = 'ukraine';

// delete admin.age;

// // в середині обєкта константи можна міняти його вміст
// const user = {
//     name: 'john'
// };

// user.name = 'ted';

// user.my_age = 46;

// let key = 'name';

// console.log(admin[key]);

// console.log(admin.key);

// console.log(user[key]);

// console.log(admin.country);

// let fruit = prompt('Ціна фрукта за кілограмм', 'apple');

// let bag = {
//     [fruit]: 3.50
// };

// console.log('cost ' + bag.apple);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// let sum = 0;
//
// function sumSal () {
//     for (let key in salaries) {
//         sum += salaries[key];
//     }
//
//     console.log(sum);
// }
//
// sumSal();

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// console.log(menu.age?.elem, menu.width.toFixed(2));
//
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         console.log(typeof (typeof obj[key]));
//
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2;
//             console.log('number: ' + obj[key]);
//         } else if (typeof obj[key] === 'string') {
//             console.log('string: "' + obj[key] + '"');
//         }
//     }
// }
//
// multiplyNumeric(menu);

// let schedule = {};
// let notEmptyObject = {
//     key1: 100,
//     key2: 200,
//     key3: 300
// };
//
// function checkEmpty (object = {}) {
//    for (let key in object) {
//        return false
//    }
//
//    return true
// }
//
// console.log(checkEmpty(schedule));
// console.log(checkEmpty(notEmptyObject));

// let message = {
//     say: "Hello!"
// }
// message.say = 5;
// let phrase = message;
// let emptyObj1 = {};
// let emptyObj2 = {};
// console.log(message.say);
// console.log(phrase.say);
// console.log(message === phrase);
// console.log(emptyObj1 === emptyObj2);

// let user = {
//     name: "Вася"
// };
//
// let id = Symbol("id");
//
// user[id] = 1;
//
// console.log( user[id] );

// let user = {
//     name: "Jon",
//     age: 30,
//     sayHi: function () {
//         console.log(this.name + " hello!");
//     }
// }
//
// let user1 = {
//     name: "Sofia",
//     age: 5,
//     sayHi: function () {
//         console.log(this.name + " hello!");
//     }
// }
//
// function hi() {
//     console.log(this);
// }
//
// hi();
// user.sayHi();
// user1.sayHi();

// function User() {
//     console.log(new.target);
// }
// User();
// new User();

// function User(name) {
//     if (!new.target) {
//         return new User(name);
//     }
//
//     this.name = name;
// }
//
// let vassal = User("Ivan");
// console.log(vassal.name);

// let User = function (name, age) {
//     this.name = name;
//     this.age = age;
//     this.value = true;
//     this.sayHi = function () {
//         console.log(this.name + ' hello');
//     }
// }
// let roman = new User('roman', 31);
// let ivan = new User('ivan', 33);
// roman.sayHi();
// ivan.sayHi();
// console.log(roman, ivan);
// console.log(roman < ivan, roman !== ivan );

//                               Symbol.toPrimitive the best method!

// let user = {
//     name: "John",
//     money: 1000,
//
//     [Symbol.toPrimitive](hint) {
//         console.log(`hint: ${hint}`);
//         return hint === "string" ? `{name: "${this.name}"}` : this.money;
//     }
// }
//
// console.log(user +'');
// console.log(+user);
// console.log(user +500);

// function Calculator() {
//
//     this.read = function() {
//         this.a = +prompt('a?', '0');
//         this.b = +prompt('b?', '0');
//     };
//
//     this.sum = function() {
//         return this.a + this.b;
//     };
//
//     this.mul = function() {
//         return this.a * this.b;
//     };
// }
//
// let calculator = new Calculator();
// calculator.read();
//
// console.log( "Summa=" + calculator.sum() );
// console.log( "Multi=" + calculator.mul() );

// let user = {name: "John"};
//
// console.log(user + ''); // [object Object]
// console.log(user.valueOf() === user); // true (вертає сам обєкт)

// let user = {
//     name: "John",
//
//     toString() {
//         return this.name;
//     }
// };
//
// console.log(user +''); // toString -> John
// console.log(user + 500); // toString -> John500

// let obj = {
//     toString() {
//         return "2";
//     }
// };
//
// console.log(obj + 2 + ';', obj * 2);

//                                          call

// let out = document.querySelector('.out');
// let text = document.querySelector('.text');
// let b1 = document.querySelector('.b-1');
// let b2 = document.querySelector('.b-2');
//
// let hide = function () {
//     this.style.opacity = '100%';
//     this.style.background = 'blue';
//     this.style.border = 'black solid 1px';
// }
//
// let visible = function () {
//     this.style.opacity = '100%';
//     this.style.background = '';
//     this.style.border = '';
// }
//
// b1.onclick = function () {
//     hide.call(text);
// }
//
// b2.onclick = function () {
//     visible.call(text);
// }

// text.onclick = hide;
// hide();

//                                                       bind

// let out = document.querySelector('.out');
let text = document.querySelector('.text');
let b1 = document.querySelector('.b-1');
let b2 = document.querySelector('.b-2');
//
let funcSet = function (opacity, bg, border) {
    this.style.opacity = opacity;
    this.style.background = bg;
    this.style.border = border;
}

let bindHide = funcSet.bind(text, '100%', '', '');
// let binVisible = funcSet.bind(text, '100%', 'green', 'black solid 1px');

b1.onclick = bindHide;
// b2.onclick = binVisible;

b2.onclick = f;

function f() {
    // b2.style.backgroundColor = 'green';
    text.style.backgroundColor = randomColor();
}

function randomColor() {
    let hex = Math.random() * 0xFFFFFF;
    return "#" + ("000000" + hex.toString(16)).slice(-6);
}


//                                          number

// IEEE 754

// let sum = 0.1 + 0.2;
// let num = 125;
//
// console.log(num.toString(2)); // чило 125 в 2 бітній системі
// console.log(num.toString(32));
// console.log(125..toString(16)); // те саме тільки навпряму, без змінної
// console.log(1e500); // занатто велике число переповнить 64 бітне сховище, видасть infinity
// console.log(0.1+0.2); // безкінечна дріб 2 бітній системі
// console.log(0.1.toFixed(20)); // заокруглюємо до 20 нулів після коми
// console.log(sum.toFixed(2)); //string
// console.log(+sum.toFixed(2)); //number
// console.log(9999999999999999); // 52 біт не хватає, при записі пропадуть молодші розряди
// console.log(isNaN(NaN)); // true
// console.log(isNaN('str')); // true
// console.log(isFinite('15')); // true
// console.log(isFinite('str')); // false
// console.log(isFinite(Infinity)); // false
// console.log(Object.is(NaN, NaN)); // NaN === NaN
// console.log(Object.is(0, -0)); // 0 === -0
// console.log(Number('100px')); // те саме що і console.log(+'100px');
// console.log(parseInt('100px', 10)); // 100, якщо не буде цифр то викине NaN, верне тільки цілі числа
// console.log(parseFloat('12.5em')); // 12.5, якщо не буде цифр то викине NaN, верне тільки першу крапку
// console.log(Math.pow(2, 5)); //підносим в степінь

// завдання 1
// let a = +prompt('num 1', '');
// let b = +prompt('num 2', '');
// console.log(a + b);

// завдання 2
// console.log( Math.round(6.35 * 10) / 10); // 6.4

//завдання 3
// function readNumber() {
//     let num;
//
//     do {
//         num = prompt("Введите число", 0);
//     } while ( !isFinite(num) );
//
//     if (num === null || num === '') return null;
//
//     return +num;
// }
//
// alert(`Число: ${readNumber()}`);

// завдання 4

//                                        string

// function sum (a, b) {
//     return a + b;
// }
// console.log(`a + b = ${sum(5, 6)}`);

// let guestList = `Guests:
// * sem
// * ted
// * jim
// `;

// let guestList = "Guests: \n * sem\n * ted\n * jim"; // те саме що і через обернені лапки
// let str = 'string'
//
// console.log(guestList);
// console.log('\u00A9'); // "\" - символ екранування, "u00A9" - unicode
// console.log('\'i live in city\'') // екрануємо лапки
// console.log('i\nr'.length); // 3 а не 4, "\n" рахує як 1 символ
// console.log(str[0]);
// console.log(str[6]);
// console.log(str[str.length -1]); // так краще, якщо хочеш найти останній символ

// for (let char of str) {
//     console.log(char);
// }

// let str = 'Hi';
// str = 'h' + str[1];
// console.log(str); // hi

// let str1 = 'this is a sample string';
//
// console.log(str1.indexOf('this', 1)); // -1 співпадінь не найдено, томущо начинали не із '0' а з '1'

// let str = 'Ослик Иа-Иа посмотрел на виадук';
//
// let target = 'Иа'; // цель поиска
//
// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos === -1) break;
//
//     console.log( `Найдено тут: ${foundPos}` );
//     pos = foundPos + 1; // продолжаем со следующей позиции
// }

// console.log(~2); // побітове НЕ(~), розраховується по формулі "-(n+1)"

// старий метод
// let str = "Widget";
//
// if (~str.indexOf("Widget")) {
//     console.log( 'співпадіння є' );
// }
// // новіший метод
// console.log( "Widget with id".includes("Widget") ); // true

// let str = 'direct'
// console.log(str.slice(2, 4)); // з 2 по 3
// console.log( str.slice(-4, -1) ); // з 2 по 4

//                                           unicode

// console.log( "a".codePointAt(0) ); // 97
// console.log( String.fromCodePoint(80) ); // P

// let str = '';
//
// for (let i = 1; i <= 220; i++) {
//     str += String.fromCodePoint(i);
// }
// console.log( str );

// console.log('𝒳'[0]);
// console.log( "S\u0307\u0323".normalize() === "S\u0323\u0307".normalize() ); // $ === $

//                                            масиви

// let arr = ['cherry'];
//
// arr[2] = 'apple';
// arr[3] = [1, 2, ''];
// arr[8] = 'melon';
//
// console.log(arr);
// console.log(arr.at(-1)); // шукаємо останній елемент за допомогою 'at'

// pop/push - стирає/добавляє останній елемент
// shift/unshift - стирає/добавляє перший елемент

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);

// arr.splice(index[, deleteCount, elem1, ..., elemN])
// console.log(arr.splice(0, 3));
// console.log(arr.splice(5, 0, 6));

// arr.slice([start], [end])
// console.log(arr.slice(1, 3));

// arr.concat(arg1, arg2...)
// console.log(arr.concat([2, 5]));

// arr.forEach(function(item, index, array) {
//     console.log(`${item} have position ${index} in ${array}`); // ... doing something with item
// });

// arr.indexOf(item, from(index))
// arr.lastIndexOf(item, from(index))
// arr.includes(item, from(index))

// let result = arr.find(function(item, index, array) {
//     // если true - возвращается текущий элемент и перебор прерывается
//     // если все итерации оказались ложными, возвращается undefined
// });
// let result1 = arr.findIndex(function(item, index, array) {
//     // если true - возвращается текущий элемент и перебор прерывается
//     // если все итерации оказались ложными, возвращается undefined
// });
// let results = arr.filter(function(item, index, array) {
//     // если true - элемент добавляется к результату, и перебор продолжается
//     // возвращается пустой массив в случае, если ничего не найдено
// });

// let arr = ['filter', 'online', 'clarity', '',NaN];
// let arr1 = [5, 7, 3.2, 1, 4, 11, 7.1];

// arr.map(function (item, index, array){
//     // нове значення замість елементу
// });

// let lengths = arr.map(item => item.length);
// console.log(lengths);

// arr.sort(function (a, b){
//     console.log(a+ ' and ' +b);
// });

// arr1.sort( (a, b) => a - b ); // сортує від меншого до більшого
// arr1.reverse(); // не сортує а розвертає масив дзеркально
// arr1.sort(); // сортує від 0 до 9 по першій цифрі
// console.log(arr1);

// function camelize(str) {
//     return str
//         .split('-')
//         .map(
//             (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('');
// }
//
// console.log(camelize("list-style-image"));

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// }
// let result = arr.reduce((sum, current) => sum + current, 0);
// console.log(arr, result);


//                                      symbol.iterator

// let range = {
//     from: 1,
//     to: 5,
//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },
//     next() {
//         if (this.current <= this.to) {
//             return { done: false, value: this.current++ };
//         } else {
//             return { done: true };
//         }
//     }
// };
//
// for (let num of range) {
//     console.log(num);
// }

// for (let char of 'range') {
//     console.log(char);
// }

//                                  map();

// new Map() // создаёт коллекцию
// map.set(key, value) // записывает по ключу key значение value
// map.get(key) // возвращает значение по ключу или undefined, если ключ key отсутствует
// map.has(key) // возвращает true, если ключ key присутствует в коллекции, иначе false
// map.delete(key) // удаляет элемент по ключу key
// map.clear() // очищает коллекцию от всех элементов
//     map.size // возвращает текущее количество элементов
// map.keys() – возвращает итерируемый объект по ключам,
//     map.values() – возвращает итерируемый объект по значениям,
//     map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

// let map = new Map();
//
// map.set("1", "str1");    // строка в качестве ключа
// map.set(1, "num1");      // цифра как ключ
// map.set(true, "bool1");  // булево значение как ключ
//
// console.log(map.get(1)); // "num1"
// console.log(map.get("1")); // "str1"
// console.log(map.size); // 3

// let john = { name: "John" };
//
// // давайте сохраним количество посещений для каждого пользователя
// let visitsCountMap = new Map();
//
// // объект john - это ключ для значения в объекте Map
// visitsCountMap.set(john, 123);
//
// console.log(visitsCountMap.get(john)); // 123
// console.log(visitsCountMap);

// let john = { name: "John" };
//
// let visitsCountObj = {}; // попробуем использовать объект
//
// visitsCountObj[john] = 123; // возьмём объект john как ключ
//
// // Вот как это было записано!
// console.log( visitsCountObj["[object Object]"] ); // 123
// console.log( visitsCountObj);

//                                  set();

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false
// set.clear() – удаляет все имеющиеся значения
//     set.size – возвращает количество элементов в множестве

// let map = new Map([
//     ['1',  'str1'],
//     [1,    'num1'],
//     [true, 'bool1']
// ]);
//
// console.log( map.get('1') ); // str1

// map from obj
// let obj = {
//     name: "John",
//     age: 30
// };
//
// let map = new Map(Object.entries(obj));
// console.log(obj); // [[Prototype]]: Object
// console.log(map); // [[Prototype]]: Map

// obj from map
// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);
//
// let obj = Object.fromEntries(map.entries()); // создаём обычный объект
// console.log(map);
// console.log(obj);

// let josh = {name: 'josh'};
// let arr = [josh];
// josh = null; // дані не пропали, тому що ми об'єкт josh помістили в массив arr
// console.log(arr);

// те саме з map();
// let josh = {name: 'josh'};
// let map = new Map();
// map.set(josh, 'true');
// josh = null;
// console.log(map); // {obj => 'true'}

//                                     weakMap();

// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)

// let john = { name: "John" };
// let weakMap = new WeakMap();
// weakMap.set(john, "...");
// john = null; // об'єкт john стерто із пам'яті!

//                                       Date and time

// Существуют методы получения года, месяца и т.д. из объекта Date:
//     getFullYear()
// Получить год (4 цифры)
// getMonth()
// Получить месяц, от 0 до 11.
// getDate()
// Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Получить, соответственно, часы, минуты, секунды или миллисекунды.

// let now = new Date(2014, 0, 1, 0, 0, 0, 0);
// let now = new Date();
// console.log('Year ' +now.getFullYear(), 'Month ' +now.getMonth(), 'Day ' +now.getDate(),
//     'Hour ' +now.getHours(), 'Minute ' +now.getMinutes(), 'Second ' +now.getSeconds(), 'MS ' +now.getMilliseconds());
// console.log( new Date().getTimezoneOffset() );

// let Jan01_1970 = new Date();
// console.log(Jan01_1970.getTime()); // кількість мілісекунд з 1.01.1970 до сьогодні
// let Jan02_1970 = new Date(24 * 3600 * 1000); // одна доба в мілісекундах(24 години)
// console.log(Jan02_1970.getTime());

//                                   JSON

// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.

// JSON поддерживает следующие типы данных:
//
//     Объекты { ... }
// Массивы [ ... ]
// Примитивы:
//     строки,
//         числа,
//         логические значения true/false,
//     null.

// JSON является независимой от языка спецификацией для данных,
// поэтому JSON.stringify пропускает некоторые специфические свойства объектов JavaScript.
//
//     А именно:
//
//     Свойства-функции (методы).
//         Символьные ключи и значения.
//     Свойства, содержащие undefined.

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
// };
//
// let jsonStudent = JSON.stringify(student); // переробляємо об'єкт student в формат JSON
// console.log(typeof jsonStudent);
// console.log(jsonStudent);
//
// let parsJsonStudent = JSON.parse(jsonStudent); // тепер назад в об'єкт
// console.log(parsJsonStudent);

//                                      Рекурсія - коли функція викликає саму себе

// function pow(x = 2, n = 4) {
//     let result = 1;
//
//     for (let i = 0; i < n; i++) {
//         result = result * x;
//     }
//     return result;
// }
// console.log(pow());

// before iteration
// result = 1

// iteration 1 (n = 0)
// result = 1 * (x = 2) = 2

// iteration 2 (n = 1)
// result = 2 * (x = 2) = 4

// iteration 3 (n = 2)
// result = 4 * (x = 2) = 8

// iteration 4 (n = 3)
// result = 8 * (x = 2) = 16

// stop iteration
// result = 16

// let obj = { // це не відноситься до рекурсії, просто приклад виводу ключа у вигляді пустого рядка
//     '': 'wow',
//     'true': 'one'
// };
// console.log(obj[''], obj.true);

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }
//
// console.log( pow(4, 4) );

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x ** n;
//     }
// }
//
// console.log( pow(2, 3) );

// function pow(x, n) {
//         return x ** n;
// }
//
// console.log( pow(2, 4) );

// let pow = (x, n) => x ** n;
// console.log(pow(2, 3));

//                                 Залишкові параметри

// function sumAll(...args) { // можна безкінечно добавляти аргументи, ...args можна добавляти тільки в кінець
//     let sum = 0;
//     console.log(args.length); // всі ...args додаються в массив
//     for(let arg of args) sum += arg;
//     return sum;
// }
// console.log(sumAll(3,8,9));

// let arr = [3, 5, 1];
// console.log( Math.max(...arr) ); // пишем через три крапки, інакще буде NaN

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// console.log( Math.max(...arr1, ...arr2) ); // а так ми переберемо два і більше массивів

// let str = "Hello";
// console.log( [...str] ); // 'H', 'e', 'l', 'l', 'o', перебераємо рядок
//
// let str1 = "Hello";
// console.log( [Array.from(str1)] ); // ['H', 'e', 'l', 'l', 'o'] переробимо рядок в массив

//                                       Замикання і лексичне оточення

// let name = "John";
// function sayHi() {
//     console.log("Hi, " + name);
// }
// name = "Pete";
// sayHi(); // Hi, Pete

// "Переменная" – это просто свойство специального внутреннего объекта: Environment Record.
// «Получить или изменить переменную», означает, «получить или изменить свойство этого объекта».

//                                       getter and setter

// let obj = {
//     get propName() {
//         // гетер, код виконано під час отримання obj.propName
//     },
//
//     set propName(value) {
//         // сетер, код виконано під час встановлення obj.propName = value
//     }
// };
// Гетер працює, коли obj.propName зчитується, сетер – коли він призначається.

// let user = {
//     name: "Тарас",
//     surname: "Мельник",
//
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// };

// user.fullName = 'Микола Крук'
// console.log(user.fullName);

// let user = {
//     name: "Тарас",
//     surname: "Мельник",
//     fullName: function () {
//         return `${this.name} ${this.surname}`;
//     }
// };
//
// console.dir(user.fullName);

// let user = {
//     get name() {
//         return this._name;
//     },
//
//     set name(value) {
//         if (value.length < 4) {
//             console.log("Ім’я занадто коротке, потрібно щонайменше 4 символи");
//             return;
//         }
//         this._name = value;
//     }
// };
//
// user.name = "Петро";
// console.log(user.name);
//
// user.name = "";


//                                       flags

// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

// let user = {
//     name: "John"
// };
//
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name'); // покажемо прапори властивостей об'єкта user
// console.log( JSON.stringify(descriptor, null, 2 ) ); // відобразимо через JSON
// console.log(descriptor); // відобразимо як звичайний об'єкт

// let arr = 'console, 15, 23, sos, rise, coconut, bread'.split(',');
// console.log(arr); // масив

//                               function.prototype.constructor

// function Rabbit(name) {
//     this.name = name;
//     console.log(name);
// }
//
// let rabbit = new Rabbit("White Rabbit");
//
// new rabbit.constructor("Black Rabbit");

// let animal = {
//     eats: true
// };
//
// let rabbit = Object.create(animal, { // додамо нову властивість об'єкту rabbit
//     jumps: {
//         value: true
//     }
// });
//
// console.log(rabbit.jumps);

// Ми можемо використати Object.create, щоб клонувати об’єкт ефективніше ніж циклом for..in:
// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
// Таким чином ми створюємо справжню копію об’єкта obj, включаючи всі властивості: перелічувані
// та не перелічувані, сетери/гетери – з правильним значенням [[Prototype]].
// Маніпуляція з [[Prototype]] може призвести до порушення внутрішньої оптимізації для операції
// з доступу до властивості об’єкта.

// let obj = {};
//
// let key = prompt("Введіть ключ", "__proto__");
// obj[key] = "певне значення";
//
// console.dir(obj[key]);

// let obj = Object.create(null);
//
// let key = prompt("Введіть ключ", "__proto__");
// obj[key] = "певне значення";
//
// console.log(obj[key]);

// let animal = {
//     eats: true
// };
//
// let rabbit = Object.create(animal); // створюється новий об’єкт з прототипом animal
//
// console.log(Object.getPrototypeOf(rabbit));

//                               Object.create(proto)

// let proto = {};
//
// let obj = Object.create(proto); // Object.create(proto, [descriptors]) –
// // створює пустий об’єкт з переданим proto як [[Prototype]] (може дорівнювати null),
// // та необов’язковими дескрипторами властивостей.
//
// console.log(Object.getPrototypeOf(obj)); // Object.getPrototypeOf(obj) –
// // повертає [[Prototype]] об’єкту obj (так само як і гетер __proto__).
//
// console.log(Object.setPrototypeOf(obj,proto)); // Object.setPrototypeOf(obj, proto) –
// // встановлює [[Prototype]] об’єкту obj значення proto (так само як і сетер __proto__).

//                                 class

// class MyClass {
//     // методи класу
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
// ...
// }

// example

// class User {

//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(this.name);
//   }

// }

// // Використання:
// let user = new User("Іван");
// user.sayHi();

                          // GitHab ShowAwatar

// async function showAvatar() {

//   // зчитуємо наш JSON
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();

//   // зчитуємо користувача github
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // показуємо аватар
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // очікуємо 3 секунди
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();




// function loadJson(url) {
//   return fetch(url)
//     .then(response => response.json());
// }

// function loadGithubUser(name) {
//   return loadJson(`https://api.github.com/users/${name}`);
// }

// function showAvatar(githubUser) {
//   return new Promise(function(resolve, reject) {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   });
// }

// // Використаємо їх:
// loadJson('/article/promise-chaining/user.json')
//   .then(user => loadGithubUser(user.name))
//   .then(showAvatar)
//   .then(githubUser => alert(`Завершили показ ${githubUser.name}`));

// let numbers = [];

// numbers = new Proxy(numbers, {
//   set(target, prop, val) { // для перехоплення запису властивості
//     if (typeof val == 'number') { // якщо значення буде числом
//       target[prop] = val;
//       return true;
//     } else {
//       return false;
//     }
//   }
// });

// numbers.push(1);
// numbers.push(2);
// // numbers.push('true'); // Uncaught TypeError: 'set' on proxy: trap returned falsish for property '2' at Proxy.push (<anonymous>)

// console.log(numbers);

// console.log(Array.from(document.body.childNodes).filter);

// console.log( document.head.nextSibling );

// console.log( document.head.nextElementSibling );

// console.log(document.body instanceof Element);

// console.dir(document.firstChild.nodeType);

// Element
// Node . ELEMENT_NODE (1).
// Attr
// Node . ATTRIBUTE_NODE (2).
// An exclusive Text node
// Node . TEXT_NODE (3).
// CDATASection
// Node . CDATA_SECTION_NODE (4).
// ProcessingInstruction
// Node . PROCESSING_INSTRUCTION_NODE (7).
// Comment
// Node . COMMENT_NODE (8).
// Document
// Node . DOCUMENT_NODE (9).
// DocumentType
// Node . DOCUMENT_TYPE_NODE (10).
// DocumentFragment
// Node . DOCUMENT_FRAGMENT_NODE (11).
// ✔MDN

// console.log( document.tagName ); // undefined
// console.log( document.nodeName); // #document

// console.log(document.body.innerHTML); // cool

// document.body.innerHTML += "<div>Привіт!</div>";
// document.body.innerHTML += "<div>ugiugiygouig</div>";
// document.body.outerHTML = '<p>Новий елемент</p>'; // lol

// let div = document.createElement('div');
// let textNode = document.createTextNode('От і я');

// let element = document.querySelector('.out')

// function handler() {
//   console.log( 'Дякую!' );
// }

// element.addEventListener("click", handler);