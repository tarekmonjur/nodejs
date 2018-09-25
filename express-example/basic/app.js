const express = require('express');
const app = express();
const path = require('path');

const todo = require('./todo');

const port = 3000;

// Build-in Middleware
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/todo', todo);

app.get('/', function(req, res){
    res.send(`home page ${req.url}`);
});

app.get('/about', function(req, res){
    res.send(`about page ${req.url} - ${path.join(__dirname, 'public')}`);
});

app.post('/', function(req, res){
    res.send('post request handle');
});

app.all('/all', function(req, res){
   res.send(`handle all request ${req.url}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
