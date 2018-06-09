import {
  CHANGE
} from './../constant/sellform';

import { socket } from './../sockets';

const SellForm = {
  change: data => (dispatch, getState) => {
    dispatch({
      type: CHANGE,
      payload: data
    })
  },
  submit: () => (dispatch, getState) => {
    const data = getState().sellForm;

    console.log('submit data', data);
    socket.emit('sell', data);
  }
}

export default SellForm;
