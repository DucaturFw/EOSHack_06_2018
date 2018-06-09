import data from './faucet/cellList.json';

const initialState = data;

export default function sellListReducer(state = initialState, action) {
  console.log('sellList reducer:', action);

  // switch (action.type) {

  // }

  return state;
}
