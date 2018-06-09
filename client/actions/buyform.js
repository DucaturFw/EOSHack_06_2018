import {
  CHANGE
} from './../constant/buyform';

import { socket } from './../sockets';

const BuyForm = {
  change: data => (dispatch, getState) => {
    dispatch({
      type: CHANGE,
      payload: data
    })
  },
  submit: () => (dispatch, getState) => {
    const data = getState().buyForm;

    console.log('submit data', data);
    socket.emit('buy', data);
  }
}

export default BuyForm;
