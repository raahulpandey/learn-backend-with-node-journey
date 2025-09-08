Node.js Learning Log
Day 1 – Sep 6, 2025

Installed Node.js and set up the environment.

Learned the difference between Node.js and Browser JavaScript:

Browser runs JS in the client (limited to DOM, window, etc.).

Node.js runs JS on the server (no DOM, has modules like fs, http).

Explored Global Objects in Node.js: __dirname, __filename, require, process.

Practiced using module.exports to share functions and variables across files.

Day 2 – Sep 7, 2025

Learned about Core Node.js Modules:

os → system info (uptime, user info, memory).

path → file path utilities (basename, dirname, join, resolve).

fs → File system module:

Synchronous methods: readFileSync, writeFileSync.

Asynchronous methods with callbacks: readFile, writeFile.

http → created a basic web server with different routes (/, /about, etc.).

Understood the difference between synchronous vs asynchronous file operations.

Day 3 – Sep 8, 2025

Learned about npm (Node Package Manager):

How to download and install npm packages.

How to import and use packages in Node.js projects.

Difference between local vs global packages.

Installed and used nodemon globally to auto-restart the server.

Studied the Event Loop in Node.js:

How Node.js handles asynchronous operations.

Difference between synchronous and asynchronous execution.

Ran small experiments on localhost to see how sync code blocks execution but async code runs without blocking.

Day 4 – Sep 9, 2025

Learned about Promises in Node.js:

How to convert callback-based functions to promises using new Promise().

How resolve and reject work.

Practiced chaining .then() and handling errors with .catch().

Explored async/await syntax:

Made asynchronous code look synchronous.

Used try/catch for error handling with async functions.

Practiced reading multiple files asynchronously using:

fs.readFile with callbacks.

Promisified fs.readFile using util.promisify.

Learned about EventEmitter:

Created custom events with .on() and .emit().

Understood event-driven programming in Node.js.

Experimented with combining async/await and EventEmitter to manage asynchronous events.

Reviewed file path management:

Ensured correct relative paths when reading files.

Used 'utf8' encoding to read text files as strings instead of buffers.
