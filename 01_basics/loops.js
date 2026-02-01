// for loop

for(let i=1; i<=5; i++){
    // console.log("Rishabh yadav");   
};

// console.log("loop is ended");



let sum = 0;

for (let num = 1; num <= 5; num++) {
    sum = sum + num;
}

// console.log("sum =", sum);

// infinite loop

// for(let i =1; i>=0; i++){
//     // console.log("i=", i);
// }


// while loop

// while(condition){
//     //do some work
// }


let i =1;
while(i<=10){
    // console.log("i=", i);
    i++;
    
}


//do while loop

// do{
//     //do some work
// }(condition);


//for-of loop

// for(let val of str val){
//     do some work
// }

let str = "JavaScript"
let size = 0;

for (let value of str){
    // console.log("i=", i);
    size++
}

// console.log("string size", size);


//for-in loop

let student = {
    name: "Rishabh Yadav",
    age:22,
    cgpa:8.5,
    ispass:true
};

for(let key in student){
    // console.log("key=", key,"value",student[key]);
    
}


//  Q. prints all  even number from 1 to 100

for(let num =0; num<=100; num++){
    if(num%2===0){
        //even number / Add Number(!=)
        // console.log("num=", num);
    }
}

// Q create a game where you start with any random game number. Ask the user
// to keep guessing the game number until the user enter correct value

let gameNum = 25;

let userNum = prompt("Guess the game number:");
userNum = Number(userNum);

while (userNum !== gameNum) {
    userNum = Number(prompt("You entered the wrong number. Guess again:"));
}

console.log("Congratulations! You guessed the correct number.");
