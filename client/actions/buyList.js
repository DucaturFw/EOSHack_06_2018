import {
  ADD,
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
  },
  add: item => (dispatch, getState) => {
    dispatch({
      type: ADD,
      payload: item
    })
  },
}

export default BuyList;
