// ==========================================================================
//  MERN Stack Course — JavaScript Module 03
//  EXERCISE 03: Functions, Arrow Functions, HOF & Closures
//  Level: Beginner (IT professional, new to JS)
// ==========================================================================
//
//  HOW TO RUN:
//  Option 1 → Node.js  : node js-exercise-03.js
//  Option 2 → Browser  : paste into DevTools Console (F12)
//  Option 3 → Online   : https://playcode.io
//
//  Complete every TODO. Expected outputs are shown in comments.
// ==========================================================================


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION A — Function Declaration vs Expression vs Arrow
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== SECTION A: Function Types ===")

// Example already done for you — three ways to write the same function
function squareDeclaration(n) {
  return n * n;
}

const squareExpression = function(n) {
  return n * n;
};

const squareArrow = n => n * n;

console.log(squareDeclaration(4));   // 16
console.log(squareExpression(4));    // 16
console.log(squareArrow(4));         // 16

// --------------------
//  TODO A1:
//  Write the same function THREE ways (declaration, expression, arrow):
//  The function is called celsiusToFahrenheit(c)
//  Formula: (c * 9/5) + 32
//
//  All three should output the same:
//  console.log(celsiusToFahrenheitDecl(0));    // 32
//  console.log(celsiusToFahrenheitExpr(100));  // 212
//  console.log(celsiusToFahrenheitArrow(37));  // 98.6
// --------------------

function celsiusToFahrenheitDecl(c){
    return (c * 9/5) + 32;
}

const celsiusToFahrenheitExpr = function celsiusToFahrenheit(c){
    return (c * 9/5) + 32;
}
const celsiusToFahrenheitArrow = (c) => (c * 9/5) + 32;
console.log(celsiusToFahrenheitDecl(0));    // 32
console.log(celsiusToFahrenheitExpr(100));  // 212
console.log(celsiusToFahrenheitArrow(37));  // 98.6

// --------------------
//  TODO A2 — Hoisting Quiz:
//  Predict what happens BEFORE running each block.
//  Write your prediction as a comment, then run.

//  Block 1:
 console.log(sayMorning());
 function sayMorning() { return "Good morning!"; }
//  Prediction: ___________

//  Block 2:
//  console.log(sayEvening());
//  const sayEvening = () => "Good evening!";
//  Prediction: ___________

//  Now uncomment and run to verify.
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION B — Parameters, Defaults & Rest
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION B: Parameters ===");

// --------------------
//  TODO B1 — Default Parameters:
//  Write a function createProfile(name, role = "student", level = 1)
//  that returns an object: { name, role, level }
//
//  console.log(createProfile("Ahmed"));
//  // { name: "Ahmed", role: "student", level: 1 }
//
//  console.log(createProfile("Sara", "instructor"));
//  // { name: "Sara", role: "instructor", level: 1 }
//
//  console.log(createProfile("Ali", "admin", 5));
//  // { name: "Ali", role: "admin", level: 5 }
// --------------------

// your code here...


// --------------------
//  TODO B2 — Rest Parameters:
//  Write a function called average(...nums) that:
//  - Accepts any number of arguments
//  - Returns their average rounded to 2 decimal places
//
//  console.log(average(10, 20));          // 15.00
//  console.log(average(5, 10, 15, 20));   // 12.50
//  console.log(average(100));             // 100.00
// --------------------

function average(...nums){
   const total= nums.reduce((acc, num) => ((acc+num)))
return (total/nums.length).toFixed(2)
}
console.log(average(10, 20));          // 15.00
 console.log(average(5, 10, 15, 20));   // 12.50
 console.log(average(100));             // 100.00

// --------------------
//  TODO B3 — Rest + Regular Parameters:
//  Write a function called buildSentence(verb, ...nouns)
//  It should return: "I can verb: noun1, noun2, noun3"
//
//  console.log(buildSentence("code", "React", "Node", "Express"));
//  // "I can code: React, Node, Express"
//
//  console.log(buildSentence("eat", "pizza", "pasta"));
//  // "I can eat: pizza, pasta"
// --------------------

