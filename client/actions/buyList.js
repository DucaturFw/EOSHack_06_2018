import {
  CHOICE
} from './../constant/buyList';

import sellForm from './sellform';

const BuyList = {
  choice: item => (dispatch, getState) => {
    sellForm.change(item)(dispatch, getState);
  }
}

export default BuyList;
