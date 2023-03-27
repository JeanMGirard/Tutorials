### Events

```js
const Events = require('events');
const eventEmitter = new Events.EventEmitter();
// Or extend the class 'Events'
class MyEventEmitter  extends Events {}

// === Emit ======================
const myEmitter = new MyEventEmitter();
myEmitter.emit('event', { any: "data" });

// === Listen ======================
// myEmitter.on('event', myEventHandler);
myEmitter.on('event', data => {
  console.log('an event occurred!' + data.any);
});
```


---------------------------------------------------------------------
##### Resources
* [w3schools](https://www.w3schools.com/nodejs/nodejs_events.asp)
* [Socket.io](https://socket.io/docs/)  
  * [cheatSheet](https://socket.io/docs/emit-cheatsheet/)
