import { CHANGE } from './../constant/sellform';
import { SELL_TYPE } from './../constant/types';

import { socket } from './../sockets';
import actionSellList from './sellList';

const SellForm = {
  change: data => (dispatch, getState) => {
    dispatch({
      type: CHANGE,
      payload: data
    })
  },
  submit: () => (dispatch, getState) => {
    const order = {
      ...getState().sellForm,
      type: SELL_TYPE,
      completed: false,
    }

    console.log('submit sell data', order);
    socket.emit('sell', order);
    actionSellList.add(order)(dispatch, getState);
  }
}

export default SellForm;
