// ==========================================================================
//  MERN Stack Course — JavaScript Module 04
//  EXERCISE 04: Arrays Deep Dive + Loops on Arrays
//  Level: Beginner (IT professional, new to JS)
// ==========================================================================
//
//  HOW TO RUN:
//  Option 1 → Node.js  : node js-exercise-04.js
//  Option 2 → Browser  : paste into DevTools Console (F12)
//  Option 3 → Online   : https://playcode.io
//
//  Complete every TODO. Expected outputs are shown in comments.
// ==========================================================================


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION A — Creating Arrays & Basic Access
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== SECTION A: Creating Arrays ===");

// --------------------
//  TODO A1 — Array.from():
//  a) Convert the string "JavaScript" into an array of characters
//     Expected: ["J","a","v","a","S","c","r","i","p","t"]
//
//  b) Create an array of squares: [1, 4, 9, 16, 25]
//     using Array.from({ length: 5 }, ...)
//     Hint: (_, i) => (i+1) ** 2
//
//  c) Remove duplicates from [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
//     using Array.from(new Set(...))
//     Expected: [3, 1, 4, 5, 9, 2, 6]
// --------------------

// your code here...


// --------------------
//  TODO A2 — Index & .at():
//  Given:
const stack = ["MongoDB", "Express", "React", "Node"];
//
//  a) Print the first element using index
//  b) Print the last element using .at(-1)
//  c) Print the second-to-last element using .at()
//  d) Print the length
//  e) Try accessing stack[10] — print the result and its typeof
// --------------------

// your code here...


// --------------------
//  TODO A3 — Reference type trap:
//  Given:
const original = [1, 2, 3];
//
//  a) Assign `original` to `aliased` directly (no copy)
//     Push 99 into aliased.
//     Print original — show it changed too.
//
//  b) Now create a real copy using spread, push 99 into copy.
//     Print original again — show it did NOT change.
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION B — Mutating Methods
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION B: Mutating Methods ===");

// --------------------
//  TODO B1 — push / pop / shift / unshift:
//  Start with: const queue = ["task1", "task2", "task3"];
//
//  Simulate a task queue (FIFO — First In First Out):
//  a) Add "task4" and "task5" to the end
//  b) Remove and print the first task  → "task1"
//  c) Add "task0" to the beginning (highest priority)
//  d) Print the final queue
//     Expected: ["task0", "task2", "task3", "task4", "task5"]
// --------------------

// your code here...


// --------------------
//  TODO B2 — splice():
//  Given:
const months = ["Jan", "Feb", "Apr", "May", "Jun"];
//  (March is missing!)
//
//  a) Insert "Mar" at the correct position using splice()
//     Expected: ["Jan","Feb","Mar","Apr","May","Jun"]
//
//  b) Now remove "May" using splice() and print removed item
//
//  c) Replace "Jun" with "July" and "Aug" using splice()
//     Expected final: ["Jan","Feb","Mar","Apr","July","Aug"]
// --------------------

// your code here...


// --------------------
//  TODO B3 — sort() correctly:
//  a) Sort [100, 9, 25, 3, 47] numerically ascending — show the bug
//     first with default sort(), then fix it with a comparator.
//     Bug output:    [100, 25, 3, 47, 9]  (string sort)
//     Fixed output:  [3, 9, 25, 47, 100]
//
//  b) Sort ["banana", "Apple", "mango", "cherry"] alphabetically
//     case-insensitive.
//     Expected: ["Apple","banana","cherry","mango"]
//     Hint: use localeCompare or convert both to lowercase in comparator
//
//  c) Sort WITHOUT mutating original — use spread first.
//     Prove original is unchanged by printing it after sort.
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION C — Non-Mutating Methods
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION C: Non-Mutating Methods ===");