function buildSentence(verb, ...nouns){
    return `I can ${verb}: ${nouns.join(",")}`
}
console.log(buildSentence("code", "React", "Node", "Express"));

// ─────────────────────────────────────────────────────────────────────────────
//  SECTION C — Return Values & Arrow Function Traps
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION C: Return Values ===");

// --------------------
//  TODO C1 — Fix the broken arrow functions:
//  Each function below has a bug. Fix it without changing to a regular function.

//  Bug 1 — should return n * 10 but returns undefined
const multiplyByTen = n => { return n * 10 };
console.log(multiplyByTen(5));   // should be 50

//  Bug 2 — should return an object but throws a syntax error
const makePoint = (x, y) => { return {
    x,y
} };
console.log(makePoint(3, 4));    // should be { x: 3, y: 4 }

//  Bug 3 — should return the square but returns undefined
const sq = (n) => {
  return n * n;
};
console.log(sq(6));   // should be 36
// --------------------


// --------------------
//  TODO C2 — Early Return Pattern:
//  Write a function called divide(a, b) that:
//  - Returns "Error: division by zero" if b is 0
//  - Returns "Error: non-numeric input" if either a or b is not a number
//  - Otherwise returns the result rounded to 4 decimal places
//
//  console.log(divide(10, 2));      // 5.0000
//  console.log(divide(10, 0));      // "Error: division by zero"
//  console.log(divide("a", 2));     // "Error: non-numeric input"
//  console.log(divide(22, 7));      // 3.1429
// --------------------

function divide(a,b){
    
    if(typeof a === "number" && typeof b === "number"){
        if(b===0) return "Error: division by zero";
        return (a/b).toFixed(4);
    }else{
        return "Error: non-numeric input";
    }
}
 console.log(divide(10, 2));      // 5.0000
 console.log(divide(10, 0));      // "Error: division by zero"
 console.log(divide("a", 2));     // "Error: non-numeric input"
 console.log(divide(22, 7));

// ─────────────────────────────────────────────────────────────────────────────
//  SECTION D — First-Class Functions & Callbacks
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION D: First-Class Functions ===");

// --------------------
//  TODO D1 — Functions as values:
//  Create an object called validator with three methods:
//    isEmail(str)   → true if str contains "@" and "."
//    isPhone(str)   → true if str has exactly 10 digits (use /^\d{10}$/.test(str))
//    isEmpty(str)   → true if str is empty after trimming
//
//  console.log(validator.isEmail("test@gmail.com"));   // true
//  console.log(validator.isEmail("notanemail"));        // false
//  console.log(validator.isPhone("9876543210"));        // true
//  console.log(validator.isPhone("123"));               // false
//  console.log(validator.isEmpty("   "));               // true
//  console.log(validator.isEmpty("hi"));                // false
// --------------------

const validator = {
    isEmail : (str)=> {
        if(str.includes("@")) {
         return true
        }
    },
    isPhone : (str)=>{if(/^\d{10}$/.test(str)){
        return true;
    }},
    isEmpty : (str)=>{if(str.trim() ===''){
        return true
    }}
}
console.log(validator.isEmail("test@gmail.com"));   // true
 console.log(validator.isEmail("notanemail"));        // false
 console.log(validator.isPhone("9876543210"));        // true
 console.log(validator.isPhone("123"));               // false
 console.log(validator.isEmpty("   "));               // true
 console.log(validator.isEmpty("hi")); 

// --------------------
//  TODO D2 — Passing functions as arguments (Callbacks):
//  Write a function called applyOperation(a, b, operation)
//  where operation is a function that takes two numbers and returns a result.
//
//  console.log(applyOperation(10, 5, (a, b) => a + b));   // 15
//  console.log(applyOperation(10, 5, (a, b) => a - b));   // 5
//  console.log(applyOperation(10, 5, (a, b) => a * b));   // 50
//  console.log(applyOperation(10, 5, (a, b) => a / b));   // 2
// --------------------

function applyOperation(a, b, operation){
    return operation(a,b);
}
console.log(applyOperation(10, 5, (a, b) => a + b));   // 15
 console.log(applyOperation(10, 5, (a, b) => a - b));   // 5
 console.log(applyOperation(10, 5, (a, b) => a * b));   // 50
 console.log(applyOperation(10, 5, (a, b) => a / b));   // 2

