//console.log("Hello");
//console.log("I like pizza!");

//window.alert("This is an alert");
//window.alert("I like pizza!");

//document.getElementById("myH1").textContent = "Hello";
//document.getElementById("myP").textContent = "I like pizza!";

// This is a comment

/* 
    This
    Is
    A
    Comment
*/

/* Variable = container that stores value, behaves as if it were the value it conta

1. declaration let x;
2. assignment x = 100;
*/

/* let x;
x = 100;
console.log(x);

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(age);
console.log(price);
console.log(gpa);

console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(`Your GPA is ${gpa}`);


Kuidas kontrollida muutuja tüüpi? 
console.log(typeof isStudent);
*/

/* let fullName = "Bro code";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your age is ${age}`;
document.getElementById("p3").textContent = isStudent;

console.log(typeof fullName);
console.log(`Your name is ${fullName}`); */

/* NÄIDE
let Name = "Mart";
let Age = 37;
let lause = `Tere, minu nimi on ${Name} ja ma olen ${Age} aastat vana.`;
console.log(lause);
*/

//let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//students = students % 2;

// SAAB KA LÜHEMALT KIRJUTADA:
//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//console.log(students);

/* Tehete järjekord, arvuti arvestab järgnevas järjekorras:
1. sulud ()
2. astmes **
3. korrutamine ja jagamine * /
4. liitmine ja lahutamine + -
*/

/* 
let result = 1 + 2 * 3 ** 2;
console.log(result); */

/* Kuidas saada kasutajalt sisendit?
  1. window prompt
  2. HTML textbox


let username;

username = window.prompt("What is your name?");

console.log(username);
 

let username;

document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
};
*/

/* Kuidas teisendada stringi numbriks? (stringid, numbrid, booleanid)


let age = window.prompt("How old are you?");
age = Number(age) + 1;

console.log(age);



type conversion = change the datatype of a value to another (strings, numbers, booleans)

let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


const = muutuja, mis ei muutu
let = muutuja, mis võib muutuda


const PI = 3.14159;
let radius;
let circumference;


radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * pi * radius;


document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference;
};



Counter program
*/

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};
decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
