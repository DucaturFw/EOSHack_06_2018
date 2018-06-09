import {
  CHOICE
} from './../constant/sellList';

import buyForm from './buyform';

const SellList = {
  choice: item => (dispatch, getState) => {
    buyForm.change(item)(dispatch, getState);
  }
}

export default SellList;
