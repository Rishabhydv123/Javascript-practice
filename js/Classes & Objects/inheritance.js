// What is Inheritance?
// Inheritance is a feature of JavaScript that allows one class (child class) to use the properties and methods of another class (parent class).
// It helps in:
// Code reusability
// Cleaner and organized code
// Avoiding duplication

// Parent Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log("My name is " + this.name + " and I am " + this.age + " years old.");
  }
}

// Child Class
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // call parent constructor
    this.course = course;
  }

  study() {
    console.log(this.name + " is studying " + this.course);
  }
}

// Object creation
let s1 = new Student("Rishabh", 21, "B.Sc IT");

// Method calls
s1.introduce(); // inherited method
s1.study();     // child method
