# NodeJs
## Events
---------------------------------------------------------------------
### Basic example
```js
const Events = require('events');
const eventEmitter = new Events.EventEmitter();
class MyEventManager  extends Events {}
```

#### Emitters
```js
const myEmitter = new MyEventManager();
myEmitter.emit('event', { any: "data" });
```

#### Listeners
```js
const myListener = new MyEventManager();
myListener.on('event', data => {
  console.log('an event occurred!' + data.any);
});
// OR
const handleEvent = function (data) { console.log('an event occurred!' + data.any); }
myListener.on('event', handleEvent);
```


---------------------------------------------------------------------
### Resources
* [w3schools](https://www.w3schools.com/nodejs/nodejs_events.asp)
* [Socket.io](https://socket.io/docs/)  
  * [cheatSheet](https://socket.io/docs/emit-cheatsheet/)

#### Articles
* [600k-concurrent-websocket](https://blog.jayway.com/2015/04/13/600k-concurrent-websocket-connections-on-aws-using-node-js/)  
