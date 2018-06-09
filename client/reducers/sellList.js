import {
  ADD,
  SET
} from './../constant/sellList';

const initialState = [];

export default function sellListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      return [
        ...state,
        action.payload,
      ]
    }
    case SET: {
      return action.payload;
    }
  }

  return state;
}
