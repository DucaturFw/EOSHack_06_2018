import {
  CHOICE,
  SET
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
}

export default SellList;
