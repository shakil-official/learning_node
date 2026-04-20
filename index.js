import express from 'express';
import path from 'path';
import { failAndExit } from './services.js'; // Import the failAndExit function from the services module

const app = express(); // Create an instance of the Express application
const port = 3000; // Define the port number for the server to listen on

app.use(express.urlencoded({ extended: true }))
app.use(express.json()); // for JSON

const log = console.log;



// Define a route for the root URL ("/")
app.get('/', (req, res) => {

    const filePath = path.resolve('index.html'); // Construct the file path to index.html

    res.sendFile(filePath); // Send the HTML file as a response to the client
});


app.post('/login', (req, res) => {
    // Handle form submission logic here

    log('Received form submission:', req.body); // Log the form data received in the request body



    const { username, password } = req.body;

    if (username === 'admin@restaurantpos.com' && password === 'password') {

        log('Login successful!'); // Log a success message if the credentials are correct

        res.send('Form submitted successfully!'); // Send a response back to the client

    }

    res.send(failAndExit()); // Send a response back to the client
});


app.listen(port, () => {
    log(`Example app listening at http://localhost:${port}`); // Log a message when the server starts
});