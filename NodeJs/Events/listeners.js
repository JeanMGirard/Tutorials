const Events = require('events');

class MyReceiver extends Events {}

const myReceiver = new MyReceiver();

myReceiver.on('event', (data) => {
  console.log('an event occurred!');
});

module.exports = myReceiver