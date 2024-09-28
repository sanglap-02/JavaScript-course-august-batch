/*
In Express.js, routes and middleware are fundamental concepts for handling HTTP requests and adding functionality to your application

const express = require('express');
const app = express();
const port = 3000;

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




***********************
Creating Middleware
Middleware functions can be executed during the request-response cycle. You can use them to process requests, log activities, authenticate users, etc.

There are three types of middleware in Express.js:

Application-level Middleware: Runs for every route.
Router-level Middleware: Applied only to specific routes.
Error-handling Middleware: Handles errors.


1.Application-level Middleware Example

// Middleware that logs each request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Call next() to pass control to the next middleware
});

// Another middleware that adds a custom header
app.use((req, res, next) => {
  res.setHeader('X-Custom-Header', 'MyApp');
  next();
});

// Root route
app.get('/', (req, res) => {
  res.send('Middleware Example');
});


2.Router-level Middleware Example
// Middleware applied only to /user/:id route
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});

app.get('/user/:id', (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});


3.Error-handling Middleware Example
// Catch all errors and respond
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


************************************************************
Combining Routes and Middleware
You can use middleware functions to process requests before they hit your route handlers.
// Middleware to check if user ID is valid
function validateUserId(req, res, next) {
  if (isNaN(req.params.id)) {
    res.status(400).send('Invalid user ID');
  } else {
    next(); // Proceed to the next middleware or route handler
  }
}

// Applying middleware to a specific route
app.get('/user/:id', validateUserId, (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});


*/

// const express = require('express');
// const app = express();
// const port = 3000;

// // Starting the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// var app=express()


// Application-Level Middleware: This middleware is bound to an instance of the express app.


const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Request Type:', req.method);
  next(); // Move to the next middleware or route handler
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => console.log('Server running on port 3000'));


// Router-Level Middleware: This works similarly to application-level middleware but is bound to an instance of express.Router().
const router = express.Router();

router.use((req, res, next) => {
  console.log('Router-Level Middleware');
  next();
});

router.get('/user', (req, res) => {
  res.send('User Page');
});

app.use('/api', router);

// Error-Handling Middleware: This middleware handles errors that occur in the application. It must have four parameters: (err, req, res, next).

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  
//   Built-In Middleware: Express provides some middleware out-of-the-box, such as:

//   express.static() to serve static files.
app.use(express.static('public'));

