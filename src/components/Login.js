import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticateUser } from '../Actions/user'

class Login extends Component{
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.props.dispatch(authenticateUser())
  }
  render () {
    return (
      <div id="login-container">
        <div id="login-content">
          <h3>Welcome to chat app</h3>
          <button onClick={this.handleClick}>Continue with Facebook</button>
        </div>
      </div>
    )
  }
}

export default connect()(Login)
