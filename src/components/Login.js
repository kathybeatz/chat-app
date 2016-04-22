import React, { Component } from 'react'
import Firebase from 'firebase'

let fb = new Firebase('https://chatapp100.firebaseio.com/messages')

class Login extends Component{
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    fb.authWithOAuthPopup("facebook", (error, authData) => {
      if (error) {
        console.log("Login Failed!", error)
      } else {
        this.props.auth()
        console.log("Authenticated successfully with payload:", authData)
      }
    })
  }
  render () {
    return (
      <div id="login-container">
        <button onClick={this.handleClick}>Sign in with Facebook</button>
      </div>
    )
  }
}

export default Login
