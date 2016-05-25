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
    const buttonDisplay = this.props.user.name === null ? '' : 'none'

    return (
      <div id="login-container">
        <button
          onClick={this.handleClick}
          style={{display: buttonDisplay}}>
          Continue with Facebook
        </button>
      </div>
    )
  }
}

export default connect()(Login)
