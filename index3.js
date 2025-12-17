// constructor = special method for defining the properties and methods of objects
/*
function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);
  this.drive = function () {
    console.log(`You drive the ${this.model}`);
  };
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "Silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);


// class = provides a more structured and cleaner way to work with objects compared to traditional constructor function

function Product(name, price) {
  this.name = name;
  this.price = price;

  this.displayProduct = function () {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  };

  this.calculateTotal = function (salesTax) {
    return this.price + this.price * salesTax;
  };
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("pants", 12.99);
const product3 = new Product("Underwear", 100.0);

product3.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);


//static = keyword that defies properties or methods that belong to a class itself rather than

class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }
  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }
  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);


class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} users online`);
  }
  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");

console.log(user1.username);
console.log(user2.username);
console.log(User.userCount);


// inhertiance = allows a new class to inherit properties and methods from an existing class (parent -> child) helps with code reusability.



class Animal {
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";
}
class Fish extends Animal {
  name = "fish";
}
class Hawk extends Animal {
  name = "Hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();



//super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this = this object
// super = the parent

// getterid ja setterid

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be a positive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be a positive number");
    }
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get area() {
    return `${(this._width * this._height).toFixed(1)} cm2`;
  }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

//

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._FirstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a non-negative number");
    }
  }
}

const person = new Person("tere", "tere2", 124);

console.log(person);


//destructuring = extract values form arrays and objects, then assign them to variables in a convenient way

// {} = to perform object destructuring
// [] = to perform array destructuring

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

//

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


//EXTRACT VALUES FROM OBJECTS

function displayPerson({ firstname, lastname, age, job }) {
  console.log(`name:${firstname}${lastname}`);
  console.log(`age ${age}`);
  console.log(`job ${job}`);
}

const person1 = {
  firstname: "spongebob",
  lastname: "squarepants",
  age: 30,
  job: "Fry cook",
};

const person2 = {
  firstname: "patrick",
  lastname: "star",
  age: 34,
};

const { firstname, lastname, age, job = "unemployed" } = person1;

console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);


// nested objects = objects inside of other objects. Child object is enclosed by a parent objects

// Person{Address{}, ContactInfo{}}
// ShoppingCart{keyboard{}, mouse{}, monitor{}}

// MASSIIVI SEEST VÄÄRTUSE VÕTMINE

const person = {
  fullname: "spongebob squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {
    street: "124 Conch St.",
    city: "Bikini Bottom",
    Country: "Int. Water",
  },
};

for (const property in person.address) {
  console.log(person.address[property]);
} // annab kogu aadressi

console.log(person.fullname);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.street);



class person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new person(
  "Spongebob",
  30,
  "124 Conch St",
  "Bikini Bottom",
  "Int. Waters"
);

const person2 = new person(
  "Patrick",
  37,
  "128 Conch St",
  "Bikini Bottom",
  "Int. Waters"
);

const person3 = new person(
  "Squidward",
  45,
  "126 Conch St",
  "Bikini Bottom",
  "Int. Waters"
);

console.log(person3.address.city);   


///////

const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 },
];

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);

const minFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);

console.log(maxFruit);
console.log(minFruit);
//filter

const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
console.log(yellowFruits);
console.log(lowCalFruits);

 fruits.push({ name: "grapes", color: "purple", calories: 62 });

console.log(fruits);


// SHOW JA HIDE PILT NUPUGA

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", (event) => {
  if (myImg.style.visibility === "hidden") {
    myImg.style.visibility = "visible";
    myButton.textContent = "Hide";
  } else {
    myImg.style.visibility = "hidden";
    myButton.textContent = "Show";
  }
});


// NodeList = Static collection of HTML elements by (id, class, element).
// Can be Created by using querySelectorAll()

let buttons = document.querySelectorAll(".myButtons");

// ADD HTML/CSS PROPERTIES

 buttons.forEach((button) => {
  button.style.backgroundColor = "green";
  button.textContent += ":)";
});

// CLICK event listener

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato"; // target on siin button, nuppu vajutades muutub nupp punaseks
  });
});

// MOUSEOVER + MOUSEOUT event listener

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "tomato"; // target on siin button, nuppu pealt ära liikudes muutub punaseks 
  });
});


// ADD AN ELEMENT

const newButton = document.createElement("button"); //STEP 1
newButton.textContent = "Button 5"; //STEP 2
newButton.classList = "myButtons"; // lisab klassi
document.body.appendChild(newButton); //STEP 3



// classList = element property in javascript used to interact with an elements list of classes (CSS classes)
// Allows you to make reusable classes for many elements

const myButton = document.getElementById("myButton");

myButton.addEventListener("mouseover", (event) => {
  event.target.classList.add("hover"); // kui hiir on nupu peal stiil muutub
});

myButton.addEventListener("mouseout", (event) => {
  event.target.classList.remove("hover"); // kui hiire ära votan  muutus kaob
});

myButton.classList.add("enabled");

myButton.addEventListener("click", (event) => {
  if (event.target.classList.replace("enabled", "disabled")) {
    event.target.textContent += ":)";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});



let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.classList.add("enabled");
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disabled")) {
      event.target.textcontent += ":)";
    }

    event.target.classList.replace("enabled", "disabled");
  });
});
*/
