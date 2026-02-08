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