// common js syntax

// const express = require('express');
// const app = express(); // Create an instance of the Express application
// const port = 3000; // Define the port number for the server to listen on

// const  log = console.log;


// // Define a route for the root URL ("/")
// app.get('/', (req, res) => {
//   res.send('Hello World!'); // Send a response to the client
// });


// app.listen(port, () => { 
//      log(`Example app listening at http://localhost:${port}`); // Log a message when the server starts
// });


import express from 'express';
const app = express(); // Create an instance of the Express application
const port = 3000; // Define the port number for the server to listen on

const  log = console.log;

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello World!'); // Send a response to the client
});

app.listen(port, () => { 
     log(`Example app listening at http://localhost:${port}`); // Log a message when the server starts
});