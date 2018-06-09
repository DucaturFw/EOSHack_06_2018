import {
  CHOICE,
  SET,
  ADD
} from './../constant/sellList';

import buyForm from './buyform';

const SellList = {
  choice: item => (dispatch, getState) => {
    buyForm.change(item)(dispatch, getState);
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
  }
}

export default SellList;
