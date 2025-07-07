// ===== Semi-colon and JS Statements =====
let text = "Hello People"; //This is a statement
 alert(text) //This is a statement and semi-colon is not required

 //When is semi-colon required for JS Statements?

let name = "Kay"; let age = 75; 
//the semi-colon is required to separate these multiple statements on a single line.

//Semi-colon is not required, because the statements are on different lines.
let name = "Kay"
let age = 75 

/* .... multiline comments
....
.....
.....
 */


// ===== 1. VARIABLES =====

// Declaring variables with let and const
let username = "Alice"; // can be changed later
const age = 25;         // cannot be reassigned

console.log(username, age);

// Naming conventions
//let message = "This is a training session" // ✅
//let message2 = "This is true" // ✅
//let user_name = "Kay12345" // ✅
//let myVeryLongName = "Kay Oluwole" // ✅

//Use camelCase
//Camel case (or camelCase) is a writing style where multiple words are combined into a single word, with the first letter of each word (except the first, in lowerCamelCase) capitalized

//letters, digits, _, and $ are acceptable
// let 1name = "This is my first message" // ❌
// let user-name = "Kay12345" // ❌
// let myVerylongname = "Kay Oluwole" // ❌


// Variable declaration (const)
// const NAME = "Ade Johnson"
//NAME = "Adewale Johnson" //❌ //error, cannot re-assign to a constant variable

//const NAME = "Ade Johnson" // ✅
//const name = "Ade Johnson" // ❌

//const MY_BIRTHDAY = "5th July 2000" // ✅
//const MYBIRTHDAY = "5th July 2000" // ❌

// Variable declaration (let)
//let name = "Ade Johnson"
//name = "Adewale Johnson" //✅

//const myBirthday = "5th July 2000" // ✅
//const mybirthday = "5th July 2000" // ❌




// ===== 2. DATA TYPES =====

let isStudent = true;              // Boolean
let score = 95.5;                  // Number
let favoriteColor = "blue";        // String
let hobbies = ["reading", "coding"]; // Array
let address = { city: "Paris", zip: "75001" }; // Object
let emptyValue = null;             // Null
let notAssigned;                   // Undefined

console.log(typeof hobbies, typeof address);

// ===== 3. FUNCTIONS & ARROW FUNCTIONS =====

// Regular Function
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Bob"));

// Arrow Function (shorter syntax)
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

// ===== 4. CONDITIONAL STATEMENTS =====

let temperature = 30;

if (temperature > 25) {
    console.log("It's hot outside!");
} else if (temperature > 15) {
    console.log("It's warm.");
} else {
    console.log("It's cold.");
}

// Switch Example
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    default:
        console.log("Just another day.");
}

// ===== 5. LOOPS =====

// For Loop
for (let i = 1; i <= 3; i++) {
    console.log(`Count: ${i}`);
}

// While Loop
let count = 0;
while (count < 3) {
    console.log(`While count: ${count}`);
    count++;
}

// For...of Loop (Great for Arrays)
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// ===== 6. ARRAY METHODS =====

let numbers = [1, 2, 3, 4, 5];

// forEach - Loop through array
numbers.forEach(num => console.log(`Number: ${num}`));

// map - Create a new array with modified values
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter - Create a new array with filtered values
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// reduce - Accumulate a single value (sum in this case)
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// ===== 7. OBJECTS & DESTRUCTURING =====

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
};

// Destructuring
const { firstName, city } = person;
console.log(`${firstName} lives in ${city}.`);

// ===== 8. TEMPLATE LITERALS =====

let product = "Book";
let price = 15.99;

console.log(`The price of the ${product} is $${price}.`);

// ===== 9. ERROR HANDLING =====

try {
    let result = riskyFunction();
    console.log(result);
} catch (error) {
    console.log("Something went wrong:", error.message);
}

function riskyFunction() {
    throw new Error("Oops, this function always fails!");
}

// ===== 10. setTimeout and setInterval =====

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

let intervalId = setInterval(() => {
    console.log("Repeating every 1 second");
}, 1000);

// Stop after 3 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped interval");
}, 3000);
