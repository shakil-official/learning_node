import express from 'express';
import { add } from './math.js';


const app = express(); // Create an instance of the Express application
const port = 3000; // Define the port number for the server to listen on

const log = console.log;

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    log(add(5, 3)); // Log the result of adding 5 and 3 using the add function from math.js
    res.send('Hello World!'); // Send a response to the client
});


app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is the about page.</p>'); // Send a response to the client for the about page
});


app.listen(port, () => {
    log(`Example app listening at http://localhost:${port}`); // Log a message when the server starts
});