import {
  CHANGE
} from './../constant/sellform';

const initialState = {
  price: '35',
  amount: '1',
}

export default function sellFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        ...action.payload
      }
  }

  return state;
}
