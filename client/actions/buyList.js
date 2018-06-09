import {
  SET,
  CHOICE
} from './../constant/buyList';

import sellForm from './sellform';

const BuyList = {
  choice: item => (dispatch, getState) => {
    sellForm.change(item)(dispatch, getState);
  },
  set: list => (dispatch, getState) => {
    dispatch({
      type: SET,
      payload: list
    })
  }
}

export default BuyList;
