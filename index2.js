/* 23.10 

IF statements = if a condition is true, excecute some code
            if not, do something else


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = `You are too old to enter this site`;
  } else if (age == 0) {
    resultElement.textContent = `You can't enter. You were just born.`;
  } else if (age >= 18) {
    resultElement.textContent = `You are old enough to enter this site`;
  } else if (age < 0) {
    resultElement.textContent = `Your age can't be below 0`;
  } else {
    resultElement.textContent = `You must be 18+ to enter this site`;
  }
};


let time = 11;

if (time < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}


let isStudent = false;

if (isStudent) {
  console.log("You are  a student!");
} else {
  console.log("You are not a student");
}


let age = 25;
let hasLicense = false;

if (age >= 16) {
  console.log("You are old enough to drive!");

  if (hasLicense) {
    console.log("You have your license!");
  } else {
    console.log("You do not have your license yet!");
  }
} else {
  console.log("You must be 16+ to have a license");
}



// .checked = property that determines the checked state of an
        HTML checkbox or radio button element

       

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = `You are subscribed!`;
  } else subResult.textContent = `You are not subscribed!`;

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (mastercardBtn.checked) {
    paymentResult.textContent = `You are paying with Mastercard`;
  } else if (paypalBtn.checked) {
    paymentResult.textContent = `You are paying with Paypal`;
  } else {
    paymentResult.textContent = "You must select a payment type";
  }
};



// ternary operator = a shortcut to if{} and else{} statements
//                  helps to assign a variable based on a condition
//                  condition ? codeIfTrue : codeIfFalse;

let age = 21;
age >= 18 ? "You're and adult" : "You're a minor";

let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";

console.log(greeting);



let isStudent = true;
let message = isStudent ? "You are a student" : "You are not a student";

console.log(message);



let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(
  `Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`
);



SWITCH = can be an efficent replacement to many else if statements


let day = ;

switch (day) {
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("It is Tuesday");
    break;
  case 3:
    console.log("It is Wednesday");
    break;
  case 4:
    console.log("It is Thursday");
    break;
  case 5:
    console.log("It is Friday");
    break;
  case 6:
    console.log("It is Saturday");
    break;
  case 7:
    console.log("It is Sunday");
    break;
  default:
    console.log(`${day}) is not a day`);
}
   




let testScore = 42;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 75:
    letterGrade = "B";
    break;
  case testScore >= 50:
    letterGrade = "C";
    break;
  case testScore >= 0:
    letterGrade = "F";
    break;
}

console.log(letterGrade); 



    string methods = allow you to manipulate and work with text (strings)


let username = "Broo bro";

let result = username.startsWith("");

if (result) {
  console.log("Your username can't begin with ' '");
} else {
  console.log(username);
}

console.log(username.charAt(2)); // võtab tähe, algab 0'ist
console.log(username.slice(1)); // lõikab alguse kuni sliceni
console.log(username.toUpperCase()); // teeb kõik tähed suureks
console.log(username.toLowerCase()); // teeb kõik tähed väikseks
console.log(username.replace(username, "nice")); // vahetab sõna välja
console.log(username.replaceAll("bro", "dog")); // võtab tähe, algab 0'ist
console.log(username.repeat(2)); // kordab sõna (kordi) üksteise järel



let phonenumber = "123-456-789";

phonenumber = phonenumber.replaceAll("-", "");

console.log(phonenumber);




//  String slicing = creating a substring from a portion of another string

// string.slice(start,end)



const fullname = "bro code";


let firstname = fullname.slice(0, 3);
let lastname = fullname.slice(4, 8);

let firstChar = fullname.slice(0, 1);
let lastChar = fullname.slice(-1);

console.log(lastChar);


let firstname = fullname.slice(0, fullname.indexOf(" ")); // kõik enne tühikut
let lastname = fullname.slice(fullname.indexOf(" ") + 1);
console.log(firstname);
console.log(lastname);


const email = "bro@gmail.com";

let username = email.slice(0, email.indexOf("@")); // otsib kõik enne @
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);



// METHOD CHANGING = calling one method after another in one continuous line of code.

let username = window.prompt("Enter your username: ");

// no method chaining

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars;

console.log(username);

// method chaining

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();

console.log(username);



                LOGICAL OPERATORS
    - used to combine or manipulate boolean values ( true or false)
                AND = &&    OR =||    NOT = !


const temp = 20;

if (temp > 0 && temp <= 30) {
  console.log("The weather is good");
} else {
  console.log("The weather is bad");
}


const isSunny = true

if (!isSunny){
    console.log("It is CLOUDY");
}
else{
    console.log("It is sunny");
}

//    = assignment operator
//   == comparison operator ( compare if values are equal)
//  === strict eequality operator ( compare if values & datatypes are equal)
//    != inequality operator
//  !== strick inequality operator

const PI = 3.14;

if (PI !== "3.14") {
  console.log("That is NOT Pi");
} else {
  console.log("That is Pi");
}
*/

