// const a=10;
// {
//     const a=20
// }
// console.log(a) //10
// // hoisting(calling funcion before declaring the function)

// greet()

// function greet(){
//     console.log('iam nanda')
// }
// ===========================================

// Lexical scope

// function outer(){
//     let outer = 'iam nanda'

//     function inner(){
//         console.log(outer)
//     }
//     inner()
// }
// outer()
// =========================================
// async and await
function data(){
    return new Promise((resolve) =>{
      setTimeout(() =>{
        resolve('it is async function')
      },3000);
    })
  }
  async function getdata(){
    const result = await data()
    console.log('fetching.....')
    console.log(result)

  }
  getdata()
// ========================
// handling errors using try catch

function data(error){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (error){
                reject('data not fetched')
            }
            else{
                resolve('data fetched succesfully')
            }
        },4000)
    })
}
async function getdata(){
    try{
        const result = await data(false)
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
getdata()
// ==========================================
// Fetching multiple promises in parallel
function data(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (id == 2){
                reject(`data for id:${id}`)
            }
            else{
                resolve(`data fetched id:${id}`)
            }
        },3000)
    })
}
async function getdata(){
    const result = await Promise.allSettled([
        data(1),
        data(2),
        data(3)
    ])
    console.log(result)
}
getdata()
// =================================
// sorting of Array

// ascending
let arr = [2,5,7,8,9,4]
arr.sort((a,b) => a-b)
console.log(arr)
// decending
arr.sort((a,b) => b-a)
console.log(arr)
// array to string ascending
let array = ['nanda','Nanda','kumar']
array.sort()
console.log(array)
// descending
array.sort((a,b) => b.localeCompare(b))
console.log(array)
// ==============================================
// sorting of objects
// ascending
let obj = [
    {name:'nanda',age:40},
    {name:'bengalore',age:20},
    {name:'bolt',age:23}
]
obj.sort((a,b) => a.age - b.age)
console.log(obj)
// descending
obj.sort((a, b) => b.name.localeCompare(a.name));
console.log(obj);
// sorting dates(ascending)
const dates = [
    new Date("2023-05-01"),
    new Date("2021-07-15"),
    new Date("2022-12-10")
];

dates.sort((a, b) => a - b);
console.log(dates);
// descending
dates.sort((a, b) => b - a);
console.log(dates);
// ==================================================
// data types(primitive)
// 1. String – Represents text
let name = "Alice";
console.log(typeof name); // "string"
// 2. Number – Represents integers and floating-point numbers
let age = 25;
let price = 99.99;
console.log(typeof age);   // "number"
console.log(typeof price); // "number"
// 3. BigInt – Used for large integers
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"
// 4. Boolean – Represents true or false
let isLoggedIn = true;
console.log(typeof isLoggedIn); // "boolean"
let m = (false)
console.log( typeof m)
// 5. Undefined – A variable that has been declared but not assigned
let value;
console.log(typeof value); // "undefined"
// 6. Null – Represents an intentional absence of value
let empty = null ;
console.log(typeof empty); // "object" (this is a known JavaScript bug)
// 7. Symbol – Unique and immutable identifier
let uniqueID = Symbol("id");
console.log(typeof uniqueID); // "symbol"
// ===============================================
// non-primitive
// 1. Object – Stores key-value pairs
let person = { name: "Alice", age: 25 };
console.log(typeof person); // "object"
// 2. Array – A special type of object that stores ordered values
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // "object"
// 3. Function – A callable block of code (also a type of object)
function greet() {
    return "Hello!";
}
console.log(typeof greet); // "function"
console.log(greet) 
// ƒ greet() {
//     return "Hello!";
// }
// 4. Date – Represents dates and times
let today = new Date();
console.log(typeof today); // "object"
console.log(today); // returns today date and time
// NAN
let result = 0 / 0;
console.log(isNaN(result) ? "Invalid number" : result);
// =============================================================
// Promise Chaining in JavaScript 🚀
// A promise chain is a sequence of .then() methods used to handle asynchronous operations in a structured way. Each .then() receives the result of the previous promise and returns a new promise.
// 1. Basic Promise Chain
new Promise((resolve, reject) => {
    setTimeout(() => resolve("Step 1"), 1000);
})
.then(result => {
    console.log(result); // "Step 1"
    return "Step 2";
})
.then(result => {
    console.log(result); // "Step 2"
    return "Step 3";
})
.then(result => {
    console.log(result); // "Step 3"
})
.catch(error => console.error("Error:", error)); // Handles any error
// 
// Promise Chaining in JavaScript 🚀
// A promise chain is a sequence of .then() methods used to handle asynchronous operations in a structured way. Each .then() receives the result of the previous promise and returns a new promise.

// 1. Basic Promise Chain
new Promise((resolve, reject) => {
    setTimeout(() => resolve("Step 1"), 1000);
})
.then(result => {
    console.log(result); // "Step 1"
    return "Step 2";
})
.then(result => {
    console.log(result); // "Step 2"
    return "Step 3";
})
.then(result => {
    console.log(result); // "Step 3"
})
.catch(error => console.error("Error:", error)); // Handles any error
// ✅ Each .then() gets the previous result and returns a new value.
// ✅ .catch() handles errors for the entire chain.

// 2. Promise Chain with Async Operations
function fetchData(step, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Data from ${step}`), delay);
    });
}

fetchData("API 1", 1000)
.then(result => {
    console.log(result);
    return fetchData("API 2", 2000);
})
.then(result => {
    console.log(result);
    return fetchData("API 3", 1500);
})
.then(result => console.log(result))
.catch(error => console.error("Error:", error));
// ====================================================

if ([]){
    console.log('nanda')
}
else{
    console.log('lumar')
}
// =================================
console.log([]== false) //true
// ======================================
// More Weird Comparisons
console.log([] == 0);        // true (empty array converts to 0)
console.log("" == 0);        // true (empty string converts to 0)
console.log(false == "");    // true (false and empty string both convert to 0)
console.log(false == null);  // false (null is only loosely equal to undefined)
console.log(false == undefined); // false (special case)
console.log(null == undefined); // true (special rule)
