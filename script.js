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
const isLoggedIn = false;
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

