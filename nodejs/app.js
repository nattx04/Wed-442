const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Time</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Internal Server Error');
                } else {
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    res.end();
                }
            });
        });

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Time</title></head>');
    res.write('<body><h1>Hello From Server</h1></body>');
    res.write('</html>');
    res.end();
};

//module.exports = requestHandler;
exports.handler = requestHandler;
exports.sometxt = 'Msg from routes';
