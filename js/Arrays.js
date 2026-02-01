// 1. push()
// Adds one or more elements to the end of an array.
let arr = [1, 2, 3];
arr.push(4);

console.log(arr); // [1, 2, 3, 4]
// Changes original array


// 2. pop()
// Removes the last element from an array.

let arr1 = [1, 2, 3];
arr.pop();

console.log(arr1); // [1, 2]
//  Changes original array


// 3. unshift()
// Adds elements to the beginning of an array.

let arr2 = [2, 3];
arr.unshift(1);

console.log(arr2); // [1, 2, 3]
// Changes original array


// 4. shift()
// Removes the first element of an array.

let arr3 = [1, 2, 3];
arr.shift();

console.log(arr3); // [2, 3]
// Changes original array


// 5. length
// Returns the number of elements in an array.

let arr4 = [10, 20, 30];
console.log(arr4.length); // 3


// 6. indexOf()
// Returns the index of the first matching element.

let arr5 = ["a", "b", "c"];
console.log(arr5.indexOf("b")); // 1
//  Returns -1 if not found


// 7. includes()
// Checks whether an element exists in the array.

let arr6 = [10, 20, 30];
console.log(arr6.includes(20)); // true


// 8. slice()
// Returns a portion of an array (does not modify original).

let arr7 = [1, 2, 3, 4];
let newArr7 = arr7.slice(1, 3);

console.log(newArr7); // [2, 3]
// Does NOT change original array


// 9. splice()
// Adds or removes elements from an array.

let arr8 = [1, 2, 3, 4];
arr.splice(1, 2);

console.log(arr8); // [1, 4]
// Changes original array


// 10. concat()
// Merges two or more arrays.

let a = [1, 2];
let b = [3, 4];

let result = a.concat(b);
console.log(result); // [1, 2, 3, 4]


// 11. join()
// Converts array into a string.

let arr9 = ["Hello", "World"];
console.log(arr9.join(" ")); // Hello World


// 12. reverse()
// Reverses the order of array elements.

let arr10 = [1, 2, 3];
arr.reverse();

console.log(arr10); // [3, 2, 1]
// Changes original array


// 13. sort()
// Sorts array elements.

let arr11 = [10, 2, 5];
arr.sort((a, b) => a - b);

console.log(arr11); // [2, 5, 10]
// Use compare function for numbers


// 14. forEach()
// Executes a function for each element.

let arr12 = [1, 2, 3];

arr.forEach(num => {
  console.log(num * 2);
});
//  Does not return a new array


// 15. map()
// Creates a new array by transforming elements.

let arr13 = [1, 2, 3];
let newArr = arr13.map(num => num * 2);

console.log(newArr); // [2, 4, 6]


// 16. filter()
// Returns elements that satisfy a condition.

let arr14 = [1, 2, 3, 4];
let even = arr14.filter(num => num % 2 === 0);

console.log(even); // [2, 4]


// 17. reduce()
// Reduces array to a single value.

let arr15 = [1, 2, 3, 4];

let sum = arr15.reduce((total, num) => total + num, 0);
console.log(sum); // 10


// 18. find()
// Returns the first element that matches a condition.

let arr16 = [10, 20, 30];
console.log(arr16.find(num => num > 15)); // 20


// 19. findIndex()
// Returns the index of the first matching element.

let arr17 = [10, 20, 30];
console.log(arr17.findIndex(num => num > 15)); // 1


// 20. some()
// Returns true if any element matches condition.

let arr18 = [1, 3, 5];
console.log(arr18.some(num => num % 2 === 0)); // false


// 21. every()
// Returns true if all elements match condition.

let arr19 = [2, 4, 6];
console.log(arr19.every(num => num % 2 === 0)); // true


// 22. flat()
// Flattens nested arrays.

let arr20 = [1, [2, [3]]];
console.log(arr20.flat(2)); // [1, 2, 3]


// 23. Array.isArray()
// Checks if value is an array.

console.log(Array.isArray([1, 2])); // true