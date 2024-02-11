// alert("Hey DOM")
console.log(window);

// Selecting the DOM elements
console.log(document);

// Selectors in JS
// getElementByTagName
// getElementByClassName
// getElementById
// querySelector and 
// querySelectorAll

// getElementByTagName - returns HTML collection
const h1 = document.getElementsByTagName("h1")
console.log(h1); //HTML Collection is an array in DOM
for(let h of h1){
    console.log(h.innerHTML);
}

// getElementByClassName - returns HTML collection
const outline = document.getElementsByClassName("outline")
console.log(outline[0].innerText);

const p = document.getElementsByClassName("para")
for(let para of p){
    console.log(para.innerHTML);
}
// OR
    // console.log(p[0].innerText);

// getElementById - Does not return a HTML collection
const id = document.getElementById("con")
console.log(id.innerHTML);
console.log(id.innerText);
console.log(con.innerText);

// querySelector - It returns the first type or item it sees
// const li = document.querySelector(".con li")
// console.log(li);

// const liAll = document.querySelector("#con li")
// console.log(liAll);

// querySelectorAll - It returns a nodelist as an array

// const liAll = document.querySelectorAll(".con li")
// console.log(liAll);
const liAll = document.querySelectorAll("#con li")
for(let item of liAll)
console.log(item.innerHTML);

const img = document.getElementsByTagName("img")[0]
console.log(img.getAttribute("alt"));

// setAttribute
img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png")


// Thursday 8/2/2024
// console.log(0 == false);

// console.log(Math.ceil(Math.random()*10000));

// Creatng DOM - After the creating the element, you push it to the DOM
let image = document.createElement("img");
image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");

image.setAttribute("alt", "");
image.className = "js-image"
console.log(image);
// Pushing created elements to DOM
document.body.append(image)
// document.body.prepend(image) //Adds the image to the top of the page just like unshift in arrays

// Task
// Create a p tag 
// push it into a div with class name = "con"
// The paragraph should contain the text "This is coming from Javascript"
// Show that text on the DOM 


// Solution
let paragraph = document.createElement("p");
paragraph.textContent = "This is JavaScript"
const division = document.querySelector(".con")
division.appendChild(paragraph)
console.log(division);

// When to use Text content and inner html?


// Modifying CSS properties using JS
let body = document.querySelector("body")

// body.style.backgroundColor = "aqua" 
// body.style.color = "white" 

// const display = () => {
// body.style.color = "aqua" 
// body.style.backgroundColor = "red" 
// }
// setTimeout(display, 1000)

// OR
// setTimeout(() => 
// {body.style.color = "aqua" 
// body.style.backgroundColor = "red"} ,500)

// const changeBg = (bg,color,time) => {
//     body.style.color = "color" 
//     body.style.backgroundColor = "bg" 
// }
const changeBg = (bg,color,time) => {
    setTimeout (() => {
        body.style.color = color 
        body.style.backgroundColor = bg 
    },time) 
}
changeBg("white", "red",5000)
changeBg("red", "green",10000)
changeBg("green", "yellow",15000)
// JS Events
// EventListeners
for(let i =0; i < 8; i+=1){
    console.log(i);
}
for(let i =0; i < 8; i++){
    console.log("#".repeat(i));
}

function greet(who) {
    console.log("Hello " + who);
  }
  greet("Harry");
  console.log("Bye");

function trial() {
    console.log(arguments);
}
trial(1,2)
// const trial = function (){

// }
// const trial = () => {}

function addMultiNums (...nums){
let result = 0;
for(let i = 0; i < nums.length; i++){
    result+= nums[i]
}
return result;
}
console.log(addMultiNums(1,2,3)); 
