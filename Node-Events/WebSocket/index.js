var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(3000);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
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
  socket.emit('news', { hello: 'world' });
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