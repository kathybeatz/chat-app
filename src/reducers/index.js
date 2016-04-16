import { combineReducers } from 'redux';
import { messages } from '../reducers/messages';

const rootReducer = combineReducers({
  messages,
});

export default rootReducer;
