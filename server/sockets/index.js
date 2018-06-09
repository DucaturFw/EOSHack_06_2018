module.exports = server => {
  const io = require('socket.io')(server.listener, { path: '/ws' });

  io.on('connection', function (socket) {

    socket.emit('get');

    socket.on('burp', (data) => {
      console.log('recieve messages');

      socket.emit('Excuse you!');
    });
  });
};
