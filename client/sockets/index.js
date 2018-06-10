import io from 'socket.io-client';
import actionsBuyList from './../actions/buyList';
import actionsSellList from './../actions/sellList';
import actionsHistory from './../actions/history';

export const socket = io({ path: '/ws' });

export default ({ dispatch }) => {

  socket.emit('getBuy');
  socket.emit('getSell');
  socket.emit('getHistory');

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

  socket.on('getHistoryResult', history => {
    actionsHistory.set(history)(dispatch);
  })

  socket.on('getHistoryAdd', history => {
    actionsHistory.add(history)(dispatch);
  })
}