// --------------------
//  TODO D3 — Array of functions:
//  Create an array called pipeline with 4 arrow functions:
//    1. trims the string
//    2. converts to lowercase
//    3. replaces spaces with hyphens "-"
//    4. adds "www." prefix and ".com" suffix
//
//  Then write a function called runPipeline(input, fns) that
//  runs each function in the array on the result of the previous.
//  (Hint: use reduce)
//
//  console.log(runPipeline("  Hello World  ", pipeline));
//  // "www.hello-world.com"
// --------------------

let pipeline=[
    (str)=> str.trim(), 
    str => str.toLowerCase(),
    str => str.replaceAll(" ", "-"),
    str => `www.${str}.com`
]
function runPipeline(input, fns){
   return fns.reduce((validator,fun)=>fun(validator),input)
}
console.log(runPipeline("  Hello World  ", pipeline));
// ─────────────────────────────────────────────────────────────────────────────
//  SECTION E — Higher-Order Functions
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION E: Higher-Order Functions ===");

// --------------------
//  TODO E1 — Function that returns a function:
//  Write a function called makeGreeter(greeting) that returns
//  a new function. The returned function takes a name and
//  returns: "[greeting], [name]!"
//
//  const sayHello = makeGreeter("Hello");
//  const sayNamaste = makeGreeter("Namaste");
//
//  console.log(sayHello("Ahmed"));    // "Hello, Ahmed!"
//  console.log(sayHello("Sara"));     // "Hello, Sara!"
//  console.log(sayNamaste("Priya"));  // "Namaste, Priya!"
// --------------------

function makeGreeter(greeting){
    return (name)=>{
        return `${greeting}, ${name}`
    }
}
const sayHello = makeGreeter('Hello')// (name)=>{returns `${Hello}, ${name}` }
       console.log(sayHello("Ahmed"));                                   
const sayNamaste =makeGreeter('Namaste')
console.log(sayNamaste("Priya"))
// --------------------
//  TODO E2 — Function that takes a function:
//  Write a HOF called repeat(fn, times) that calls fn exactly
//  `times` times and returns an array of all the results.
//
//  console.log(repeat(() => Math.floor(Math.random() * 10), 5));
//  // something like [3, 7, 1, 9, 4]  (5 random numbers)
//
//  console.log(repeat(n => n * 2, 4));
//  // Hmm — fn here only takes one arg. What should repeat pass in?
//  // Pass the iteration index (0,1,2,3) as the argument.
//  // Expected: [0, 2, 4, 6]
// --------------------

function repeat(fun, times){
    let result = [];
    for(let i=0; i<times; i++){
    value = fun(i)
    result.push(value)
   }
    return result;
}
console.log(repeat(() => Math.floor(Math.random() * 10), 5));
console.log(repeat(n => n * 2, 4));

// --------------------
//  TODO E3 — withLogging HOF:
//  Write a HOF called withLogging(fn) that wraps any function.
//  The wrapper should:
//    1. Print:  "Calling [fn.name] with args: [args]"
//    2. Call the original function
//    3. Print:  "Result: [result]"
//    4. Return the result
//
//  const add = (a, b) => a + b;
//  const loggedAdd = withLogging(add);
//  loggedAdd(3, 7);
//  // Calling add with args: 3,7
//  // Result: 10
//
//  const multiply = (a, b) => a * b;
//  const loggedMultiply = withLogging(multiply);
//  loggedMultiply(4, 5);
//  // Calling multiply with args: 4,5
//  // Result: 20
// --------------------

function withLogging(fn){
    return function(...args){
        (console.log(`Calling ${[fn.name]} with args: ${[args]}`))
        let result1 = fn(...args)
        console.log(`Result:${result1 }`)
        return result1;
    } 
}

const multiply = (a, b) => a * b;
 const loggedMultiply = withLogging(multiply);
 loggedMultiply(4, 5);
// ─────────────────────────────────────────────────────────────────────────────
//  SECTION F — Closures
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION F: Closures ===");

