import {
  CHANGE
} from './../constant/buyform';

const initialState = {
  price: '',
  amount: '',
}

export default function buyFormReducer(state = initialState, action) {
  console.log('buyform reducer:', action);

  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        ...action.payload
      }
  }

  return state;
}
