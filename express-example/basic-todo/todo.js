const express = require('express');
const router = express.Router();

router.get('/add', function(req, res){
   res.send(`Add this todo =  ${req.url}`);
});

module.exports = router;
