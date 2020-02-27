
var redis = require("redis");
var subscriber = redis.createClient();
subscriber.on("message", function (channel, message) {
 console.log("on channel: " + channel + " : " + message);
});
subscriber.subscribe("notification");