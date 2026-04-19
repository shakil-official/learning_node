import express from 'express'; 
import path from 'path';

const app = express(); // Create an instance of the Express application
const port = 3000; // Define the port number for the server to listen on

const log = console.log;

// Define a route for the root URL ("/")
app.get('/', (req, res) => {

    const filePath = path.resolve('index.html'); // Construct the file path to index.html

     res.sendFile(filePath); // Send the HTML file as a response to the client
});

 

app.listen(port, () => {
    log(`Example app listening at http://localhost:${port}`); // Log a message when the server starts
});