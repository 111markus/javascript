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
*/
