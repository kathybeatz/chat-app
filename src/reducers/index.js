import { combineReducers } from 'redux'
import user from './user'
import messages from './messages'
import channels from './channels'

const rootReducer = combineReducers({
  user,
  messages,
  channels
})

export default rootReducer
