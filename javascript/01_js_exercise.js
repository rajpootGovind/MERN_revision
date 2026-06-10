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

// your code here...
const studentName = "Arpit";
const studentAge = 24;

console.log(`Hi I am ${studentName} and my age is ${studentAge}`)

// --------------------
//  TODO A2:
//  currentModule starts at 1.
//  Reassign it to 2 (simulate moving to the next module).
//  Print: "Now on module: 2"
// --------------------

// your code here...
currentModule = 2; //CurrentModule already declared at line 29
console.log(`Now on ${currentModule}`)


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
//Array.isArray() is a built-in JavaScript method that checks whether a value is an array or not.
console.log(Array.isArray(anObject));  // false

// --------------------
//  TODO B1:
//  Create a variable for each of the following and print its typeof:
//    - Your phone number (as a number)
//    - Your city name (as a string)
//    - Whether you are a developer (as a boolean)
// --------------------

// your code here...
let contactNumber = 9839559321;
let city = "bangalore";
let isDeveloper = false;

console.log(`data type of number is: ${typeof (contactNumber)}`)
console.log(`data type of city is: ${typeof (city)}`)
console.log(`date type of boolean is: ${typeof (isDeveloper)}`)


// --------------------
//  TODO B2 — Predict the output (fill in the blanks):
//  Run the code below, then write what you expected in the comments.
// --------------------

console.log(typeof null);              // Expected:object
console.log(typeof undefined);         // Expected: undefined
console.log(typeof function(){});      // Expected: function
console.log(Array.isArray([]));        // Expected:true


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

// your code here...
let email = "        JohnDoe24@gmail.com"  ;
console.log((email.trim()).toLowerCase())


// --------------------
//  TODO C2:
//  Using template literals, create a string:
//  "My name is [your name] and I am learning JavaScript. Module 1 of 12."
//  Use your studentName and totalModules variables from Section A.
// --------------------

// your code here...
let newString = `My name is ${studentName} and I am learning javasacript. Module ${currentModule} of 12`;
console.log(newString)

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

// your code here...

let testScores = [78, 92, 85];

let average =(((testScores[0]+testScores[1]+testScores[2])/testScores.length).toFixed(2))
console.log(`Average is ${average}`)

// --------------------
//  TODO D2:
//  Generate a random integer between 1 and 10 (inclusive).
//  Hint: Math.floor(Math.random() * 10) + 1
//  Print: "Random number: X"
// --------------------

// your code here...

let randomNumb = (Math.random()*10) + 1;

console.log(`Random Number is ${randomNumb}`)

// ─────────────────────────────────────────────────────────────────────────────
//  SECTION E — Comparison & Logical Operators
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION E: Comparisons ===");

//  Always use === (strict equality) — never ==
console.log(5 === 5);       // true
console.log(5 === "5");     // false — different types
console.log(5 == "5");      // true  — type coercion (AVOID!)
//Type coercion means JavaScript automatically converts one data type into another when performing an operation.
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

// your code here...
const userAge = 20;

if(userAge>18 && userAge<=65){
  console.log(true)
}else{
  console.log(false)
}

// --------------------
//  TODO E2:
//  Given: let username = null;
//  Use ?? to provide a default value of "Anonymous"
//  Print the result.
// --------------------

// your code here...
const userN = null;
const Anonymous = userN ?? "Anonymous";
console.log(Anonymous)

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

console.log("5" - "3");          // Prediction: 2
console.log("5" + + "3");        // Prediction: NaN (tricky!)
console.log([] + []);            // Prediction: _____
console.log([] + {});            // Prediction: _____
console.log(+"");                // Prediction: 0
console.log(+true);              // Prediction: 1


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
//  Hints:
//  - Sum = scores.reduce((total, s) => total + s, 0)
//  - Average = sum / scores.length
//  - Math.max(...scores) for highest
//  - Math.min(...scores) for lowest
//  - For "passed all": use scores.every(s => s >= passingGrade)
// --------------------

// your code here...
console.log(`student: ${studentData.name}`)
const sum = studentData.scores.reduce((total, s)=>total + s, 0)
const TotalScore = console.log(`Total Score: ${studentData.scores.length}`)
const averageScore = console.log(`Average Score: ${(sum/(studentData.scores.length)).toFixed(2)}`)
const highScore = console.log(`Highest Score: ${Math.max(...studentData.scores)}`)
const lowestScore = console.log(`Lowest Score: ${Math.min(...studentData.scores)}`)

const passedAllModules = studentData.scores.every(score => score >= studentData.passingGrade);
console.log(`Passed all Modules : ${passedAllModules}`);

// ==========================================================================
//  END OF EXERCISE 01
//
//  ✅ CHECKLIST before moving to Exercise 02:
//  ✅ I understand when to use const vs let
//  ✅ I know the 7 primitive types
//  ✅ I can explain typeof null returning "object"
//  ✅ I use === instead of ==
//  ✅ I understand truthy/falsy
//  ✅ I can use template literals confidently
//  ✅ I can convert between types intentionally
//  ✅ I completed all TODO sections
//  ✅ Bonus challenge done
//
//  NEXT: Exercise 02 → Control Flow (if/else, switch, loops)
// ==========================================================================