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
*/
