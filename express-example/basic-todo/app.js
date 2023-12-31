const express = require('express');
const app = express();
const path = require('path');

const todo = require('./todo');

const port = 3000;

// Build-in Middleware
app.use('/static', express.static(path.join(__dirname, 'public')));

// Application Middleware
app.use('/todo', todo);

app.get('/', function(req, res){
    res.sendFile(`${__dirname}/home.html`);
});

app.get('/about', function(req, res){
    res.send(`about page ${req.url} - ${path.join(__dirname, 'public')}`);
});

app.post('/', function(req, res){
    res.send('post request handle');
});

app.all('/all', function(req, res){
    console.log(req.query);
   res.send(`handle all request ${req.url} = ${JSON.stringify(req.query)}`);
});

app.get('/test', (req, res) => {
    res.send(`handle all request ${req.param} = ${JSON.stringify(req.query)}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
