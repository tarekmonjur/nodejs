const crypto = require('crypto');

class Random {
    static generateRandomNumber(limit=10){
        var characters = "abcdefghijklmnopqstuvwxyz0123456789";
        var str = '';
        while(1 < limit){
            str += characters.charAt(Math.floor(Math.random() * limit));
            limit--;
        }
        return str;
    }

    randomNumber(limit=16){
        var str = crypto.randomBytes(limit);
        return str.toString('hex');
    }
}

module.exports = Random;