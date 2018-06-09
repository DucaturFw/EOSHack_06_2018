import { combineReducers } from 'redux';

import buyForm from './../reducers/buyform';
import sellForm from './../reducers/sellform';
import buyList from './../reducers/buyList';
import sellList from './../reducers/sellList';
import history from './../reducers/history';

export const rootReducer = combineReducers({
  buyForm,
  sellForm,
  buyList,
  sellList,
  history
})
