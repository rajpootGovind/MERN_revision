// ==========================================================================
//  MERN Stack Course — JavaScript Module 01
//  EXERCISE 01: Variables, Data Types & Operators
//  Level: Beginner (IT professional, new to JS)
// ==========================================================================
//
//  HOW TO RUN:
//  Option 1 → Node.js  : node js-exercise-01.js
//  Option 2 → Browser  : paste into browser DevTools Console (F12)
//  Option 3 → Online   : https://playcode.io  or  https://jsfiddle.net
//
//  INSTRUCTIONS:
//  Read each section, then complete the TODO tasks below it.
//  Expected outputs are shown in comments.
//  Do NOT look at the answer — struggle a little first!
// ==========================================================================


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION A — Declaring Variables
// ─────────────────────────────────────────────────────────────────────────────

//  Rule: const for everything → switch to let only if it will change.
//  NEVER use var.

const courseName = "MERN Stack";       // string
const totalModules = 12;               // number
const isEnrolled = true;               // boolean
let currentModule = 1;                 // let because it changes

console.log("=== SECTION A: Variables ===");
console.log(courseName);               // MERN Stack
console.log(totalModules);             // 12
console.log(typeof courseName);        // string
console.log(typeof totalModules);      // number
console.log(typeof isEnrolled);        // boolean

// --------------------
//  TODO A1:
//  Declare a const called `studentName` with your own name.
//  Declare a const called `studentAge` with your age.
//  Print both using console.log.
// --------------------

const studentName = "Govind Rajpoot"
const studentAge = 26 ;
console.log("Name ->", studentName);
console.log("Age ->", studentAge);



// --------------------
//  TODO A2:
//  currentModule starts at 1.
//  Reassign it to 2 (simulate moving to the next module).
//  Print: "Now on module: 2"
// --------------------

console.log("Now On Module: 2");



// ─────────────────────────────────────────────────────────────────────────────
//  SECTION B — Data Types & typeof
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION B: Data Types ===");

const aString    = "JavaScript";
const aNumber    = 42;
const aFloat     = 3.14;
const aBoolean   = false;
const aNullVal   = null;
let   anUndefined;                     // no assignment = undefined
const anArray    = [1, 2, 3];
const anObject   = { language: "JS", year: 1995 };

// typeof returns a string describing the type
console.log(typeof aString);           // "string"
console.log(typeof aNumber);           // "number"
console.log(typeof aFloat);            // "number"  ← JS has ONE number type
console.log(typeof aBoolean);          // "boolean"
console.log(typeof aNullVal);          // "object"  ← Famous JS bug!
console.log(typeof anUndefined);       // "undefined"
console.log(typeof anArray);           // "object"  ← arrays are objects
console.log(typeof anObject);          // "object"

// To properly check for arrays:
console.log(Array.isArray(anArray));   // true
console.log(Array.isArray(anObject));  // false

// --------------------
//  TODO B1:
//  Create a variable for each of the following and print its typeof:
//    - Your phone number (as a number)
//    - Your city name (as a string)
//    - Whether you are a developer (as a boolean)
// --------------------

console.log("Type ->", typeof(studentName));



// --------------------
//  TODO B2 — Predict the output (fill in the blanks):
//  Run the code below, then write what you expected in the comments.
// --------------------

console.log(typeof null);              // Expected: ________
console.log(typeof undefined);         // Expected: ________
console.log(typeof function(){});      // Expected: ________
console.log(Array.isArray([]));        // Expected: ________


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION C — String Operations
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION C: Strings ===");

const firstName = "Ahmed";
const lastName  = "Khan";

// Concatenation (old way)
const fullName1 = firstName + " " + lastName;
console.log(fullName1);                // "Ahmed Khan"

// Template literals (modern — use this always)
const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);                // "Ahmed Khan"

// Useful string properties/methods
const greeting = "Hello, World!";
console.log(greeting.length);         // 13
console.log(greeting.toUpperCase());  // "HELLO, WORLD!"
console.log(greeting.toLowerCase());  // "hello, world!"
console.log(greeting.includes("World")); // true
console.log(greeting.split(", "));    // ["Hello", "World!"]
console.log(greeting.replace("World", "JS")); // "Hello, JS!"
console.log("  spaces  ".trim());     // "spaces"

// --------------------
//  TODO C1:
//  Create a variable: const email = "  Student@Example.COM  "
//  Clean it up: trim whitespace and convert to lowercase.
//  Expected output: "student@example.com"
//  Hint: chain .trim() and .toLowerCase()
// --------------------
email = "  Student@Example.COM  "
console.log(email.trim().toLowerCase());



// --------------------
//  TODO C2:
//  Using template literals, create a string:
//  "My name is [your name] and I am learning JavaScript. Module 1 of 12."
//  Use your studentName and totalModules variables from Section A.
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION D — Numbers & Math
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION D: Numbers ===");

