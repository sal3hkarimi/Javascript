Symbol() === Symbol(); // false
Symbol("ali").description === Symbol("ali").description; // true

/*
 * Uses Symbol
 */

// 1- Using symbols as unique values
const statuses = {
  OPEN: Symbol("Open"),
  IN_PROGRESS: Symbol("In progress"),
  COMPLETED: Symbol("Completed"),
  HOLD: Symbol("On hold"),
  CANCELED: Symbol("Canceled"),
};

// 2- Using symbol as the computed property name of an object
const status = Symbol("status");
const task = {
  [status]: statuses.OPEN,
  description: "Learn ES6 Symbol",
};

Object.getOwnPropertyNames(task); // ["description"];
Object.keys(task); // ["description"];
Object.values(task); // ["Learn ES6 Symbol"]
Object.getOwnPropertySymbols(task); // [Symbol(status)];
// not iterator in "for in"

// 3- Well-known symbols

const numbersList = [1, 2, 3];
numbersList + 1; // "1,2,31"

numbersList[Symbol.toPrimitive] = () => 144;
numbersList + 1; // 145

/**
 * Types Well-known symbols
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols
 *
 * 1- Symbol.hasInstance
 * 2- Symbol.iterator
 * 3- Symbol.match
 * 4- Symbol.matchAll
 * 5- Symbol.replace
 * 5- Symbol.search
 * 5- Symbol.split
 * 5- Symbol.toPrimitive
 * 5- Symbol.toStringTag
 */

// 1- Symbol.hasInstance
const arrayNames = ["Ali", "Mohammad"];
arrayNames instanceof Array; // true
arrayNames instanceof Object; // true
arrayNames instanceof String; // false

// Change instanceof in class:
class Users {
  static [Symbol.hasInstance](instance) {
    // console.log(instance);
    return true;
  }
}

"instance string" instanceof Users; /*
    instance string
    true
*/

// Change instanceof in object:
const person = {
  [Symbol.hasInstance]: (instance) => {
    // console.log(instance);
    return true;
  },
};

[] instanceof person; /*
    []
    true
*/

// 5- Symbol.toPrimitive
const numbers = [1, 2, 4, 5, 6];
numbers + 1; // 1,2,4,5,61

numbers[Symbol.toPrimitive] = () => "Number-";
numbers + 1; // Number-4

// 2- Symbol.iterator
const iterator = numbers[Symbol.iterator]();

iterator.next(); // { value: 1, done: false }
iterator.next(); // { value: 2, done: false }
iterator.next(); // { value: 4, done: false }
iterator.next(); // { value: 5, done: false }
iterator.next(); // { value: 6, done: false }

// iterate in classes
class List {
  constructor() {
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
    return this;
  }

  *[Symbol.iterator]() {
    for (let element of this.elements) {
      yield element;
    }
  }
}

const chars = new List();
chars.add("A").add("B").add("C");

for (let ch of chars) {
  // console.log(ch);
} /*
A
B
C
*/

// concat object in array
// default
const courseNames = {
  0: "Javascript",
  1: "Node.js",
  length: 2,
};

let message = ["learning"];
message.concat(courseNames); // [ ("learning", { 0: "Javascript", 1: "Node.js", length: 2 }) ];

const courseNamesCS = {
  0: "Javascript",
  1: "Node.js",
  length: 2,
  [Symbol.isConcatSpreadable]: true,
};

const contact = {
  name: "Jan",
  family: "Deo",
  numberPhone: +989123456789,
  [Symbol.isConcatSpreadable]: true,
};

let messageCS = ["learning"];
messageCS.concat(courseNamesCS); // [ 'learning', 'Javascript', 'Node.js' ]
messageCS.concat(contact); // [ 'learning' ]

/**
 * Private & Public with symbol
 */

const email = Symbol();
const Employee = {
  name: "Jon Doe",
  number: "09123456789",
  [email]: "jondoe@gmail.com",
};

const allKeys = Reflect.ownKeys(Employee); // [ 'name', 'number', Symbol() ]
const privetKeys = Object.getOwnPropertySymbols(Employee); // [ Symbol() ]
const publicKeys = Object.getOwnPropertyNames(Employee); // [ 'name', 'number' ]

// in classes
const VALUE = Symbol("keyValue");
class Secret {
  constructor(value) {
    this[VALUE] = value;
  }

  get() {
    return this[VALUE];
  }
}

const mySecret = new Secret("password");
mySecret["VALUE"]; // undefined
Symbol("value"); // Symbol(value)
Symbol.for("value"); // Symbol(value)
Object.getOwnPropertyNames(mySecret); // []
mySecret.get(); // password
