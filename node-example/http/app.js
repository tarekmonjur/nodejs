const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('url : '+ req.url);
    if(req.url === '' || req.url === '/')
    {
        res.writeHead(200, {'Content-type' : 'text/html'});
        fs.createReadStream('index.html').pipe(res);
    }
    else if(req.url === 'about' || req.url === '/about')
    {
        res.writeHead(200, {'Content-type' : 'text/html'});
        fs.createReadStream('about.html').pipe(res);
    }
    else if(req.url === 'api' || req.url === '/api')
    {
        res.writeHead(200, {'Content-type': 'application/json'});
        let person = {
            name : 'Tarek Monjur',
            position : 'Software Engineer',
        };
        res.write(JSON.stringify(person));
        res.end();
    }
    else
    {
        res.writeHead(200, {'Content-type' : 'text/plain'});
        res.write('Page Not Found.....');
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('New Connection ...');
});

server.listen(3000);
console.log('server listening on port 3000 .....');
