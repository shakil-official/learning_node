const http = require('http');


const data = [
    { id: 1, name: 'John Doe', age : 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age : 25, city: 'Los Angeles' },
    { id: 3, name: 'Michael Johnson', age : 35, city: 'Chicago' },
    { id: 4, name: 'Emily Davis', age : 28, city: 'Houston' },
    { id: 5, name: 'David Wilson', age : 32, city: 'Phoenix' }
];


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    data: data,
    message: 'Data fetched successfully',
  }));
}).listen(3022, () => {
  console.log('Server is running on http://localhost:3022');
});