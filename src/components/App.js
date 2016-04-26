import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatArea from './ChatArea'
import InputArea from './InputArea'
import ChatHeader from './ChatHeader'
import Channels from './Channels'
import Login from './Login'

const App = (props) => {
  // Only render sign-in button IF user has not been authenticaed
  if (props.user.name !== null) {
    return (
      <div id='content-wrapper'>
        <ChatHeader {...props} />
        <Channels />
        <ChatArea />
        <div id='footer'>
          <div id='filter-feature'></div>
          <InputArea />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Login/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.user,
    active: state.channels.active
  }
}

export default connect(mapStateToProps)(App)
