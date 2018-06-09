const mongo = require('./../db');

module.exports = server => {
  const io = require('socket.io')(server.listener, { path: '/ws' });

  io.on('connection', function (socket) {
    socket.on('buy', data => {
      console.log('buy', data);

      mongo(db => {
        console.log('db', db);

        db.collection('orders').insert(data);
      })
    });

    socket.on('sell', data => {
      console.log('sell', data);

      mongo(db => {
        console.log('db', db);

        db.collection('orders').insert(data);
      })
    })
  });
};
