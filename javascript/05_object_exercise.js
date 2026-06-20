// ==========================================================================
//  MERN Stack Course — JavaScript Module 04
//  EXERCISE 04: Objects, call/bind/apply, Destructuring, Spread, Class & JSON
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
//  SECTION A — Objects: Creation, Access & Manipulation
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== SECTION A: Objects ===");

// --------------------
//  TODO A1 — Build an object:
//  Create a const called `product` with these properties:
//    id        → 101
//    name      → "Laptop"
//    price     → 45000
//    inStock   → true
//    specs     → a nested object with: ram: "16GB", storage: "512GB"
//
//  Then:
//  a) Print the product name using dot notation
//  b) Print the RAM using dot notation on the nested object
//  c) Add a new property `discount` = 10
//  d) Update price to 40500
//  e) Delete the `discount` property
//  f) Check if "specs" exists using the `in` operator → print true/false
// --------------------

// your code here...


// --------------------
//  TODO A2 — Computed keys & shorthand:
//  You have these variables:
const fieldName = "email";
const email = "ahmed@example.com";
const role  = "admin";
//
//  Create an object called `userData` using:
//    - Property shorthand for email and role
//    - Computed key using fieldName variable so the key is "email"
//      but accessed as userData[fieldName]
//    - A method called getInfo() that returns:
//      "ahmed@example.com is a admin"  (uses this.email and this.role)
//
//  console.log(userData[fieldName]);   // "ahmed@example.com"
//  console.log(userData.getInfo());    // "ahmed@example.com is a admin"
// --------------------

// your code here...


// --------------------
//  TODO A3 — Optional chaining:
//  Given:
const apiResponse = {
  status: 200,
  data: {
    user: {
      name: "Sara",
      address: null
    }
  }
};
//
//  Using optional chaining (?.) safely access:
//  a) apiResponse.data.user.name        → "Sara"
//  b) apiResponse.data.user.address.city → undefined (not an error!)
//  c) apiResponse.data.order.id          → undefined (not an error!)
//
//  Print all three.
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION B — call, bind, apply
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION B: call / bind / apply ===");

// --------------------
//  TODO B1 — call():
//  You have this function and two objects:
function describeProduct(category, currency) {
  return `${this.name} (${category}) costs ${currency}${this.price}`;
}

const laptop = { name: "MacBook Pro", price: 120000 };
const phone  = { name: "iPhone 15",   price: 80000  };
//
//  Use .call() to invoke describeProduct for BOTH objects:
//  Expected:
//  "MacBook Pro (Electronics) costs ₹120000"
//  "iPhone 15 (Electronics) costs ₹80000"
// --------------------

// your code here...


// --------------------
//  TODO B2 — apply():
//  Use the same function above with .apply() this time.
//  Pass arguments as an array: ["Gadgets", "$"]
//
//  Expected:
//  "MacBook Pro (Gadgets) costs $120000"
// --------------------

// your code here...


// --------------------
//  TODO B3 — bind():
//  Create a bound function called `describeLaptop` that permanently
//  locks `this` to the `laptop` object.
//  The function should still accept category and currency as arguments.
//
//  const describeLaptop = describeProduct.bind(laptop);
//  console.log(describeLaptop("Computers", "₹"));
//  // "MacBook Pro (Computers) costs ₹120000"
//  console.log(describeLaptop("Accessories", "$"));
//  // "MacBook Pro (Accessories) costs $120000"
// --------------------

// your code here...


// --------------------
//  TODO B4 — Real-world bind() fix:
//  The code below has a broken `this` problem.
//  Fix it using .bind() WITHOUT changing the setTimeout call.

const timer = {
  label: "Server Response",
  seconds: 0,
  start() {
    setInterval(function() {
      this.seconds++;
      console.log(`${this.label}: ${this.seconds}s`);
    }, 1000);
  }
};
// timer.start();   // Uncomment to test — should print "Server Response: 1s", "Server Response: 2s" etc.
// Fix the broken `this` inside start() using .bind()
// --------------------

// your code here (modify timer object above or write fixed version below)...


// --------------------
//  TODO B5 — Method borrowing with call():
//  The `admin` object below does NOT have a `describe` method.
//  Borrow it from `regularUser` using .call()

