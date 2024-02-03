console.log("Hello World");

// Variables
// Variable declarators: var, let, const
// Formula for creating a variable: declarator variableName = value
// Var can be redeclared and reassigned
var day = "Monday";
let age = 90;
console.log(age);
const _date = "29/01/2024";
let $atmPin = 6789;
console.log(day, _date, $atmPin);

// Let does not allow redeclaration, but reassigning
let middleName="blard"
console.log(middleName);

middleName= "omu"
console.log(middleName);

// const does not allow redeclaration or reassignment
const stage ="su";
const stageName = 'Su';
console.log(stage);
console.log(stageName, typeof(stageName));
const x = "55"
const gravity= 9.8;

console.log(x/gravity)

// Boolean i.e True or False
const isLoggedIn = true;
if(isLoggedIn){
    console.log("Welcome to my world");
}

//Null and Undefined
// Undefined has no value at all
let food
console.log(food);
// Null is similar to an empty plate i.e something is still going to fill that plate
    food=null; 
console.log(food)

// Array
const arr = ["Keyboard", 10, false, null,[1,2,3]];
console.log(arr);

// Create an array called fruits of five fruits
const fruits = ["Mango", "Apple", "Pawpaw","Banana", "Pineapple"];
// const myFruits = ["Mango, Apple, Orange, Banana,Pineapple"];
console.log(fruits)
// console.log(myFruits);

// Objects
const myObject = {
    carbohydrate: "Garri",
    Protein: "Beef",
    fatAndOil:"Butter",
    vitamin:"Orange"
}

const chioma = {
    firstName:"Chioma",
    lastName:"Okeke",
    age:90,
    gender:"female",
    isMarried: true,
    skills:["Cooking", "Coding", "writing", "singing", "researching"],
    occupation: "Student",
    address: {
        city: "Lagos",
        state: "Lagos"
    }
    // fullName: function(){console.log("Full Name = " ,chioma.firstName + " " + chioma.lastName)},
}

// Assignment
// From the object above, print to the console,the following:
// Full Name = "Chioma Okeke"
// Top skill = "Coding"
// CityOfResidence = "Lagos"

// ANSWER

// console.log(chioma.skills[1])
const fName = chioma.firstName
const lName = chioma.lastName
const topSkill = chioma.skills[1]
const fullName = fName + " " + lName
console.log("Full Name:", fullName)
console.log("My top skill is ", topSkill);

console.log("City of residence = " ,chioma.address.city);

// console.log(chioma);
// chioma.fullName();

// String properties and methods

const school = "Techstudio Academy"
const str3 = "My name is "
const fullStatement = "";

// Using the Length property
console.log(school.length);

// Using the indexOf property
console.log(school.indexOf("d"))
console.log(school[7]);

// toUpperCase and toLowerCase
console.log(school.toUpperCase())
console.log(school.toLowerCase());

// Concatenation of Strings
// Using the concat method
// console.log(str3.concat(" ").concat(fullName));
console.log(str3.concat(fullName))
const concatString = str3 + fullName
console.log(concatString);

// Template Literals
const tem = `Hi there!, ${str3} ${fullName}, I am ${chioma.age} years old`
console.log(tem);

// split method
console.log(school.split("a"));
console.log(tem.split(","));

// Slice method
sliceText = `${tem.slice(0,30)} ...`
console.log(sliceText);

// Using Substring
console.log(tem.substring(0,20));

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators

// Arithmetic Operators
let y = 20;
let z = 10;
let sum = Number(x) + y - z
console.log(sum);

// Modulus
console.log(10 % 6);

// Assignment Operators
// They include: =, +=, -=, /=

const mySiblings = ["Nonye", "Chiamaka", "Chigozie"]
console.log(mySiblings);

// +== and -==
let n = 8
console.log(n); //8
n += 10 // 18
console.log(n); //18
n -= 20 //-2
console.log(n); //-2
n /= 2
console.log(n); //-1


// Logical Operators are &&, ||, !
const T = true
const F = false
const isAdult = true

// && - Logical AND
console.log(T && T); // true
console.log(T && F); // false
console.log(F && T); // false
console.log(F && F); // false

// || - Logical OR
console.log(T || T); // true
console.log(T || F); // true
console.log(F || T); // true
console.log(F || F); // false


// &&
if(age >= 18 && isAdult){
    console.log("You can drink Alcohol");
}

// ||
if(age >= 18 || isAdult){
    console.log("You can drink Alcohol");
}
// !

if(age >= 18 || isAdult && isMarried){
    console.log("You can drink Alcohol");
}
let pwd = "mypassword123#"
if(pwd.length > 11 && pwd.includes("#")){
    console.log("Strong passowrd");
}else{
    console.log("Ypur passwor is not strong enough");
}


// Comparison Operators: ==, ===, !=, <, >, >=, <=,!==, etc
// They include: == known as loose comparison: compares the values of the variables and not data types
console.log(x); // "55"
let newNum = 55
console.log(x == newNum); // true
// Strict comparison compares both the values and the data types
console.log(x === newNum); //false

