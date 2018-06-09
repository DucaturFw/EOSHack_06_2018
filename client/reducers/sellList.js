import {
  SET
} from './../constant/sellList';

const initialState = [];

export default function sellListReducer(state = initialState, action) {
  switch (action.type) {
    case SET: {
      return action.payload;
    }
  }

  return state;
}
