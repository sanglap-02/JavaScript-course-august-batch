const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain'); // Set content type

    
    if (req.url === '/') {
        res.statusCode = 200; // Home page
        res.end('Welcome to the Home Page!\n');
    } 
    else if (req.url === '/about') {
        res.statusCode = 200; // About Us page
        res.end('About Us: We are a company dedicated to excellence.\n');
    } 
    else if (req.url === '/contact') {
        res.statusCode = 200; // Contact Us page
        res.end('Contact Us: You can reach us at contact@example.com.\n');
    } 
    else {
        res.statusCode = 404; // Not Found
        res.end('404 Not Found\n');
    }
});

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

server.listen(port,hostname,()=>{
    console.log(`server is running on port ${port}`);
})