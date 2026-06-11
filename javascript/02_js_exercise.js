// ==========================================================================
//  MERN Stack Course — JavaScript Module 02
//  EXERCISE 02: Control Flow, Loops & Array Methods
//  Level: Beginner (IT professional, new to JS)
// ==========================================================================
//
//  HOW TO RUN:
//  Option 1 → Node.js  : node js-exercise-02.js
//  Option 2 → Browser  : paste into DevTools Console (F12)
//  Option 3 → Online   : https://playcode.io
//
//  Complete every TODO. Expected outputs are shown in comments.
// ==========================================================================


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION A — if / else if / else
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== SECTION A: if / else ===");

// Example: HTTP status code interpreter (you'll use this in Express every day)
function describeStatus(code) {
  if (code >= 500) {
    return "Server Error";
  } else if (code >= 400) {
    return "Client Error";
  } else if (code >= 300) {
    return "Redirect";
  } else if (code >= 200) {
    return "Success";
  } else {
    return "Unknown";
  }
}

console.log(describeStatus(200));   // Success
console.log(describeStatus(404));   // Client Error
console.log(describeStatus(500));   // Server Error

// --------------------
//  TODO A1:
//  Write a function called getBMICategory(bmi) that returns:
//    "Underweight"  → bmi < 18.5
//    "Normal"       → 18.5 to 24.9
//    "Overweight"   → 25 to 29.9
//    "Obese"        → 30 and above
//
//  Test it:
//  console.log(getBMICategory(17));   // Underweight
//  console.log(getBMICategory(22));   // Normal
//  console.log(getBMICategory(27));   // Overweight
//  console.log(getBMICategory(35));   // Obese
// --------------------

// your code here...


// --------------------
//  TODO A2 — Ternary Operator:
//  Rewrite this using a single ternary expression:
//
//  let message;
//  if (hour < 12) {
//    message = "Good morning";
//  } else {
//    message = "Good afternoon";
//  }
//
//  const hour = 9;
//  const message = ???
//  console.log(message);   // Good morning
// --------------------

// your code here...


// --------------------
//  TODO A3 — Nested Conditions:
//  Write a function called getDiscount(age, isMember) that returns:
//    50% discount  → age < 12  (child, regardless of membership)
//    30% discount  → isMember is true AND age >= 60 (senior member)
//    20% discount  → isMember is true (regular member)
//    10% discount  → age >= 60 (senior, not member)
//    0%  discount  → everyone else
//
//  Test:
//  console.log(getDiscount(8, false));   // 50
//  console.log(getDiscount(65, true));   // 30
//  console.log(getDiscount(30, true));   // 20
//  console.log(getDiscount(65, false));  // 10
//  console.log(getDiscount(25, false));  // 0
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION B — switch Statement
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION B: switch ===");

// Example: Express-style HTTP method router
function handleMethod(method) {
  switch (method.toUpperCase()) {
    case "GET":
      return "Fetching resource...";
    case "POST":
      return "Creating resource...";
    case "PUT":
    case "PATCH":
      return "Updating resource...";
    case "DELETE":
      return "Deleting resource...";
    default:
      return "Method not supported";
  }
}

console.log(handleMethod("GET"));     // Fetching resource...
console.log(handleMethod("post"));    // Creating resource...
console.log(handleMethod("PATCH"));   // Updating resource...
console.log(handleMethod("OPTIONS")); // Method not supported

// --------------------
//  TODO B1:
//  Write a function called getDayType(day) using switch.
//  It should return:
//    "Weekday"  → Monday, Tuesday, Wednesday, Thursday, Friday
//    "Weekend"  → Saturday, Sunday
//    "Invalid"  → anything else
//
//  Tip: group multiple cases that share the same result.
//
//  console.log(getDayType("Monday"));    // Weekday
//  console.log(getDayType("Saturday"));  // Weekend
//  console.log(getDayType("Holiday"));   // Invalid
// --------------------

// your code here...


// --------------------
//  TODO B2:
//  Write a function called getSeasonMessage(month) using switch.
//  month is a number 1-12.
//    Dec, Jan, Feb   → "Winter ❄️"
//    Mar, Apr, May   → "Spring 🌸"
//    Jun, Jul, Aug   → "Summer ☀️"
//    Sep, Oct, Nov   → "Autumn 🍂"
//
//  console.log(getSeasonMessage(1));   // Winter ❄️
//  console.log(getSeasonMessage(5));   // Spring 🌸
//  console.log(getSeasonMessage(8));   // Summer ☀️
//  console.log(getSeasonMessage(10));  // Autumn 🍂
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION C — Loops
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION C: Loops ===");

// --------------------
//  TODO C1 — for loop:
//  Print a multiplication table for 7 (7x1 through 7x10).
//  Expected output format:
//  7 x 1 = 7
//  7 x 2 = 14
//  ...
//  7 x 10 = 70
// --------------------

// your code here...


// --------------------
//  TODO C2 — for...of:
//  Given this array of emails:
const emails = ["  Alice@Gmail.com", "BOB@yahoo.com  ", "  carol@OUTLOOK.com"];
//  Loop through and print each email cleaned up:
//  - trimmed (no spaces)
//  - all lowercase
//  Expected:
//  alice@gmail.com
//  bob@yahoo.com
//  carol@outlook.com
// --------------------

// your code here...


// --------------------
//  TODO C3 — for...in:
//  Given this object:
const serverConfig = {
  host: "localhost",
  port: 3000,
  database: "merndb",
  debug: true,
};
//  Print each key-value pair in this format:
//  host       → localhost
//  port       → 3000
//  database   → merndb
//  debug      → true
// --------------------

