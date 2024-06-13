require('dotenv').config();

const http = require('http');

const port = process.env.PORT || 3000;
//const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
   
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {

        res.end('<h1>Welcome to my website</h1>');

    } else if (req.url === '/about') {

        res.end('<h1>About us</h1>');

    }

})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`
    );
});