const regularUser = {
  name: "Ali",
  plan: "free",
  describe() {
    return `${this.name} is on the ${this.plan} plan`;
  }
};

const admin = {
  name: "Sara",
  plan: "enterprise"
};

//  Expected: "Sara is on the enterprise plan"
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION C — Destructuring
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION C: Destructuring ===");

// Dataset for this section
const order = {
  id: "ORD-001",
  customer: {
    name: "Priya Sharma",
    email: "priya@example.com",
    address: {
      city: "Mumbai",
      pincode: "400001"
    }
  },
  items: ["Laptop", "Mouse", "Keyboard"],
  total: 52000,
  status: "shipped"
};

// --------------------
//  TODO C1 — Basic object destructuring:
//  Extract `id`, `total`, and `status` from order in one line.
//  Print all three.
// --------------------

// your code here...


// --------------------
//  TODO C2 — Nested destructuring:
//  Extract the customer's name and city in ONE destructuring statement.
//  Print: "Priya Sharma lives in Mumbai"
// --------------------

// your code here...


// --------------------
//  TODO C3 — Rename + default:
//  Destructure `order` to get:
//    - `id` renamed to `orderId`
//    - `discount` with default value 0 (order has no discount property)
//  Print: "Order orderId: ORD-001, Discount: 0"
// --------------------

// your code here...


// --------------------
//  TODO C4 — Array destructuring:
//  From order.items:
//  a) Get the first item into `firstItem` and the rest into `otherItems`
//  b) Print: "First: Laptop, Others: Mouse,Keyboard"
// --------------------

// your code here...


// --------------------
//  TODO C5 — Destructuring in function parameter:
//  Write a function called formatAddress({ city, pincode }) that
//  receives an address object and returns "Mumbai - 400001"
//
//  console.log(formatAddress(order.customer.address));
//  // "Mumbai - 400001"
// --------------------

// your code here...


// --------------------
//  TODO C6 — Express simulation:
//  Simulate what you'd do in an Express route handler:
//  Given this mock request object:
const req = {
  params: { id: "USR-42" },
  body: { name: "Kabir", email: "kabir@test.com", password: "secret123", role: "user" },
  query: { page: "1", limit: "10" }
};
//
//  a) Destructure `id` from req.params
//  b) Destructure `name`, `email`, `password` from req.body
//  c) Destructure `page` and `limit` from req.query, with defaults of "1" and "20"
//  d) Print each value
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION D — Spread & Rest
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION D: Spread & Rest ===");

// --------------------
//  TODO D1 — Spread arrays:
//  a) Merge these two arrays into one: [1,2,3] and [4,5,6]
//     Expected: [1,2,3,4,5,6]
//
//  b) Create a copy of [10, 20, 30] and add 40 at the end
//     Expected: [10, 20, 30, 40]  (original unchanged)
//
//  c) Find the max value in [14, 3, 77, 25, 9] using spread + Math.max
//     Expected: 77
// --------------------

// your code here...


// --------------------
//  TODO D2 — Spread objects:
//  a) You have:
const defaults = { theme: "light", language: "en", notifications: true };
const userPrefs = { language: "hi", fontSize: 16 };
//  Merge them so userPrefs overrides defaults.
//  Expected: { theme:"light", language:"hi", notifications:true, fontSize:16 }

//  b) Clone `defaults` and change theme to "dark" WITHOUT modifying original.
//  console.log(defaults.theme);  // still "light"
// --------------------

// your code here...


// --------------------
//  TODO D3 — Rest in destructuring (strip sensitive data):
//  This is a very common Node.js/Express pattern:
const userFromDB = {
  id: 1,
  name: "Ahmed",
  email: "ahmed@example.com",
  password: "hashed_password_xyz",
  token: "secret_token_abc",
  createdAt: "2024-01-15"
};
//
//  Use rest destructuring to create `safeUser` that contains
//  everything EXCEPT password and token.
//
//  console.log(safeUser);
//  Expected: { id:1, name:"Ahmed", email:"ahmed@example.com", createdAt:"2024-01-15" }
//  console.log(password);  // "hashed_password_xyz" — we have it but don't send it
// --------------------

// your code here...


