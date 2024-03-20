import { combineReducers } from 'redux';
import types from '../actions/types';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    case types.ADD:
      return state + action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  count: countReducer
});
