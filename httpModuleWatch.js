const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  res.write(`
    
    <html>
      <head>
        <title>My Node.js Server</title>
      </head>
      <body>
        <h1>Welcome to My Node.js Server!</h1>
        <p>This is a simple HTTP server created using Node.js!</p>
      </body>
    </html>

`);

  res.end();
}).listen(3021, () => {
  console.log('Server is running on http://localhost:3021');
});