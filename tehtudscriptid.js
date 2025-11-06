// number guessing game

/*const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const maxAttempts = 5;
let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Arva ära number ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Sisesta number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Liiga madal arv, proovi uuesti!");
    } else if (guess > answer) {
      window.alert("Liiga kõrge arv, proovi uuesti!");
    } else {
      window.alert(
        `Õige vastus! Vastus oli ${answer}. Sul kulus ${attempts} katset!`
      );
      running = false;
    }
  }
}


/// CELSIUS TO FAHRENHEIT CONVERTER

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "Select a unit";
  }
}




/// TOIDUKORVI ANALÜÜS

let shoppingCart = [
  { name: "apple", quantity: 4 },
  { name: "banana", quantity: 2 },
  { name: "orange", quantity: 5 },
  { name: "milk", quantity: 1 },
  { name: "bread", quantity: 2 },
];

// arvutan kogusumma

let total = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);

console.log("Kokku:", total);

// lisan jogurti

shoppingCart.push({ name: "yogurt", quantity: 3 });

// lisan õunad

let apple = shoppingCart.find((item) => item.name === "apple");

if (apple) {
  apple.quantity += 3;
} else {
  shoppingCart.push({ name: "apple", quantity: 3 });
}

// eemaldan banaani

shoppingCart = shoppingCart.filter((item) => item.name !== "banana");

// koostan nimekirja

let nimekiri = shoppingCart.map((item) => item.name);
console.log(nimekiri);

// kas milk on olemas?

let milk = shoppingCart.find((item) => item.name === "milk");

if (milk.quantity >= 1) {
  milk = true;
} else {
  milk = false;
}
console.log("Kas milk on:", milk);

// sorteerin kahanevas järjekorras

shoppingCart.sort((a, b) => b.quantity - a.quantity);
console.log("Lõpptulemus:", shoppingCart);

*/
