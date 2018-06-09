import {
  CHANGE
} from './../constant/sellform';

const initialState = {
  price: '',
  amount: '',
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
