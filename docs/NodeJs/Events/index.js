const Events = require('events');
const eventEmitter = new Events.EventEmitter();
class MyEventEmitter  extends Events {}

// === Emit ======================
const myEmitter = new MyEventEmitter();
myEmitter.emit('event', { any: "data" });

// === Listen ======================
myEmitter.on('event', data => {
  console.log('an event occurred!' + data.any);
});
