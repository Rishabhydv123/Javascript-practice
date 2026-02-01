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

///////////////////////////////////////////////////////////////////////////////////////////////


// User input (assume this comes from a form)
let userName = "   rIsHaBh yAdAv   ";
let email = "RISHABH123@gmail.com";
let message = "JavaScript is powerful and JavaScript is fun";

// 1. Clean the user name
let cleanName = userName.trim();
console.log("Clean Name:", cleanName);

// 2. Convert name to proper format
let upperName = cleanName.toUpperCase();
let lowerName = cleanName.toLowerCase();
console.log("Upper Name:", upperName);
console.log("Lower Name:", lowerName);

// 3. Split first name and last name
let nameParts = cleanName.split(" ");
let firstName = nameParts[0];
let lastName = nameParts[1];
console.log("First Name:", firstName);
console.log("Last Name:", lastName);

// 4. Check email domain
if (email.toLowerCase().endsWith("@gmail.com")) {
    console.log("Valid Gmail account");
} else {
    console.log("Invalid email");
}

// 5. Replace word in message
let newMessage = message.replaceAll("JavaScript", "JS");
console.log("Updated Message:", newMessage);

// 6. Count characters
console.log("Message Length:", message.length);

// 7. Extract part of string
let shortMsg = message.slice(0, 20);
console.log("Short Message:", shortMsg);

// 8. Check if word exists
console.log("Contains 'powerful':", message.includes("powerful"));

// 9. Repeat for decoration
console.log("*".repeat(30));

// 10. Final output using template literals
console.log(`
User Details:
Name: ${firstName} ${lastName}
Email: ${email.toLowerCase()}
Message: ${newMessage}
`);
