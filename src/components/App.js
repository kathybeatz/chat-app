import React, { PropTypes } from 'react'
import ChatArea from './ChatArea'
import InputArea from './InputArea'
import ChatHeader from './ChatHeader'
import Channels from './Channels'
import Login from './Login'

const App = (props) => {

  return (
    <div id='content-wrapper'>
      <Login />
      <ChatHeader />
      <Channels />
      <ChatArea />
      <div id='footer'>
        <div id='filter-feature'></div>
        <InputArea />
      </div>
    </div>
  )
}

export default App
