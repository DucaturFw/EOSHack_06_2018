import io from 'socket.io-client';
import actionsBuyList from './../actions/buyList';
import actionsSellList from './../actions/sellList';

export const socket = io({ path: '/ws' });

export default ({ dispatch }) => {

  socket.emit('getBuy');
  socket.emit('getSell');

  socket.on('getBuyResult', orders => {
    actionsBuyList.set(orders)(dispatch);
  })

  socket.on('getSellResult', orders => {
    actionsSellList.set(orders)(dispatch);
  })

  socket.on('buyAdd', order => {
    actionsBuyList.add(order)(dispatch);
  })

  socket.on('sellAdd', order => {
    actionsBuyList.add(order)(dispatch);
  })
}
