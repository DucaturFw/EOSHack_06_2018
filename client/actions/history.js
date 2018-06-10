import {
  ADD,
  SET
} from './../constant/history';

const HistoryList = {
  add: item => (dispatch, getState) => {
    dispatch({
      type: ADD,
      payload: item
    })
  },
  set: list => (dispatch, getState) => {
    dispatch({
      type: SET,
      payload: list
    })
  },
}

export default HistoryList;
