### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

Some ways of managing asynchronous code in JavaScript (JS) include writing promises that execute asynchronously as other JS code is running. Another way of managing asynchronous code is by using callbacks 

- What is a Promise?

A promise is an object that represents a compeletion or failure of an asynchronous task. Promises are called using async/await keywords. An example of a promise is sending a http request to a website hoping to get a *promise* that you will be receive that data.

- What are the differences between an async function and a regular function?

The main differences between an async function vs. a regular function is one, an async function allows other code to run while in the background. If you need to get data from another site and allow the application to keep running, async functions are perfect for that task. A regular function all runs one at a time and can only run one at a time.

- What is the difference between Node.js and Express.js?

Node is a tool that's used for running js without the need of a web browser. Node's tools include npm, a package manager that can be used to install Express.js, a web application framework that works for Node.js.

- What is the error-first callback pattern?

Error-first callback pattern is a common Node.js convention used for asynchronous operations for callback functions.  

- What is middleware?

Middleware, specifically for Express.js, relates to code that runs in the middle of the processing of a request. For instances running `app.use(express.json)` tells the program to parse for json data in the request.

- What does the `next` function do?

**next()** is a function that passes on control of the request-response to the next middleware function in the middleware stack.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

Some problems with this approach is one, all of these promises are being run sequentially, and not truly asynchronously which you could run with `await Promise.all(...)`. Next if there's an error there's no try catch to stop the function and displaying valuable information to the developer.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
