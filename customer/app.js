const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const logger = function(req, res, next){
    console.log(`Logging... ${req}`);
    next();
};

app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

var person = {
    name : 'Tarek Monjur',
    age : 26,
};

app.get('', (req, res) => {
    // res.send('Hello Express!');
    res.json(person);
});

app.listen(port, () => {
    console.log(`App listening port is : ${port}`);
});