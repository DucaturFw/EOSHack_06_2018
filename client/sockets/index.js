import io from 'socket.io-client';

export default ({ dispatch }) => {
  const socket = io({ path: '/ws' });

  socket.emit('burp', 'world');

  socket.on('get', () => {
    // console.log('recieve front');
  })
}