// Math methods: floor, ceil, random, min, max
// Math.floor
// Math.floor() returns only the whole number part of a decimal (Not rounding up or down)
let num1 = 9.64577
console.log(Math.floor(num1)); //9

console.log(Math.ceil(num1)); //10

//Random
// Math.random is used to generate random numbers from 0 to 9
console.log(Math.random() * 10);
const ranNum = (Math.random() * 1000000);
const OTP = Math.floor(ranNum)
console.log(`Enter your secret code ${OTP} to continue`);


const die = (Math.random() * 6);
console.log(Math.ceil(die));

// Conditionals: if, if-else, else-if-else, switch, ternary operator
// if statement
// if(boolean condition){
//     run this code 
// }

// if(isMarried){
//     console.log("Hello Mrs");
// }

// Else
// if(isMarried){
//     console.log("Hello Mrs");
// }else{
//     console.log("Hello Miss");
// }

// else-if-else
// let pass = "sample12323A"
// if(isLoggedIn && pass.length < 8 && !pass.includes(2)){
//     console.log("Weak password");
// }else if(isLoggedIn && pass.length > 8 && pass.length <= 12  && pass.includes("A") && !pass.includes("#")){
//     console.log("Moderately Strong password");
// }else if(isLoggedIn && pass.length > 10 && pass.includes("#") || pass.includes("@")){
//     console.log("Very Strong password");
// }else{
//     console.log("No Match");
// }

// // // Task 5
// // // Create a variables called acctBal, atmPin. Using simple conditional statements, write a code that logs the following:
// // // a) if user is authenticated, and atnPin is correct, it should log the message "Transaction successful! Your account balance is ----"
// // // b) if user is not authenticated or incorrect atmPin, it should log the message "Transaction declined"

// const acctBal = 100000
// const atmPin = 8809
// const isAuthenticated = true;
// // const success = `Transaction successful! Your account balance is ${acctBal}`

// if(isAuthenticated && atmPin === 8809){
//     console.log(`Transaction successful! Your account balance is, ${acctBal}`);
// }
// else{
//     console.log("Transaction declined");
// }

// // Switch Statement
// const days = Math.random()* 7;
// const myDay = Math.floor(days) : 0,1,2,3,4,5,6
// switch(myDay){
//     case 0:
//         console.log("Today is Sunday");
//         break;   
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
//     default:
//         console.log("Invalid entry");
// }

// // Task 6
// // Using switch statement create a banking system that authenticate users, deposits, withdraws and checkbalance


// Authentication
// const myUserName = prompt("Enter Username")
// // console.log(myUserName);

// const myPin = prompt("Enter Pin")
// // console.log(myPin);

// let user = "Chioma";
// let checkbalance = 1000000;

// console.log(`Welcome!,${user} what will you like to do?`);
// const action = String(prompt(`Welcome!,${user} what will you like to do? Enter w for withdrawal, c to check balance and d for deposit`))

// // // if (action == "deposit"){
// // //     console.log(action);
// // // }
// // // else if(action=="withdrawal"){
// // //     console.log("withdrawal");
// // // }
// // // else if(action=="check balance"){
// // //     console.log(`Your balance is ${checkbalance}`);
// // // }
// // // else{
// // //     console.log("You are not logged in");
// // // }

// Switch
// switch(action){
//     case "d":
//         const amount = console.log(prompt("Write amount to deposit"));
//         console.log(`This is the amount, ${amount} you deposited`);
//         break;
//     case "w":
//         const money = console.log(prompt("Write amount to withdraw"));
//         console.log(`This is the amount, ${money} you withdrew`);
//         break;
//     case "c":
//         console.log(`This is your balance, ${checkbalance}`);
//         break;
//     default:
//         console.log("You are not logged in");
// }


// let myInput = prompt("Enter username or PIN")
// let loginPin = myInput.toLowerCase()
// console.log(loginPin);

// let accName = "Chioma";
// let atmPinn = 1234;
// let deposit = "deposit"
// let withdraw = "withdraw"
// let checkBalance = "balance"
// let myAcctBal = 1000;

// const isAuth = loginPin === accName.toLowerCase() || loginPin === atmPinn
// console.log(isAuth);

// if (isAuth) {
//     console.log("Welcome to JSF bank");
//     let transaction = prompt("What would you like to do?").toLowerCase()
//     console.log(transaction);

//     switch(transaction){
//         case deposit:
//             // console.log("Deposit");
//             let depAmt = Number(prompt("Enter amount to deposit"))
//             myAcctBal += depAmt;
//             console.log(`Your new account balance is $${myAcctBal}`);
//             break;
//         case withdraw:
//             let withAmt = Number(prompt("Enter amount to withdraw"))
//             if (withAmt >= myAcctBal){
//                 console.log("Insufficient funds");
//             }
//             else{
//                 myAcctBal -= withAmt;
//                 console.log(`This is your new balance $${myAcctBal}`);
            
//             }
//             // console.log("withdraw");
//             break;
//         case checkBalance:
//             console.log(`This is your new balance $${myAcctBal}`);
//             break;
//         default:
//             console.log("Invalid transaction");
//     }
// }else{
//     console.log("Wrong PIN or username");
// }

