import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatArea from './ChatArea'
import TextArea from './TextArea'
import ChatHeader from './ChatHeader'
import Channels from './Channels'

const App = (props) => {
    return (
      <div id='content-wrapper'>
        <ChatHeader />
        <Channels />
        <ChatArea />
        <div id='footer'>
          <div id='filter-feature'></div>
          <TextArea />
        </div>
      </div>
    )
}

export default App
