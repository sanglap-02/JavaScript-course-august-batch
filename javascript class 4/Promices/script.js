/*
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous tasks, like data fetching or other time-consuming operations, without blocking the execution of code.

Key Concepts of Promises:
States:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation was completed successfully.
Rejected: The operation failed.
Value:

The result of a fulfilled promise or the reason for rejection.
Handlers:

.then(onFulfilled, onRejected): Attaches callbacks for the success or failure of the promise.
.catch(onRejected): Attaches a callback for only the failure of the promise.
.finally(onFinally): Attaches a callback that is invoked regardless of the outcome.

How Promises Work:
Creating a Promise: The new Promise constructor takes a function as an argument with two parameters: resolve and reject. This function executes asynchronously and eventually calls resolve (if the operation is successful) or reject (if it fails).

Chaining Promises: Promises can be chained using .then(), which allows you to handle a sequence of asynchronous operations.

*/

const myPromise = new Promise((resolve, reject) => {
    const success = true;
  
    if (success) {
      resolve("The operation was successful!");
    } else {
      reject("The operation failed.");
    }
  });
  
  // Using the promise
  myPromise
    .then((message) => {
      console.log(message); // "The operation was successful!"
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Operation completed, regardless of success or failure.");
    });
  

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
