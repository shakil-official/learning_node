const http = require('http'); // module import

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello, World!');
// }); // creating server



// making route
// const server = http.createServer((req, res) => {

//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Welcome to the Home Page!');
//     } else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('This is the About Page.');
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Page Not Found');
//     }

// }); // creating server


const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Welcome to the Home Page!' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Page Not Found' }));
    }

}); // creating server

server.listen(3020, () => {
    console.log('Server is running on port 3020');
});