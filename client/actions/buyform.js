import { CHANGE } from './../constant/buyform';
import { BUY_TYPE } from './../constant/types';

import { socket } from './../sockets';

const BuyForm = {
  change: data => (dispatch, getState) => {
    dispatch({
      type: CHANGE,
      payload: data
    })
  },
  submit: () => (dispatch, getState) => {
    const data = {
      ...getState().buyForm,
      type: BUY_TYPE,
    };

    console.log('submit data', data);
    socket.emit('buy', data);
  }
}

export default BuyForm;
