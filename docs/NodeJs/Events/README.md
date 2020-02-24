# NodeJs
## Events

```js
const Events = require('events');
const eventEmitter = new Events.EventEmitter();
class MyEventEmitter  extends Events {}
```

#### Emitting
```js
const myEmitter = new MyEventEmitter();
myEmitter.emit('event', { any: "data" });
```

### Receivers
```js
const myReceiver = new MyEventEmitter();
myReceiver.on('event', data => {
  console.log('an event occurred!' + data.any);
});
```



#### Resources
https://www.w3schools.com/nodejs/nodejs_events.asp
- [Socket.io](https://socket.io/docs/)  
- [Emit cheatsheet](https://socket.io/docs/emit-cheatsheet/)

#### Articles
- [600k-concurrent-websocket](https://blog.jayway.com/2015/04/13/600k-concurrent-websocket-connections-on-aws-using-node-js/)  
