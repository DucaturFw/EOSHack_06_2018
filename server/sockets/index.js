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

    socket.on('buy', order => {
      mongo(db => {
        db.collection('orders').insert(order);
        socket.broadcast.emit('buyAdd', order);
      })
    });

    socket.on('sell', order => {
      mongo(db => {
        db.collection('orders').insert(order);
        socket.broadcast.emit('sellAdd', order);
      })
    })
  });
};
