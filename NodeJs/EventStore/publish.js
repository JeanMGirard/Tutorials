var redis = require("redis");
var publisher = redis.createClient();

publisher.publish("notification", 
    '{"message":"Hello-World"}', function(){
        process.exit(0);
    }
);
