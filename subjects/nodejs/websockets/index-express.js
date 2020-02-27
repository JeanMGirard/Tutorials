var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    nunjucks = require('nunjucks');

// LOADING .env
require('dotenv').config();


/**
 *  CONFIGURING EXPRESS
 */
server.listen(process.env.PORT);

app.use('/assets', express.static('assets'));
app.set('views', __dirname + '/views');
nunjucks.configure('views', {
  express: app,
  autoescape: true
});
app.set('view engine', 'html');


/**
 *  CONFIGURING ROUTES
 */
// Custom sockets per location (OR Channels)
app.get('/', function (req, res) {

  res.render('index', { 
    // ws_host: 'localhost:3000,
      ws_host: process.env.HOST + ":" + process.env.PORT,
      message: 'Hello there!' 
  });


  /**
   * SET EVENTS LISTENED TO
   */
  io.on('connection', function (socket) {

    socket.on('new-connection', function (data) {
      console.log(data);
    });


    socket.emit('notif', { hello: 'world' });



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
