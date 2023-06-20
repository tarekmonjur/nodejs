const express = require('express');
const app = express();
const random = require('./modules/random');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

app.get('', function(req, res){
    res.send(`The generate random number is ${random.generateRandomNumber(25)}`);
});

app.get('/random', function(req, res){
    var rand = new random();
    res.send(`The generate random number is ${rand.randomNumber(20)}`);
});

app.listen(port, function(){
    console.log(`server listen port is ${port}`);
});