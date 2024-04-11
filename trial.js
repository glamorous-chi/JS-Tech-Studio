// Promises 
const myName = "Chioma"
const myPromise = new Promise((resolve, reject)=>{
    if (myName == 'Chioma'){
        resolve("That is my name!")
    }
    else{
        reject("That is not my name!")
    }      
    
})
myPromise.then((response)=>{
    console.log(response);
})
.catch((err) =>{
    console.log(err);
})
.finally(()=> {
    console.log("Promised Finalised");
})

// Fetching Data from an API
const url = "https://restcountries.com/v2/all"
fetch(url)
.then((response) => {
    response.json;
})
.then((data)=>{
    console.log(data);
})
.catch((err) => {
    console.log(err);
})

.finally()

// Async and Await

const myFunction = async () => {
    // Handling our errors 
    try{
        const myData = await fetch("https://restcountries.com/v2/all")
        console.log(myData);
    }
    catch(err){
        console.log(err);
    }
    finally{
       console.log("Hey there!"); 
    }
}
myFunction()

// Higher Order Array Functions
// Filter
const countries = ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

// Using the spread Operator/rest Operator
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3)
console.log(rest)