// Ternary Operator
// Syntax: booleanCondition ? expression1 : expression2
// isAdmin = true;
// isAdmin ? console.log("Logged in successfully") : console.log("Unauthorized user")


// Arrays
// Array prorperties and Methods
// length, index, shift,unshift,pop,push,splice,join,sort,reverse properties and methods

const cars = ["BMW", "Volvo", "Mercedes","Toyota","Tesla","lambo","Ferrari","Porsche","dodge"]
// Length
console.log(cars.length);
// index
const bmw = cars[0]
const volvo = cars[1]
const mercedes = cars[4]
const toyota = cars[4]
const tesla = cars[4]
const lambo = cars[5]


const bm = cars[0].toLowerCase();
console.log(bm);

// To get the last item in the array
const lastCarIndex = cars.length - 1
console.log(cars[lastCarIndex]);

// Modifying an Array
console.log(cars[1]= "lexus");
console.log(cars);

// Unshift() and push() are used for adding an item at the beginning and the end of the array respectively
// unshift()
cars.unshift("Ford")
console.log(cars);

// push()
cars.push("Ford")
console.log(cars);

// shift() and pop() are used to remove an item at the beginning and the end respectively
// shift()
cars.shift()
console.log(cars);

// pop()
cars.pop()
console.log(cars);

// splice
// Syntax: splice(startIndex,numbOfDeletedItems, addItems)
// Uisng splice to delete items
const del3Cars = cars.splice(2,3)
console.log(cars);
// Using splice to add items
const addCars = cars.splice(2,0,"mazda", "Kia", "Honda")
console.log(cars);

// slice
const top3Cars = cars.slice(0,3)
console.log(top3Cars);

const nextTopCars = cars.slice(3,6)
console.log(nextTopCars);

const lastTopCars = cars.slice(6,9)
console.log(lastTopCars);

let mNum = [20,40,5,100,30,15,10,70,2];

// sorting
const ascending = mNum.sort((a, b) => a - b);
console.log(ascending);

const descending = mNum.sort((a, b) => b - a);
console.log(descending);


// Looping is used when you want to carry out a repetitive task or process.
// console.log("I am a Fullstack web developer 1") ;
// console.log("I am a Fullstack web developer 2");
// console.log("I am a Fullstack web developer 3");
// console.log("I am a Fullstack web developer 4");
// console.log("I am a Fullstack web developer 5");
// console.log("I am a Fullstack web developer 6");
// console.log("I am a Fullstack web developer 7");
// console.log("I am a Fullstack web developer 8");
// console.log("I am a Fullstack web developer 9");
// console.log("I am a Fullstack web developer 10");

// for loop : for, for-of, for-in
// while loop, do-while loop

// for
// Syntax : for(initial; range/condition; increment/decrement){
    // run code;
// }
// for(let i = 1; i <= 10; i++){
//     console.log(`I am a Fullstack web developer ${i}`);
// }

// Using loop create a multiplication times for 12  table 
// for(let i=1; i<=12; i++){
//     if(i % 2 !== 0){
//         continue
//     }
//     console.log(`${i} x 12 = ${i * 12}`);
// }

// // while loop
// // Syntax: 
// let m = 1
// while(m <= 5){
//     console.log(`This is while loop ${m}`);
//     m++;
// }

// let a = 12
// while(a >= 1){
//     console.log(`${a} x 12 = ${a * 12}`);
//     a--;
// }

// // for-of
// for(const car of cars){
//     console.log(`The car brand is ${car.toUpperCase()}`);
// }


// *Learn other string methods and array methods
// Loop through the car array and find the cars that end with "a"
for(const car of cars){
    if(!car.endsWith("a")){
        continue; //continue means skip or move on
    }
    console.log(`The car brand is ${car.toUpperCase()}`);
}

let marks = [1,5,3,2,7,4,6,8,10,9]
// Loop through the marks array and output the following: 
// "Your score is 5, you passed" (for marks > 5)
// "Your score is 3, you failed" (for marks < 5)

// for(const mark of marks){
//     if(mark < 5){
//         console.log(`Your score is ${mark}, you failed`)
//     }
//     else if(mark >= 5){
//         console.log(`Your score is ${mark}, you passed`);
//     }
//     continue;
// }

// Using Ternary Operator
let mark
for(mark of marks){
    mark < 5 ? console.log(`Your score is ${mark}, you failed`) : console.log(`Your score is ${mark}, you passed`)
}

const errCode = ['E', '@', '-', 'l', '@', 'e', 'a', '@','r','n','@','i','@','n','g']
newArra =[]
// This is a corrupted word, clean it up to get the correct word, "E-learning"
// for(const code of errCode){
//      if (code != '@'){
//         code.push(newArra);
//         console.log(newArra)
//      }
//      continue
// }

let word = []
let bug = "@"
for(w of errCode){
    if (w !== "@"){
        word.push(w)
    }
}
console.log(word);
const cleanedCode = word.join("")
console.log(cleanedCode);