// --------------------
//  TODO D4 — React state update simulation:
//  In React you never mutate state directly. Simulate this pattern:
//
const currentState = {
  user: { name: "Ali", age: 25 },
  cart: ["item1", "item2"],
  isLoading: false
};
//
//  Create `newState` that:
//  a) Changes isLoading to true
//  b) Adds "item3" to the cart (without mutating original array)
//  c) Updates user's age to 26 (without mutating nested object)
//
//  console.log(currentState.isLoading);  // false — original unchanged
//  console.log(newState.isLoading);      // true
//  console.log(newState.cart);           // ["item1", "item2", "item3"]
//  console.log(newState.user.age);       // 26
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION E — class, extends & Prototypes
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION E: class ===");

// --------------------
//  TODO E1 — Build a class:
//  Create a class called `BankAccount` with:
//    constructor(owner, balance = 0)
//    deposit(amount)   → adds to balance, returns new balance
//    withdraw(amount)  → subtracts if sufficient, else returns "Insufficient funds"
//    getStatement()    → returns "Owner: [name] | Balance: ₹[balance]"
//    static isValid(amount) → returns true if amount > 0
//
//  const acc = new BankAccount("Ahmed", 5000);
//  console.log(acc.deposit(2000));        // 7000
//  console.log(acc.withdraw(1000));       // 6000
//  console.log(acc.withdraw(10000));      // "Insufficient funds"
//  console.log(acc.getStatement());       // "Owner: Ahmed | Balance: ₹6000"
//  console.log(BankAccount.isValid(-50)); // false
//  console.log(BankAccount.isValid(100)); // true
// --------------------

// your code here...


// --------------------
//  TODO E2 — Inheritance with extends:
//  Create a class `SavingsAccount` that extends `BankAccount`:
//    constructor(owner, balance, interestRate)
//    addInterest()  → increases balance by (balance * interestRate / 100)
//                     returns "Interest added: ₹[amount], New balance: ₹[newBalance]"
//    Override getStatement() to include interest rate:
//    "Owner: [name] | Balance: ₹[balance] | Rate: [rate]%"
//
//  const savings = new SavingsAccount("Sara", 10000, 5);
//  console.log(savings.deposit(5000));    // 15000  (inherited)
//  console.log(savings.addInterest());    // "Interest added: ₹750, New balance: ₹15750"
//  console.log(savings.getStatement());   // "Owner: Sara | Balance: ₹15750 | Rate: 5%"
//  console.log(savings instanceof BankAccount);  // true
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION F — Built-in Object Methods
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION F: Object Methods ===");

const inventory = {
  laptop: 15,
  mouse: 42,
  keyboard: 28,
  monitor: 7,
  webcam: 19
};

// --------------------
//  TODO F1:
//  a) Print all product names (keys) using Object.keys()
//  b) Print all quantities (values) using Object.values()
//  c) Calculate total inventory count using Object.values() + reduce()
//     Expected: 111
// --------------------

// your code here...


// --------------------
//  TODO F2:
//  Using Object.entries() + for...of, print each product like:
//  "laptop: 15 units"
//  "mouse: 42 units"
//  ...
// --------------------

// your code here...


// --------------------
//  TODO F3:
//  Use Object.entries() + filter + Object.fromEntries() to create
//  a new object `lowStock` containing only items with quantity < 20.
//
//  console.log(lowStock);
//  Expected: { laptop:15, monitor:7, webcam:19 }
// --------------------

// your code here...


// --------------------
//  TODO F4 — Object.freeze():
//  Create a frozen config object:
//  const APP_CONFIG = Object.freeze({ port: 3000, env: "production", version: "1.0.0" });
//
//  Try to change port to 8080 — show it doesn't change.
//  console.log(APP_CONFIG.port);  // still 3000
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION G — JSON
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION G: JSON ===");

// --------------------
//  TODO G1 — stringify & parse:
//  a) Convert this object to a JSON string:
const product = { id: 1, name: "Tablet", price: 30000, inStock: true };
//     Print the JSON string
//     Print its typeof  → "string"

//  b) Parse the JSON string back to an object
//     Print typeof parsed  → "object"
//     Print parsed.name    → "Tablet"
// --------------------

// your code here...


// --------------------
//  TODO G2 — Pretty print:
//  Use JSON.stringify with indentation (null, 2) on this nested object
//  and print the result.
const report = {
  month: "January",
  sales: { total: 150000, count: 42 },
  topProduct: "Laptop"
};
// --------------------

