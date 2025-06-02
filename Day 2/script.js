// A callback is a function passed as an argument to another function.

function greet(name, callback){
    console.log("Hello, "+ name);
    callback(); // Calling the callback function 
}

function goodbye(){
    console.log("Goodbye!");
}

greet("Harikrishna", goodbye);

// Functions running in parallel with other functions are called asynchronous

console.log("start");

setTimeout(()=>{
    console.log("this runs after 2 seconds");
},2000);

console.log("end");

// A promise in javascript is an object that represents a future result of an asynchronous operation. It can be:
// 1. Pending (waiting for the result)
// 2. Fulfilled (operation successful)
// 3. Rejected (operation failed)

let myPromise = new Promise((resolve,reject)=>{
    let success = true;

    if(success){
        resolve("Task completed");
    }else{
        reject("Task failed");
    }
});

// Using the promise
myPromise
    .then((message)=>console.log(message)) // Runs if successful
    .catch((error)=>console.log(error));



    // async and await in javascript

    // async and await are used to handle asynchronous operations more easily.
    // 1. aysnc makes a function return a Promise
    // 2. await pasuses execution until the Promise is resolved.
   
    /*
    async function fetchData(){
        return "Hello, Async";
    }
    fetchData().then((message)=> console.log(message));
*/
    // Example with await

    async function fetchData(){
        let promise = new Promise((resolve)=>setTimeout(()=>resolve("Data is loaded"),4000));
        let result = await promise;
        console.log(result);
    }

    fetchData(); // Outputs after 2 seconds : Data loaded!