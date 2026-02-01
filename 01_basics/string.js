let str = "  Hello World  ";

// length
console.log(str.length); // total characters

// toUpperCase()
console.log(str.toUpperCase());

// toLowerCase()
console.log(str.toLowerCase());

// trim()
console.log(str.trim());

// slice(start, end)
console.log(str.slice(2, 7));

// substring(start, end)
console.log(str.substring(2, 7));

// substr(start, length) (old)
console.log(str.substr(2, 5));

// replace(old, new)
console.log(str.replace("World", "JavaScript"));

// replaceAll(old, new)
let text = "hi hi hi";
console.log(text.replaceAll("hi", "hello"));

// concat()
let a = "Hello";
let b = "JS";
console.log(a.concat(" ", b));

// charAt(index)
console.log(str.charAt(3));

// charCodeAt(index)
console.log(str.charCodeAt(3));

// indexOf(value)
console.log(str.indexOf("o"));

// lastIndexOf(value)
console.log(str.lastIndexOf("o"));

// includes(value)
console.log(str.includes("World"));

// startsWith(value)
console.log(str.trim().startsWith("Hello"));

// endsWith(value)
console.log(str.trim().endsWith("World"));

// split(separator)
let msg = "I love JavaScript";
console.log(msg.split(" "));

// repeat(n)
console.log("Hi ".repeat(3));

// Template Literals
let name = "Rishabh";
let age = 22;
console.log(`My name is ${name} and age is ${age}`);


// Interview MOST IMPORTANT
// length
// toUpperCase()
// toLowerCase()
// trim()
// slice()
// replace()
// split()
// includes()