// Arithmetic operators
console.log(10 + 3);    // 13
console.log(10 - 3);    // 7
console.log(10 * 3);    // 30
console.log(10 / 3);    // 3.3333...
console.log(10 % 3);    // 1  (modulus — remainder)
console.log(10 ** 3);   // 1000 (exponentiation)

// Math object
console.log(Math.round(3.7));    // 4
console.log(Math.floor(3.9));    // 3
console.log(Math.ceil(3.1));     // 4
console.log(Math.abs(-15));      // 15
console.log(Math.max(5, 10, 2)); // 10
console.log(Math.min(5, 10, 2)); // 2
console.log(Math.random());      // random number 0 to 1

// Convert string to number
console.log(Number("42"));       // 42
console.log(parseInt("42.9"));   // 42
console.log(parseFloat("42.9")); // 42.9
console.log(Number("hello"));    // NaN (Not a Number)
console.log(isNaN(Number("hi"))); // true

// --------------------
//  TODO D1:
//  You have 3 test scores: 78, 92, 85
//  Calculate the average and round to 2 decimal places.
//  Print: "Average score: 85.00"
//  Hint: use .toFixed(2) on a number
// --------------------

const a = 78;
const b = 92;
const c = 85;
console.log("Average is :", ((a+b+c)/3).toFixed(2));



// --------------------
//  TODO D2:
//  Generate a random integer between 1 and 10 (inclusive).
//  Hint: Math.floor(Math.random() * 10) + 1
//  Print: "Random number: X"
// --------------------

const nuumber = Math.floor(Math.random()*10)+1
console.log("Number- >", nuumber);


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION E — Comparison & Logical Operators
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION E: Comparisons ===");

//  Always use === (strict equality) — never ==
console.log(5 === 5);       // true
console.log(5 === "5");     // false — different types
console.log(5 == "5");      // true  — type coercion (AVOID!)
console.log(5 !== 6);       // true
console.log(10 > 5);        // true
console.log(10 >= 10);      // true

//  Logical operators
console.log(true && true);  // true  (AND — both must be true)
console.log(true && false); // false
console.log(true || false); // true  (OR — at least one true)
console.log(!true);         // false (NOT)

//  Short-circuit evaluation
const user = null;
const name = user || "Guest";     // if user is falsy, use "Guest"
console.log(name);                 // "Guest"

const loggedIn = true;
const welcome = loggedIn && "Welcome back!";
console.log(welcome);              // "Welcome back!"

//  Nullish coalescing ?? (ES2020) — only null/undefined, not 0 or ""
const score = 0;
console.log(score || 100);   // 100 — wrong! 0 is falsy
console.log(score ?? 100);   // 0   — correct! only null/undefined triggers

// --------------------
//  TODO E1:
//  Given: const userAge = 20;
//  Check if the user is between 18 and 65 (inclusive) using &&
//  Print: true or false
// --------------------

const userAge = 20;
console.log("User Age ->", userAge>28 && userAge<65);



// --------------------
//  TODO E2:
//  Given: let username = null;
//  Use ?? to provide a default value of "Anonymous"
//  Print the result.
// --------------------

let username2 = null;
console.log(username2??"Anonymous");



// ─────────────────────────────────────────────────────────────────────────────
//  SECTION F — Type Conversion Challenges
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION F: Type Conversion ===");

// These will trip up beginners — predict THEN run

console.log("10" + 5);          // "105" (string concat)
console.log("10" - 5);          // 5     (numeric subtract)
console.log("10" * "2");        // 20    (coerced to numbers)
console.log(true + 1);          // 2     (true = 1)
console.log(false + "1");       // "false1"
console.log(null + 1);          // 1     (null = 0)
console.log(undefined + 1);     // NaN

// --------------------
//  TODO F1 — The Tricky Quiz:
//  Before running, write your prediction for each line.
//  Then run and see how many you got right.
// --------------------

console.log("5" - "3");          // Prediction: _____
console.log("5" + + "3");        // Prediction: _____  (tricky!)
console.log([] + []);            // Prediction: _____
console.log([] + {});            // Prediction: _____
console.log(+"");                // Prediction: _____
console.log(+true);              // Prediction: _____


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION G — BONUS CHALLENGE (Tie It All Together)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION G: Bonus Challenge ===");

// --------------------
//  CHALLENGE:
//
//  Build a simple "Student Report" using only what you've learned.
//
//  Given this data:
const studentData = {
  name: "Riya Sharma",
  scores: [88, 72, 95, 60, 81],
  passingGrade: 70,
};
//
//  Your task — calculate and print a report like this:
//
//  ============================
//  Student: Riya Sharma
//  Total Scores: 5
//  Average Score: 79.20
//  Highest Score: 95
//  Lowest Score: 60
//  Passed all modules: false
//  ============================
//
console.log(studentData.name);
console.log(studentData.scores.length);
const sum = studentData.scores.reduce((a,b)=>a+b)
console.log(sum/studentData.scores.length);
console.log(Math.max(...studentData.scores));
console.log(Math.min(...studentData.scores));



// your code here...

