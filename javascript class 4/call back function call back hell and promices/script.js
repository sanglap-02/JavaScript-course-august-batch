/* asynchronous Javascript
0. spread operator 
1. Settimeout function
2. call back function and call back hell
What is Callback Hell?
Callback hell refers to the situation in JavaScript where multiple nested callbacks are used to perform asynchronous operations in sequence. It often results in code that is hard to read, maintain, and debug due to its deeply nested structure.

Problems with Callback Hell:
Difficult to Read: The code becomes increasingly difficult to read as the nesting increases.
Hard to Maintain: Making changes or debugging becomes cumbersome.
Error Handling: Managing errors across multiple callbacks can be challenging and lead to convoluted code.
How Promises Help Overcome Callback Hell:
Promises help to manage asynchronous operations more effectively by flattening the nested structure of callbacks and allowing for easier error handling and chaining of operations.


How Promises Improve the Code:
Chaining: Promises allow you to chain asynchronous operations, making the flow of execution more linear and easier to follow.

Instead of nesting callbacks, each .then() returns a new promise, allowing you to chain the next operation.
Error Handling: With promises, you can handle errors in a centralized way using .catch().

If any promise in the chain is rejected, the error is passed down to the .catch() block, avoiding the need for error handling in each callback.
Readability: The code is flatter and more readable, avoiding the deeply nested structure of callbacks.
*/


// Example of callback hell
// function getData(callback) {
//     setTimeout(() => {
//       console.log("Data retrieved");
//     }, 1000);
//   }
  
//   function processData(callback) {
//     setTimeout(() => {
//       console.log("Data processed");
//       callback();
//     }, 1000);
//   }
  
//   function saveData(callback) {
//     setTimeout(() => {
//       console.log("Data saved");
//       callback();
//     }, 1000);
//   }
  
//   // Nested callbacks (callback hell)
//   getData(() => {
//     processData(() => {
//       saveData(() => {
//         console.log("All done!");
//       });
//     });
//   });


  // Example of using Promises to avoid callback hell

function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if(true){
        //   const err=new Error("The data fetching failed")
        //   reject(err)
        // }
        console.log("Data retrieved");
        resolve("Data");
      }, 1000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data processed");
        resolve("Processed Data");
      }, 1000);
    });
  }
  
  function saveData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data saved");
        resolve("Saved Data");
      }, 1000);
    });
  }
  
  // Chaining promises
  getData()
    .then(processData)
    .then(saveData)
    .then((result) => {
      console.log("All done!", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(()={
      
    })


    // Using async/await to avoid callback hell

async function performOperations() {
    try {
      const data = await getData();
      const processedData = await processData(data);
      const savedData = await saveData(processedData);
      console.log("All done!", savedData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  performOperations();



  // const arr1=[1,2,3,5]
  // const arr3=[4,5]

  // const arr2=[...arr1,...arr3,"hi"]

  // console.log(arr2);


  // const obj={
  //   a : "hi",
  //   b : "23"
  // }

  // const {vala,valb}=obj // object destructuring 


  // settimeout function 

  // console.log("hi");
  // // console.log("hi2");
  // setTimeout(()=>{
  //   console.log("hi");
  // },2000) // 2000 is in miliseconds


  // console.log("hi3");


  // function printhello(){
  //   console.log("hi 2");
  // }








  
  
  