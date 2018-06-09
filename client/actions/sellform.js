import {
  CHANGE
} from './../constant/sellform';

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
  }
}

export default SellForm;
