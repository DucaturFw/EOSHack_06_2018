import { CHANGE } from './../constant/buyform';
import { BUY_TYPE } from './../constant/types';

import { socket } from './../sockets';
import actionBuyList from './buyList';

const BuyForm = {
  change: data => (dispatch, getState) => {
    dispatch({
      type: CHANGE,
      payload: data
    })
  },
  submit: () => (dispatch, getState) => {
    const order = {
      ...getState().buyForm,
      type: BUY_TYPE,
    };

    console.log('submit buy data', order);
    socket.emit('buy', order);
    actionBuyList.add(order)(dispatch, getState);
  }
}

export default BuyForm;