// your code here...


// --------------------
//  TODO G3 — What JSON drops:
//  Stringify this object and observe what disappears:
const tricky = {
  name: "Ali",
  greet: function() { return "Hello"; },
  score: undefined,
  active: true,
  symbol: Symbol("id")
};
//  Print the result — name and active should survive.
//  greet, score, symbol will be dropped.
//  Write a comment explaining why each was dropped.
// --------------------

// your code here...


// --------------------
//  TODO G4 — Deep clone using JSON:
//  Use JSON.parse(JSON.stringify(...)) to deep clone `report` from G2.
//  Modify the clone's sales.total to 999999.
//  Verify original report.sales.total is unchanged.
// --------------------

// your code here...


// ─────────────────────────────────────────────────────────────────────────────
//  SECTION H — BONUS CHALLENGE: Mini User Management System
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SECTION H: Bonus Challenge ===");

// --------------------
//  Build a UserManager class that simulates a backend user service.
//  Requirements:
//
//  class UserManager {
//    constructor()
//      → this.users = []  (private storage)
//      → this.nextId = 1
//
//    addUser({ name, email, role = "user" })
//      → Creates user: { id, name, email, role, createdAt: new Date().toISOString() }
//      → Throws Error("Email already exists") if email taken
//      → Returns the new user object (WITHOUT storing password if one is passed)
//
//    getUser(id)
//      → Returns user object or throws Error("User not found")
//
//    updateUser(id, updates)
//      → Merges updates into existing user using spread
//      → id, email, createdAt cannot be changed (ignore them even if passed)
//      → Returns updated user
//
//    deleteUser(id)
//      → Removes user, returns "User [name] deleted"
//
//    listUsers({ role, search } = {})
//      → Returns all users (as safe objects — no password)
//      → If role provided: filter by role
//      → If search provided: filter by name containing search string (case-insensitive)
//
//    static sanitize(user)
//      → Returns user object without password field (use rest destructuring)
//  }
//
//  Test it:
//
//  const manager = new UserManager();
//
//  const u1 = manager.addUser({ name: "Ahmed", email: "ahmed@x.com", role: "admin" });
//  const u2 = manager.addUser({ name: "Sara",  email: "sara@x.com"  });
//  const u3 = manager.addUser({ name: "Arjun", email: "arjun@x.com" });
//
//  console.log(manager.listUsers());
//  // all 3 users
//
//  console.log(manager.listUsers({ role: "admin" }));
//  // only Ahmed
//
//  console.log(manager.listUsers({ search: "ar" }));
//  // Sara and Arjun (case-insensitive "ar" match)
//
//  console.log(manager.updateUser(2, { name: "Sara Khan", role: "moderator", id: 999 }));
//  // { id:2, name:"Sara Khan", email:"sara@x.com", role:"moderator", createdAt:... }
//  // id stayed 2 — id change was ignored
//
//  console.log(manager.deleteUser(3));
//  // "User Arjun deleted"
//
//  try {
//    manager.addUser({ name: "Duplicate", email: "ahmed@x.com" });
//  } catch(e) {
//    console.log(e.message);  // "Email already exists"
//  }
//
//  try {
//    manager.getUser(999);
//  } catch(e) {
//    console.log(e.message);  // "User not found"
//  }
// --------------------

// your code here...


// ==========================================================================
//  END OF EXERCISE 05 — JavaScript Basics Complete!
//
//  ✅ CHECKLIST before moving to Node.js:
//  [ ] I can create objects with shorthand, computed keys and methods
//  [ ] I understand optional chaining ?.
//  [ ] I know the difference between call, bind and apply
//  [ ] I can fix a broken `this` using bind()
//  [ ] I can borrow methods from other objects using call()
//  [ ] I can destructure objects and arrays with rename and defaults
//  [ ] I can use rest destructuring to strip sensitive fields
//  [ ] I can spread and clone arrays and objects immutably
//  [ ] I can write a class with constructor, methods, static and extends
//  [ ] I can use Object.keys/values/entries/freeze/fromEntries
//  [ ] I understand what JSON.stringify drops and why
//  [ ] I can deep clone a plain object using JSON
//  [ ] Bonus UserManager class done
//
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//   JavaScript Foundation: COMPLETE ✅
//   Next Module → Node.js & Express.js
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ==========================================================================