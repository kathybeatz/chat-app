import React, { Component } from 'react'
import ChatArea from './ChatArea'
import InputArea from './InputArea'
import ChatHeader from './ChatHeader'
import Channels from './Channels'
import Login from './Login'

class App extends Component {
  constructor () {
    super()
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.state = { authenticated: false }
  }
  isAuthenticated () {
    this.setState({ authenticated: true })
  }
  render () {
    if (this.state.authenticated) {
      return (
        <div id='content-wrapper'>
          <ChatHeader />
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
          <Login auth={this.isAuthenticated} />
        </div>
      )
    }
  }
}

export default App