// --------------------
//  TODO C1 — slice():
//  Given:
const alphabet = ["a","b","c","d","e","f","g","h"];
//
//  a) Get first 3 elements       → ["a","b","c"]
//  b) Get last 3 elements        → ["f","g","h"]
//  c) Get elements from index 2 to 5 → ["c","d","e","f"]
//  d) Clone the full array using slice()
//     Push "z" into clone — prove original is unchanged
// --------------------

// your code here...


// --------------------
//  TODO C2 — flat() & flatMap():
//
//  a) Flatten this one level:
const nested1 = [1, [2, 3], [4, [5, 6]]];
//  Expected: [1, 2, 3, 4, [5, 6]]
//
//  b) Flatten completely:
//  Expected: [1, 2, 3, 4, 5, 6]
//
//  c) Use flatMap() to get all words from these sentences:
const sentences = ["I love JavaScript", "MERN is awesome", "Node runs on V8"];
//  Expected: ["I","love","JavaScript","MERN","is","awesome","Node","runs","on","V8"]
//
//  d) Each number in [1,2,3] should expand to itself and its double:
//  Use flatMap(): [1,2,3] → [1,2,2,4,3,6]
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION D — Loops on Arrays (New Shapes)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION D: Loops on Arrays ===");

// --------------------
//  TODO D1 — Classic for loop, iterate BACKWARDS:
//  Given:
const steps = ["Connect DB", "Start Server", "Load Routes", "Listen on Port"];
//  Print steps in reverse order (countdown style):
//  Step 4: Listen on Port
//  Step 3: Load Routes
//  Step 2: Start Server
//  Step 1: Connect DB
//  Use a regular for loop going from length-1 down to 0.
// --------------------

// your code here...


// --------------------
//  TODO D2 — for...of on array of objects:
//  Given:
const employees = [
  { name: "Ali",   dept: "Engineering", salary: 75000 },
  { name: "Sara",  dept: "Design",      salary: 65000 },
  { name: "Kabir", dept: "Engineering", salary: 80000 },
  { name: "Priya", dept: "Marketing",   salary: 60000 },
];
//
//  Use for...of to print each employee like:
//  Ali (Engineering) — ₹75000
//  Sara (Design) — ₹65000
//  ...
// --------------------

// your code here...


// --------------------
//  TODO D3 — while loop: find first index matching condition:
//  Given:
const transactions = [120, -50, 340, -200, 90, -15, 500];
//
//  Use a while loop to find the INDEX of the first negative number.
//  Print: "First negative at index: 1"
//  If none found, print: "No negatives found"
//  (Do NOT use findIndex — practice the while loop)
// --------------------

// your code here...


// --------------------
//  TODO D4 — Loops on 2D arrays (Matrix):
//  Given this seating grid (true = occupied, false = empty):
const seats = [
  [true,  false, true,  true ],
  [false, false, true,  false],
  [true,  true,  true,  true ],
];
//
//  a) Using nested for loops, print row and seat for every EMPTY seat:
//     "Row 1, Seat 2 is available"
//     "Row 2, Seat 1 is available"
//     "Row 2, Seat 2 is available"
//     "Row 2, Seat 4 is available"
//     (1-based row and seat numbers)
//
//  b) Count total empty seats using nested loops.
//     Expected: 4
//
//  c) Count total occupied seats.
//     Expected: 8
// --------------------

// your code here...


// --------------------
//  TODO D5 — forEach with index (build a numbered list):
//  Given:
const techStack = ["MongoDB", "Express.js", "React.js", "Node.js"];
//
//  Use forEach to print:
//  1. MongoDB
//  2. Express.js
//  3. React.js
//  4. Node.js
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION E — Search & Check Methods
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION E: Search & Check ===");

const inventory = [
  { id: 1, name: "Laptop",   qty: 5,  price: 45000 },
  { id: 2, name: "Mouse",    qty: 50, price: 800   },
  { id: 3, name: "Monitor",  qty: 8,  price: 18000 },
  { id: 4, name: "Keyboard", qty: 0,  price: 1500  },
  { id: 5, name: "Webcam",   qty: 12, price: 3500  },
];

