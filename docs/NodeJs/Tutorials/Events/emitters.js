/**
 * EXEMPLE 1
 */
const Events = require('events');

class MyEmitter extends Events {}

const myEmitter = new MyEmitter();

myEmitter.emit('event', {});






/** 
 * EXEMPLE 2
 */
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');