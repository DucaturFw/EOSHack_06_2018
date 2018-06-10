import {
  CHANGE
} from './../constant/buyform';

const initialState = {
  price: '36',
  amount: '1',
}

export default function buyFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        ...action.payload
      }
  }

  return state;
}
