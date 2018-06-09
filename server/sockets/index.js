const mongo = require('./../db');

module.exports = server => {
  const io = require('socket.io')(server.listener, { path: '/ws' });

  io.on('connection', function (socket) {

    socket.on('getBuy', () => {
      mongo(db => {
        db.collection('orders').find({ type: 0 }).toArray((err, orders) => {
          socket.emit('getBuyResult', orders);
        });
      })
    });

    socket.on('getSell', () => {
      mongo(db => {
        db.collection('orders').find({ type: 1 }).toArray((err, orders) => {
          socket.emit('getSellResult', orders);
        });
      })
    });

    socket.on('buy', data => {
      mongo(db => {
        db.collection('orders').insert(data);
      })
    });

    socket.on('sell', data => {
      mongo(db => {
        db.collection('orders').insert(data);
      })
    })
  });
};
