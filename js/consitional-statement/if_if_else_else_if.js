// if statement

let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Welcome back!");
}

let mode = "dark"
let color;
if(mode === "dark"){
    color = "blue"
}
console.log(color);


// if-else statement

let age = 16;

if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are NOT eligible to vote");
}


// else if

let marks = 82;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else if (marks >= 40) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}


let role = "admin";
let isActive = true;

if (!isActive) {
    console.log("Account is disabled");
} else if (role === "admin") {
    console.log("Full access granted");
} else if (role === "editor") {
    console.log("Edit access granted");
} else if (role === "user") {
    console.log("Read-only access");
} else {
    console.log("Invalid role");
}

//switch Operators


let day = 5;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);


//Ternary Operators

let age4 = 22;
let result = age4 >=18? "adult": "not adult"; //simplex, compact if-else
console.log(result);

// practice
// Q
// let num = prompt("enter a number");

// if(num % 5 ===0){
//     console.log("num, is a multiple 5");
// }
// else {
//     console.log("num, is a not a multiple 5");
// }


// Q

let score = 91;
let grade;

if(score >= 90 && score <=100) {
    grade ="A";
}
else if (score >= 70 && score <=89)  {
    grade = "B";
}
else if (score >= 60 && score <= 69){
    grade = "C";
}
else if (score >= 50 && score <= 59){
    grade ="D"
}
else if (score >= 40 && score <= 49){
    grade = "E"
}
console.log("According to your Score,your grade was:",grade);
