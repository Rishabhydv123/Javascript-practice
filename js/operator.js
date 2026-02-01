//operator
//(used to perform some operation on data)

            // Arithmetic operator
                   //  (+,-,*,/)

let a = 5;
let b = 2;

// console.log("a = ", a, "& b = ", b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);

// modulud (%)
console.log("a % b =", a % b);

// unary operator
console.log("a = ", a, "& b = ", b);
// a = a + 1;//6
console.log("a =", a);//6
// a++; //+
console.log("a =", a);
// a-1;
console.log("a =", a);
// a--;
console.log("a =", a);
++a;
console.log("++a =", ++a);
// --a;
console.log("--a =", --a);


//Assignment operators

let a1 = 5;
let b1 = 2;

a1 += 6; //a = a+6
console.log("a1 =", a1); //11

a1 -= 6; //a = a-6
console.log("a1 =", a1); //5

a1 *= 6; //a = a*6
console.log("a1 =", a1); //30

a1 %= 6; //a = a%6
console.log("a1 =", a1); //0

a1 ** 4; //a = a**4
console.log("a1 =", a1); //0

//comparision operator

let a2 = 6;
let b2 = 7;

console.log("a2 == b2", a2 == b2);
console.log("a2 != b2", a2 != b2);
console.log("a2 === b2", a2 === b2);
console.log("a2 > b2", a2 > b2);
console.log("a2 >= b2", a2 >= b2);
console.log("a2 < b2", a2 < b2);
console.log("a2 <= b2", a2 <= b2);

// logical operator

let a3 = 6;
let b3 = 7;

console.log("cand1 && cnad2", a<b && a ===b);
console.log("cand1 || cnad2", a<b || a ===b);
console.log("cand1 ! cnad2", !(a<b));