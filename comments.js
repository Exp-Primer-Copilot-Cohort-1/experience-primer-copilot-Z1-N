// Create web server
// 1. Create server
// 2. Create route
// 3. Create response
// 4. Listen to port

const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>Home Page</h1>');
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>About Page</h1>');
        res.end();
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>Contact Page</h1>');
        res.end();
    } else if (req.url === '/api/users') {
        res.writeHead(200, { 'content-type': 'application/json' });
        const users = [
            { name: 'John', age: 40 },
            { name: 'Jane', age: 30 },
        ];
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url === '/api/comments') {
        res.writeHead(200, { 'content-type': 'application/json' });
        fs.readFile('./data/comments.json', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const comments = JSON.parse(data);
                res.write(JSON.stringify(comments));
                res.end();
            }
        });
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
