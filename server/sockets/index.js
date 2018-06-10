const mongo = require('./../db');
const deals = require('./../db/deals');

module.exports = server => {
  const io = require('socket.io')(server.listener, { path: '/ws' });

  io.on('connection', function (socket) {

    socket.on('getBuy', () => {
      mongo(db => {
        db.collection('orders').find({ type: 0, completed: false }).toArray((err, orders) => {
          socket.emit('getBuyResult', orders);
        });
      })
    });

    socket.on('getSell', () => {
      mongo(db => {
        db.collection('orders').find({ type: 1, completed: false }).toArray((err, orders) => {
          socket.emit('getSellResult', orders);
        });
      })
    });

    socket.on('getHistory', () => {
      mongo(db => {
        db.collection('orders').find({ type: 1, completed: true }).toArray((err, orders) => {
          socket.emit('getHistoryResult', orders);
        });
      })
    })

    socket.on('buy', order => {
      mongo(db => {
        db.collection('orders').insert(order);
        socket.broadcast.emit('buyAdd', order);
        matchDeals(db, socket);
      })
    });

    socket.on('sell', order => {
      mongo(db => {
        db.collection('orders').insert(order);
        socket.broadcast.emit('sellAdd', order);
        matchDeals(db, socket);
      })
    })
  });
};

function matchDeals(db, socket) {
  db.collection('orders').find().toArray((err, orders) => {
    if (orders) {
      const sell = orders.filter(item => item.type === 0 && !item.completed);
      const buy = orders.filter(item => item.type === 1 && !item.completed);

      if (sell && buy) {
        sell.forEach(sellItem => {
          var opposite = buy.find(buyItem => {
            return buyItem.price === sellItem.price
              && buyItem.amount === sellItem.amount
              && !buyItem.completed
              && !sellItem.completed;
          })

          if (opposite) {
            db.collection('orders').update({ _id: sellItem._id }, { $set: { completed: true } }, function (err1, result) {
              db.collection('orders').update({ _id: opposite._id }, { $set: { completed: true } }, function (err2, result) {
                console.log('updated', err1, err2);

                const sellNew = sell.filter(item => item._id !== sellItem._id);
                const buyNew = buy.filter(item => item._id !== opposite._id);

                socket.emit('getSellResult', buyNew);
                socket.emit('getBuyResult', sellNew);
                socket.emit('getHistoryAdd', opposite);

                socket.broadcast.emit('getSellResult', sellNew);
                socket.broadcast.emit('getBuyResult', buyNew);
                socket.broadcast.emit('getHistoryAdd', opposite);
              })
            })
          }
        })
      }
    }
  })
}
