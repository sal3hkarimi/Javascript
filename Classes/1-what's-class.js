class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

typeof User; // function

User === User.prototype.constructor; // true

User.prototype.sayHi; // [Function: sayHi]

Object.getOwnPropertyNames(User.prototype); // [ 'constructor', 'sayHi' ]

