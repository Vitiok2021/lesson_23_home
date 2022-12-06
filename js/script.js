"use strict";
//console.log('Hello, world');   //інструкція, команда
//літерал - фіксоване значення (25 - літерал числа, 'Привіт' - літерал строки)
//const - константа
// ['Вчимо', 'JS'].forEach(alert);
//console.log("вчимо"+" JS");

// let num = 4;  //виражение


// console.log('Вчимо JS')

// console.log('Вчимо')
// console.log('JS')

// console.log('Вчимо') console.log('JS')

// console.log('Вчимо');
// console.log('JS');

// let coloeEyes;

// let user;
// let userName;
// userName = "Вася";
// user = userName;
// console.log(user);

// let u = "45"/"8";
// console.log(typeof u);

let someString = `Привіт!`;  //- рядок (складається з масиву символів і букв)

console.log(someString.length);  // довжина рядка, включаючи пробіли

console.log(someString[0]); //перша літера з масиву рядка someString

console.log(someString.toUpperCase());  //верхній регістр
console.log(someString.toLowerCase());  //нижній регістр

// =============================================

console.log('35' + - "22");
console.log('35' * "22");
// console.log('558' > 22++);

let userCounter = 0;
let newUsers = userCounter++;
console.log(newUsers);
console.log(newUsers);

console.log(!false && 11 || 18 && !"");

let name = 0;
console.log(name ?? 'Без імені');

// ==============================================

if (1==="1") {
    console.log ('Правда!');
} else {
    console.log('Брехня!');
}

if (5=="5") {
    console.log ('Правда!');
} else {
    console.log('Брехня!');
}

let message = (92 > '11' && 58 < 100) ? 'Правда' : 'Брехня';
console.log(message);

if (0) {
    console.log ('Брехня!');
} else if (" ") {
    console.log('Правда!');
}

// =============================================

let num = 8;
while (num) {
    console.log(num);
    num--;
}

for (let num = 0; num<2; num++) {
    for (let size = 0; size<3; size++) {
        if (size === 2) break;
        console.log(size);
    }
}

let num2 = 3;
while (num2) {
    console.log(`Число: ${num2}`);
    num2--;
}

firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        console.log (size);
        if (size ===2) {
            break firstFor ;
        }
    }
}



// =======================================================

let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log (+numOne);

let value = '135.58px';
console.log(parseFloat(value));

let value2 = 58 + 'Фрілансер';
if (typeof value2 !== NaN) {
    console.log('Результат NaN');
}

console.log(Math.max(10, 58, 39, -150, 0));

console.log (parseInt(58.858));

// =======================================================

let fls = "Frilancer";
let text = 'Hi! Я ${fls}';
console.log(text);

let text2 = 'Фрілансер';
console.log(text2.slice(5, 6));

let text3 = 123 + '456';
console.log(text3);

console.log(text2.toLocaleUpperCase());

console.log(text2.slice(3, 6));

console.log(text2.includes('лан', 4));