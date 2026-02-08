// 1. Constructor

// A constructor is a special method in a class that is automatically executed when an object is created.
// Purpose of Constructor:
// Initialize object properties
// Assign values at the time of object creation
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let s1 = new Student("Rishabh", 21);
console.log(s1.name); // Rishabh


// 3. super Keyword
// The super keyword is used in a child class to:
// Call the parent class constructor
// Access parent class methods
// It is used when inheritance is involved.


class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }
}

let s2 = new Student("Rishabh", "B.Sc IT");
s2.greet(); // Hello Rishabh


// extends makes Student inherit from Person
// super(name) calls the parent constructor
// super() must be called before using this in child constructor

// 4. Relationship Between Constructor, Prototype, and super
// Constructor initializes object data
// Prototype stores shared methods
// super connects child class to parent class

// 5. Key Interview Points
// Constructor runs once per object
// Prototype methods are shared among all objects
// super() is mandatory in child class constructor
// JavaScript classes are based on prototypes (syntactic sugar)