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
        <button onClick={this.handleClick}>Sign in with Facebook</button>
      </div>
    )
  }
}

export default connect()(Login)
