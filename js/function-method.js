// Block of code that perform a specific task can be invoked whenever needed

// Function
function sayHi() {
  console.log("Hi!");
}
sayHi();

// Method
let obj = {
  sayHi: function () {
    console.log("Hi!");
  }
};
obj.sayHi();



let prices = [100, 200, 300, 400];

// 1. Apply 10% discount
let discounted = prices.map(price => price * 0.9);

// 2. Filter prices above 200
let filtered = discounted.filter(price => price > 200);

// 3. Calculate total
let total = filtered.reduce((sum, price) => sum + price, 0);

console.log(total);


// reduce()
// reduce() is used to reduce an array into a single value.

let numbers = [1, 2, 3, 4];

let total1= numbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(total1);


// filter()
// filter() is used to select elements based on a condition.


let numbers1 = [1, 2, 3, 4, 5];

let evenNumbers = numbers1.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers)

// map()
// map() is used to create a new array by modifying each element.

let numbers2 = [1, 2, 3, 4];

let square = numbers2.map((num) => {
  return num * num;
});

console.log(square);


// orEach()
// forEach() is used to loop through an array.


let numbers3 = [1, 2, 3, 4];

numbers3.forEach((num) => {
  console.log(num);
});


// Arrow Function (=>)
// Arrow function is a short way to write a function.

function add(a, b) {
  return a + b;
}

// const add = (a, b) => a + b;