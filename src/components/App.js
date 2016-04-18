import React, { PropTypes } from 'react'
import ChatArea from './ChatArea'
import InputArea from './InputArea'
import User from './User'
import Channels from './Channels'

const propTypes = {
  messages: PropTypes.object.isRequired,
}

const App = (props) => {
  const { data } = props.messages

  return (
    <div id='content-wrapper' className='clearfix'>
      <User />
      <Channels />
      <ChatArea />
      <div id='footer'>
        <div id='filter-feature'></div>
        <InputArea dispatch={props.dispatch} />
      </div>
    </div>
  )
}

App.propTypes = propTypes

export default App