// --------------------
//  TODO E1:
//  a) Find the product object with id === 3 using .find()
//     Print the whole object
//
//  b) Find the INDEX of the product named "Keyboard" using .findIndex()
//     Print: 3
//
//  c) Check if ANY product is out of stock (qty === 0) using .some()
//     Print: true
//
//  d) Check if ALL products have price > 500 using .every()
//     Print: true
//
//  e) Check if the inventory includes a product with name "Tablet"
//     (Hint: .some() since .includes() checks primitives only)
//     Print: false
// --------------------

// your code here...


// --------------------
//  TODO E2 — indexOf on primitives:
//  Given:
const roles = ["user", "admin", "moderator", "admin", "user"];
//
//  a) First index of "admin"   → 1
//  b) Last index of "admin"    → 3
//  c) Does "superuser" exist?  → false (use .includes())
//  d) Count how many times "user" appears
//     Hint: filter then length
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION F — Iteration Methods Deep Dive
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION F: Iteration Methods ===");

// Main dataset — MongoDB-style documents
const products = [
  { _id: "p1", name: "Laptop",   category: "Electronics", price: 45000, inStock: true,  rating: 4.5 },
  { _id: "p2", name: "T-Shirt",  category: "Clothing",    price: 599,   inStock: true,  rating: 4.1 },
  { _id: "p3", name: "Headset",  category: "Electronics", price: 3200,  inStock: false, rating: 3.8 },
  { _id: "p4", name: "Jeans",    category: "Clothing",    price: 1499,  inStock: true,  rating: 4.3 },
  { _id: "p5", name: "Monitor",  category: "Electronics", price: 18000, inStock: true,  rating: 4.7 },
  { _id: "p6", name: "Sneakers", category: "Footwear",    price: 2999,  inStock: false, rating: 4.0 },
  { _id: "p7", name: "Tablet",   category: "Electronics", price: 28000, inStock: true,  rating: 4.2 },
];

// --------------------
//  TODO F1 — map():
//  a) Create a new array of just product names
//     Expected: ["Laptop","T-Shirt","Headset",...]
//
//  b) Create a new array where each item has:
//     { name, priceWithTax: price * 1.18 (rounded to 2 decimals) }
//
//  c) Add a "badge" field to each product:
//     "Top Rated"    → rating >= 4.5
//     "Good"         → rating >= 4.0
//     "Average"      → below 4.0
//     Return full product + badge field using spread
// --------------------

// your code here...


// --------------------
//  TODO F2 — filter():
//  a) Get all in-stock products
//  b) Get all Electronics products under ₹20000
//  c) Get products with rating above 4.2 that are in stock
//  Print lengths (counts) for all three
// --------------------

// your code here...


// --------------------
//  TODO F3 — reduce():
//  a) Total value of all in-stock products (price * 1 each)
//     Expected: 45000+599+1499+18000+28000 = 93098
//
//  b) Group products by category:
//     Expected: {
//       Electronics: [ ...4 items ],
//       Clothing:    [ ...2 items ],
//       Footwear:    [ ...1 item  ]
//     }
//
//  c) Find the most expensive product using reduce()
//     (Do NOT use Math.max or sort — only reduce)
//     Expected: the Laptop object
// --------------------

// your code here...


// --------------------
//  TODO F4 — Method chaining:
//  In ONE chained expression (no intermediate variables):
//
//  a) Get names of in-stock Electronics products, sorted alphabetically
//     Expected: ["Laptop","Monitor","Tablet"]
//
//  b) Get the total price of all in-stock products per category
//     Result should look like: { Electronics: 91000, Clothing: 2098, ... }
//     Hint: filter inStock → reduce to group and sum prices
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION G — Array of Objects: CRUD Simulation
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION G: Array of Objects CRUD ===");

