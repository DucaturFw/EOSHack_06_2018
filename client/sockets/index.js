import io from 'socket.io-client';

export const socket = io({ path: '/ws' });

export default ({ dispatch }) => {

  // socket.emit('burp', 'world');

  // socket.on('get', () => {
  //   // console.log('recieve front');
  // })
}
