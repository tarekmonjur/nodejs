const EventEmitter = require('events');

class Logger extends EventEmitter {

    log(message)
    {
        this.emit('event', message);
    }
}

module.exports = Logger;