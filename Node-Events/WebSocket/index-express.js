var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.use('/assets', express.static('assets'));

// Custom sockets per location (OR Channels)
app.get('/', function (req, res) {

  res.sendFile(__dirname + '/index.html');

  io.on('connection', function (socket) {
    socket.emit('notif', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });

    socket.on('sendnotif', function (data) {
      socket.emit('notif', { hello: 'world' });
    });

    socket.on('sendbroadcast', function (data) {
      socket.broadcast.emit('broadcast', {message:'hello friends!'});
    });

    socket.on('sendeveryone', function (data) {
      socket.broadcast.emit('broadcast', {message:'hello friends!'});
      socket.emit('broadcast', {message:'hello friends!'});
    });
      
  });
  
});