// --------------------
//  Simulate a mini in-memory database of users.
//  Start with this data:
let users = [
  { id: 1, name: "Ahmed",  email: "ahmed@test.com",  active: true  },
  { id: 2, name: "Sara",   email: "sara@test.com",   active: true  },
  { id: 3, name: "Kabir",  email: "kabir@test.com",  active: false },
  { id: 4, name: "Priya",  email: "priya@test.com",  active: true  },
];
//
//  TODO G1 — READ:
//  a) Find user with id === 3 and print their name
//  b) Get all active users and print their names
//  c) Check if any user has email "riya@test.com" → false
//
//  TODO G2 — CREATE (immutably):
//  Add a new user { id: 5, name: "Riya", email: "riya@test.com", active: true }
//  WITHOUT mutating original `users` — create `users2` using spread
//  Print length of users (4) and users2 (5) to prove immutability
//
//  TODO G3 — UPDATE (immutably):
//  Set Kabir's active to true.
//  Use .map() — return a new array where only the matching user is changed.
//  Prove original `users` still has Kabir as inactive.
//
//  TODO G4 — DELETE (immutably):
//  Remove the user with id === 2 from users.
//  Use .filter() — return new array without Sara.
//  Print remaining names.
//  Expected: ["Ahmed","Kabir","Priya"]
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION H — BONUS CHALLENGE: Array Utility Library
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION H: Bonus Challenge ===");

// --------------------
//  Build an object called `ArrayUtils` with the following methods.
//  No external libraries. Use only native array methods and loops.
//
//  ArrayUtils.chunk(arr, size)
//    → Split arr into sub-arrays of given size
//    → chunk([1,2,3,4,5,6,7], 3)  → [[1,2,3],[4,5,6],[7]]
//
//  ArrayUtils.unique(arr)
//    → Remove duplicate primitives
//    → unique([1,2,2,3,3,3])  → [1,2,3]
//
//  ArrayUtils.flatten(arr)
//    → Flatten any depth
//    → flatten([1,[2,[3,[4]]]])  → [1,2,3,4]
//
//  ArrayUtils.groupBy(arr, key)
//    → Group array of objects by a key
//    → groupBy([{type:"a"},{type:"b"},{type:"a"}], "type")
//    → { a:[{type:"a"},{type:"a"}], b:[{type:"b"}] }
//
//  ArrayUtils.paginate(arr, page, limit)
//    → Return slice for given page (1-based) and limit
//    → paginate([1..10], 2, 3)  → [4,5,6]
//
//  ArrayUtils.sortBy(arr, key, direction = "asc")
//    → Sort array of objects by key, asc or desc
//    → sortBy(products, "price", "desc")
//
//  ArrayUtils.countBy(arr, key)
//    → Count occurrences of each value for a key
//    → countBy([{role:"user"},{role:"admin"},{role:"user"}], "role")
//    → { user:2, admin:1 }
//
//  ArrayUtils.zip(arr1, arr2)
//    → Combine two arrays into array of pairs
//    → zip(["a","b","c"], [1,2,3])  → [["a",1],["b",2],["c",3]]
//
//  Test each method after writing it.
// --------------------

// your code here...


// ==========================================================================
//  END OF EXERCISE 04
//
//  ✅ CHECKLIST before moving to Module 05:
//  [ ] I know the difference between Array.from() and []
//  [ ] I can use .at() for negative indexing
//  [ ] I understand arrays are reference types — copy with spread
//  [ ] I know which methods mutate (push/pop/splice/sort) vs which don't
//  [ ] I can sort numbers correctly with a comparator
//  [ ] I can use splice to insert, delete and replace
//  [ ] I can use slice to extract without mutating
//  [ ] I can use flat() and flatMap() on nested arrays
//  [ ] I can iterate arrays with for, for...of, forEach and while
//  [ ] I can iterate 2D arrays with nested loops
//  [ ] I can chain filter → map → sort confidently
//  [ ] I can use reduce to group, sum, and find max
//  [ ] I can do CRUD on an array of objects immutably
//  [ ] Bonus ArrayUtils library complete
//
//  NEXT: Module 05 → Objects, call/bind/apply, Destructuring, Spread, Class & JSON
// ==========================================================================