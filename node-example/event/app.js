const Logger = require('./logger');
const logger = new Logger();

var eventHandler = function(data){
    console.log(`set event msg is = ${data}`);
};

logger.on('event', eventHandler);

logger.log('tarek monjur');
