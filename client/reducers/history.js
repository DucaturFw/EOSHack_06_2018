import {
  ADD,
  SET
} from './../constant/history'

const initialState = [];

export default function sellListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.payload
      ];
    case SET:
      return action.payload;
  }

  return state;
}
