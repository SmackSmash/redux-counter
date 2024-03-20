import { combineReducers } from 'redux';

const testReducer = () => 'This is just a test';

export default combineReducers({
  test: testReducer
});