/*
    VANUSE ANALÜÜS

function kontrolliVanust() {
  let vanus = window.prompt("");
  vanus = Number(vanus);

  if (isNaN(vanus)) {
    window.alert("Sisend pole korrektne, sisestage number uuesti");
    kontrolliVanust();
    return;
  }

  if (vanus >= 0 && vanus <= 6) {
    window.alert("Sa oled liiga noor");
  } else if (vanus >= 7 && vanus <= 16) {
    window.alert("Sa oled põhikooli õpilane ja sööd kell 10");
  } else if (vanus >= 17 && vanus <= 20) {
    window.alert("Sa oled gümnaasiumi õpilane ja sööd kell 11");
  } else if (vanus >= 20 && vanus <= 125) {
    window.alert("Sa oled täiskasvanu ja sööd kell 12");
  } else {
    window.alert("Sisesta õige vanus");
  }
}

kontrolliVanust();


            RUDIMENTARY CALCULATOR

let x = window.prompt("x = ?");
let y = window.prompt("y = ?");
let operation = window.prompt("operation = ?");
let result;

x = Number(x);
y = Number(y);

if (operation === "a") {
  result = x + y;
} else if (operation === "s") {
  result = x - y;
} else if (operation === "m") {
  result = x * y;
} else if (operation === "d") {
  result = x / y;
} else if (operation === "e") {
  result = x ** y;
} else if (operation === "r") {
  result = x % y;
} else {
  window.alert("Unknown operation");
}

window.alert(result);


          // while loop = repeat some code WHILE condition is true

let username = "";

while (username === "" || username === null) {
  username = window.prompt(`Enter your name`);
}
console.log(`Hello ${username}`);



let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt(`Enter your username`);
  password = window.prompt(`Enter your password`);

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("You are logged in!");
  } else {
    console.log("Invalid credentials! Please try again");
  }
}
while (!loggedIn);

        // for loop = repeat some code a LIMITED amount of times

for (let i = 10; i > 0; i--) {
  // ++ liidab 1 ja -- lahutab 1, += ei korda
  console.log(i);
}

console.log("Happy new year!");

for (let i = 1; i <= 20; i++) {
  if (i == 13) {
    continue; // continue jätab vahele ja break lõpetab
  } else {
    console.log(i);
  }
}

        // NUMBER GUESSING GAME


const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum) + minNum);

console.log(answer);


        // FUNCTION - a section of a reusable code
        // declare code once, use it whenever you want
        // Call the function to execute that code.


function happyBirthday(username, age) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log(`Happy birthday dear ${username}!`);
  console.log("Happy birthday to you!");
  console.log(`You are ${age} years old`);
}
happyBirthday("brocode", 25); // et õige järjekord oleks functionil
happyBirthday("Spongebob", 30);
happyBirthday("Patrick", 37);


function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

function isEven(number) {

if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }

  return number % 2 === 0 ? true : false;
}

function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }

}

console.log(isValidEmail("Bro@fakecom"));
console.log(isValidEmail("Elonmusk.com"));


// Variable scope = where a variable is recognized
// and accessible (local vs global)

let x = 3;

function1();

function function1() {
  let x = 1;
  console.log(x);
}

function function2() {
  let x = 2;
  console.log(x);
}

// array = a variable like a structure that can hold more than 1 value



let fruits = ["apple", "orange", "banana", "coconut"];

fruits.sort().reverse();

for (let fruit of fruits) {
  console.log(fruit);
}
  
// Array operator = ... allows an iterable such as an array or string to be expanded into seperate elements
// (unpacks the elements)


let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(minimum);


let username = "Bro code";
let letters = [...username].join("-");

console.log(letters);


let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "poratoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);



// Rest parameters= (...rest) allow a function work with a variable numbers of arguments
// by bundling them into. an array
// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

function openFridge(...foods) {
  console.log(...foods);
}
function getFood(...foods) {
  return foods;
}
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);


function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

//const total = sum(1, 2, 3, 4, 5);
//console.log(`Your total is $${total}`);

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const total = getAverage(85, 100, 85, 90, 50);

console.log(total);


function combineStrings(...strings) {
  return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);



        // DICE ROLLER GAME

function rollDice() {
  const numDice = document.getElementById("numDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < numDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="assets/${value}.svg" alt="Dice ${value}">`);
  }
  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}


          // callback = a function that is passed as an argument to another function

hello(wait);

function hello(callback) {
  console.log("Hello!");
  callback();
}

function wait() {
  console.log("Wait!");
}

function leave() {
  console.log("Leave!");
}

function goodbye() {
  console.log("Goodbye!");
}


sum(displayPage, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}
function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}



    //          forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element
    
    //          array.forEach(callback)
    //          element, index, array are provided
    

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(square);
numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array) {
  array[index] = element * 2;
}

function triple(element, index, array) {
  array[index] = element * 3;
}

function square(element, index, array) {
  array[index] = Math.pow(element, 2);
}

function display(element) {
  console.log(element);
}
 

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowercase(element, index, array) {
  array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.trim().slice(1);
}

function display(element) {
  console.log(element);
}
 


// .map() = accepts a callback and applies that function to each element of an array then returns a new array



const numebrs = [1, 2, 3, 4, 5];
const squares = numebrs.map(square);
const cubes = numebrs.map(cube);

console.log(squares);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}


const students = ["spongebob", "patrick", "squidward", "sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsLower);

function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
}


const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[2]}.${parts[1]}.${parts[0]}`;
}


//        .filter() = creates a new array by filtering out elements


let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}

const ages = [16, 17, 18, 18, 19, 20, 60];
let adults = ages.filter(isAdult);
let children = ages.filter(isChild);

console.log(adults);
console.log(children);

function isAdult(element) {
  return element >= 18;
}

function isChild(element) {
  return element < 18;
}



const fruits = ["apple", "orange", "banana", "coconut", "pomegranate"];
const shortw = fruits.filter(getShortWords);
const longw = fruits.filter(getLongWords);

console.log(shortw);
console.log(longw);

function getShortWords(element) {
  return element.length <= 6;
}

function getLongWords(element) {
  return element.length > 6;
}


        // .reduce() = reduce the elements of an array to a single value


const prices = [5, 30, 100, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element) {
  return accumulator + element;
}


const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);

console.log(maximum);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}


    // function declaration = define a reusable block of code that performs a specific task

function hello(){
  console.log("Hello");
}
 

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

const evenNums = numbers.filter(function (element) {
  return element % 2 === 0;
});



console.log(squares);
console.log(evenNums);


   // function expressions = a way to define a function as values or variables


const hello = function (){
  console.log("Hello");
}

hello();

//


setTimeout(function () {
  console.log("Hello");
}, 3000);


// arrow functions = a concise way to write function expressions
// good for simple functions that you use only once
// (parameters) => some code

const hello = (name, age) => {
  console.log(`Hello ${name}`);
  console.log(`You are ${age} old`);
};

hello("bro", 30);



setTimeout(hello, 3000);

function hello() {
  console.log("Hello");
}

setTimeout(() => console.log("Hello"), 3000); // lühem viis




// lühem viis varasemasest
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);
*/