// --------------------
//  TODO F1 — Private State with Closures:
//  Write a function called makeBank() that returns an object
//  with three methods: deposit(amount), withdraw(amount), getBalance()
//  Rules:
//    - Balance starts at 0 and is private (not directly accessible)
//    - withdraw should print "Insufficient funds" if balance < amount
//    - All amounts should be positive numbers
//
//  const account = makeBank();
//  account.deposit(500);
//  account.deposit(200);
//  console.log(account.getBalance());   // 700
//  account.withdraw(150);
//  console.log(account.getBalance());   // 550
//  account.withdraw(1000);              // "Insufficient funds"
//  console.log(account.getBalance());   // 550
// --------------------

function makeBank(){
    let balance = 0;
    return {
        deposit:(amount)=>{
           return balance +=amount;
        },
        getBalance: ()=> balance,
        withdraw: (amount)=>{
            if(balance<amount){
                console.log("Insufficient funds");
                
            }else{
                balance -= amount;
            }
        }
    }
}
const account = makeBank();
 account.deposit(500);
 account.deposit(200);
 console.log(account.getBalance());   // 700
 account.withdraw(150);
 console.log(account.getBalance());   // 550
 account.withdraw(1000);              // "Insufficient funds"
 console.log(account.getBalance());   // 550

// --------------------
//  TODO F2 — Closure for Configuration:
//  Write a function called createTaxCalculator(taxRate) that
//  returns a function. The returned function takes a price
//  and returns the price with tax applied.
//
//  const calcGST  = createTaxCalculator(0.18);   // 18% GST
//  const calcVAT  = createTaxCalculator(0.05);   // 5% VAT
//
//  console.log(calcGST(1000));    // 1180
//  console.log(calcGST(500));     // 590
//  console.log(calcVAT(1000));    // 1050
// --------------------

function createTaxCalculator(taxRate){
    return (amount)=>amount+taxRate*amount;
}
const calcGST  = createTaxCalculator(0.18); 
const calcVAT  = createTaxCalculator(0.05);   // 5% VAT
console.log(calcGST(1000));
console.log(calcGST(500));     // 590
console.log(calcVAT(1000));    // 1050

// --------------------
//  TODO F3 — The Classic Loop Bug:
//  The code below prints 3,3,3 instead of 0,1,2.
//  Fix it TWO ways:
//    Fix 1 — change var to let
//    Fix 2 — use an IIFE inside the loop (keep var, wrap in IIFE)
//
//  for (var i = 0; i < 3; i++) {
//    setTimeout(() => console.log(i), 100);
//  }
// --------------------

// Fix 1:
 for (let i = 0; i < 3; i++) {
   setTimeout(() => console.log(i), 100);
 }

// Fix 2 (IIFE):
for (var i = 0; i < 3; i++) {
 ( function (i){
     setTimeout(() => console.log(i), 100);
  })(i)
 }


// --------------------
//  TODO F4 — Memoization:
//  Write a function called memoize(fn) that caches results.
//  The first call with a given argument computes the result.
//  Subsequent calls with the same argument return the cached result
//  and print "cache hit".
//
//  const slowDouble = n => {
//    // pretend this is slow
//    return n * 2;
//  };
//
//  const fastDouble = memoize(slowDouble);
//  console.log(fastDouble(5));    // 10      (computed)
//  console.log(fastDouble(5));    // cache hit → 10
//  console.log(fastDouble(10));   // 20      (computed)
//  console.log(fastDouble(10));   // cache hit → 20
// --------------------
function memoize(fn) {
    const cache = {};

    return function (arg) {
        if (arg in cache) {
            console.log(`cache hit → ${cache[arg]}`);
            return cache[arg];
        }

        const result = fn(arg);
        cache[arg] = result;

        return result;
    };
}

const slowDouble = function (arg) {
    return arg * 2;
};

 const fastDouble = memoize(slowDouble);
 console.log(fastDouble(5));    // 10      (computed)
 console.log(fastDouble(5));    // cache hit → 10
 console.log(fastDouble(10));   // 20      (computed)
 console.log(fastDouble(10));   // cache hit → 20

