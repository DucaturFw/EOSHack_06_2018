import {
  CHANGE
} from './../constant/buyform';

const BuyForm = {
  change: data => (dispatch, getState) => {
    dispatch({
      type: CHANGE,
      payload: data
    })
  },
  submit: () => (dispatch, getState) => {
    const data = getState().buyForm;
    console.log('submit data', data);
  }
}

export default BuyForm;
