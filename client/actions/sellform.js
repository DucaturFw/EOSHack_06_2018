import { CHANGE } from './../constant/sellform';
import { SELL_TYPE } from './../constant/types';

import { socket } from './../sockets';

const SellForm = {
  change: data => (dispatch, getState) => {
    dispatch({
      type: CHANGE,
      payload: data
    })
  },
  submit: () => (dispatch, getState) => {
    const data = {
      ...getState().sellForm,
      type: SELL_TYPE
    }

    console.log('submit data', data);
    socket.emit('sell', data);
  }
}

export default SellForm;