// ─────────────────────────────────────────────────────────────────────────────
//  SECTION G — Pure Functions & Side Effects
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION G: Pure vs Impure ===");

// --------------------
//  TODO G1 — Classify each function as PURE or IMPURE and explain why.
//  Write your answer as a comment next to each.

let discount = 10;

const fn1 = (price) => price - discount;
// Pure or Impure? Why? Impure- depend on discount

const fn2 = (price, disc) => price - disc;
// Pure or Impure? Why? pure

const fn3 = (arr) => arr.push(99);
// Pure or Impure? Why? impure

const fn4 = (arr) => [...arr, 99];
// Pure or Impure? Why? pure

const fn5 = () => new Date().toISOString();
// Pure or Impure? Why? impure
// --------------------


// --------------------
//  TODO G2 — Refactor to pure:
//  The function below is impure. Rewrite it as a pure function
//  that returns a new object instead of mutating the original.
//
//  const originalUser = { name: "Ali", score: 50 };

function addBonus(user, bonus) {
  user.score += bonus;   // ❌ mutates original
  return user;
}

//  Rewrite addBonusPure(user, bonus) here:
const originalUser = { name: "Ali", score: 50 }
function addBonusPure(user, bonus) {
  return{...user,
score:user.score+bonus}
}
console.log(addBonusPure(originalUser, 20));

//  Test:
//  const originalUser = { name: "Ali", score: 50 };
//  const updatedUser = addBonusPure(originalUser, 20);
//  console.log(originalUser.score);   // 50  — unchanged
//  console.log(updatedUser.score);    // 70  — new object
// --------------------


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION H — BONUS CHALLENGE: Mini Middleware System
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION H: Bonus Challenge ===");

// --------------------
//  Build a simple Express-style middleware pipeline using closures and HOFs.
//
//  Write a function called createApp() that returns an object with:
//    use(fn)       — registers a middleware function
//    run(request)  — runs all middleware in order, passing the request through
//
//  Each middleware function has the signature: (req, next) => void
//  It should modify req and call next() to pass control to the next middleware.
//  If a middleware doesn't call next(), the pipeline stops.
//
//  Example:
//
//  const app = createApp();
//
//  app.use((req, next) => {
//    req.timestamp = new Date().toISOString();
//    console.log("Middleware 1: timestamp added");
//    next();
//  });
//
//  app.use((req, next) => {
//    req.user = "Ahmed";
//    console.log("Middleware 2: user attached");
//    next();
//  });
//
//  app.use((req, next) => {
//    if (!req.user) {
//      console.log("Middleware 3: blocked — no user");
//      return;   // does NOT call next — pipeline stops
//    }
//    console.log("Middleware 3: access granted");
//    next();
//  });
//
//  app.use((req, next) => {
//    console.log("Middleware 4: final handler");
//    console.log("Request:", req);
//  });
//
//  app.run({ method: "GET", path: "/dashboard" });
//
//  Expected output:
//  Middleware 1: timestamp added
//  Middleware 2: user attached
//  Middleware 3: access granted
//  Middleware 4: final handler
//  Request: { method: 'GET', path: '/dashboard', timestamp: '...', user: 'Ahmed' }
//
//  Hint: createApp() uses a closure to keep the middleware array private.
//        run() should use a recursive or index-based approach to call next().
// --------------------
function createApp(){
    return{
        
    }
}



// ==========================================================================
//  END OF EXERCISE 03
//
//  ✅ CHECKLIST before moving to Exercise 04:
//  [ ] I can write functions 3 ways (declaration, expression, arrow)
//  [ ] I understand hoisting difference between declaration and expression
//  [ ] I know when arrow functions lose "this" — and why
//  [ ] I can use default and rest parameters confidently
//  [ ] I understand why arrow braces need explicit return
//  [ ] I can pass functions as arguments (callbacks)
//  [ ] I can write HOFs that take AND return functions
//  [ ] I understand closures and private state
//  [ ] I can fix the var-in-loop closure bug
//  [ ] I can identify pure vs impure functions
//  [ ] Bonus middleware challenge done
//
//  NEXT: Exercise 04 → Arrays & Objects (destructuring, spread, methods)
// ==========================================================================