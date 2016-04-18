import { combineReducers } from 'redux';
import { messages } from './messages';
import { channels } from './channels'

const rootReducer = combineReducers({
  messages,
  channels
});

export default rootReducer;
