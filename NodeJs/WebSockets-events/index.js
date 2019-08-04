var app = require('http').createServer(server);
var io = require('socket.io')(app);
var fs = require('fs');


app.listen(3000);


function server (req, res) {
  fs.readFile(__dirname + '/views/index2.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}



io.on('connection', function (socket) {
  socket.emit('new-connection', { hello: 'username' });

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