// 2. Prototype

// In JavaScript, every object has a prototype.
// A prototype is used to share methods and properties among all objects created from the same constructor or class.
// Why Prototype?
// Saves memory
// Avoids duplication of methods
// Improves performance

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

let p1 = new Person("Rishabh");
let p2 = new Person("Aman");

p1.sayHello();
p2.sayHello();

// sayHello() is stored in Person.prototype
// Both p1 and p2 use the same method
// JavaScript first checks the object, then its prototype (prototype chain)