// your code here...


// --------------------
//  TODO C4 — while + break:
//  Start with number = 1.
//  Keep doubling it until it exceeds 1000.
//  Print each value as you go.
//  Expected: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512
// --------------------

// your code here...


// --------------------
//  TODO C5 — continue:
//  Loop from 1 to 20.
//  Skip multiples of 3.
//  Print all other numbers on one line separated by spaces.
//  Expected: 1 2 4 5 7 8 10 11 13 14 16 17 19 20
//  Hint: build a string or use process.stdout.write / collect in array
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION D — Array Methods (The MERN Workhorses)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION D: Array Methods ===");

// Dataset — you'll work with this for all D tasks
const students = [
  { id: 1, name: "Ayesha",  score: 88, passed: true,  city: "Delhi"   },
  { id: 2, name: "Rahul",   score: 55, passed: false, city: "Mumbai"  },
  { id: 3, name: "Priya",   score: 92, passed: true,  city: "Delhi"   },
  { id: 4, name: "Kabir",   score: 40, passed: false, city: "Chennai" },
  { id: 5, name: "Sneha",   score: 75, passed: true,  city: "Mumbai"  },
  { id: 6, name: "Arjun",   score: 68, passed: true,  city: "Delhi"   },
];

// --------------------
//  TODO D1 — forEach:
//  Print each student's name and score like:
//  Ayesha scored 88
//  Rahul scored 55
//  ...
// --------------------

// your code here...


// --------------------
//  TODO D2 — map:
//  Create a new array of just the student names (strings).
//  console.log(names);
//  Expected: ["Ayesha", "Rahul", "Priya", "Kabir", "Sneha", "Arjun"]
// --------------------

// your code here...


// --------------------
//  TODO D3 — map (transform objects):
//  Create a new array where each student object has an extra field:
//  grade: "A" if score >= 80, "B" if 60-79, "C" if below 60.
//  Print the new array.
//  Each object should look like: { id, name, score, passed, city, grade }
// --------------------

// your code here...


// --------------------
//  TODO D4 — filter:
//  Get all students from Delhi who passed.
//  Print their names.
//  Expected: ["Ayesha", "Priya", "Arjun"]
// --------------------

// your code here...


// --------------------
//  TODO D5 — find & findIndex:
//  a) Find the student object with id === 4
//     Print: { id: 4, name: 'Kabir', ... }
//
//  b) Find the INDEX of the student named "Sneha"
//     Print: 4  (0-based index)
// --------------------

// your code here...


// --------------------
//  TODO D6 — some & every:
//  a) Are there any students who scored above 90?  → true/false
//  b) Did every student pass?                      → true/false
//  c) Is there any student from Bangalore?         → true/false
// --------------------

// your code here...


// --------------------
//  TODO D7 — reduce:
//  a) Calculate the total score of all students.
//     Expected: 418
//
//  b) Calculate the average score (round to 2 decimal places).
//     Expected: 69.67
//
//  c) HARDER: Use reduce to count how many students are from each city.
//     Expected: { Delhi: 3, Mumbai: 2, Chennai: 1 }
//     Hint: start with an empty object {} as the accumulator.
//           If the city key doesn't exist yet, set it to 1. Otherwise increment.
// --------------------

// your code here...


// --------------------
//  TODO D8 — Method Chaining:
//  In ONE chained expression (no intermediate variables):
//  Get the names of students who:
//    - Passed AND scored above 70
//    - Sorted alphabetically (use .sort())
//
//  Expected: ["Ayesha", "Arjun", "Priya", "Sneha"]
//  Wait — sort alphabetically: ["Arjun", "Ayesha", "Priya", "Sneha"]
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION E — BONUS CHALLENGE: Mini Grade Report System
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION E: Bonus Challenge ===");

// --------------------
//  Build a function called generateReport(students) that:
//
//  1. Counts total students
//  2. Counts how many passed and how many failed
//  3. Finds the highest scorer (name + score)
//  4. Finds the lowest scorer (name + score)
//  5. Calculates average score (2 decimal places)
//  6. Groups students by grade (A, B, C)
//  7. Prints a formatted report like:
//
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━
//   GRADE REPORT
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━
//   Total Students : 6
//   Passed         : 4
//   Failed         : 2
//   Average Score  : 69.67
//   Top Scorer     : Priya (92)
//   Low Scorer     : Kabir (40)
//
//   Grade A (80+)  : Ayesha, Priya
//   Grade B (60-79): Sneha, Arjun
//   Grade C (<60)  : Rahul, Kabir
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
//  Use ONLY array methods — no for loops allowed in this challenge.
// --------------------

// your code here...

// Call it:
// generateReport(students);


// ==========================================================================
//  END OF EXERCISE 02
//
//  ✅ CHECKLIST before moving to Exercise 03:
//  [ ] I can write if/else if/else chains cleanly
//  [ ] I understand ternary operator and when to use it
//  [ ] I know when switch is better than if/else
//  [ ] I understand the difference between for, for...of, for...in
//  [ ] I know the difference between forEach and map
//  [ ] I can use filter, find, some, every confidently
//  [ ] I understand how reduce works step by step
//  [ ] I can chain array methods together
//  [ ] Bonus challenge done with no for loops
//
//  NEXT: Exercise 03 → Functions (declarations, expressions, arrow, HOF, closures)
// ==========================================================================