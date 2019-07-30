const Events = require('events');

class MyEmitter extends Events {}

const myEmitter = new MyEmitter();

myEmitter.emit('event', {});