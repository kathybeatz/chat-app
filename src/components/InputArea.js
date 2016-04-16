import React, { Component } from 'react'
import { createMessage } from '../Actions/messages';

class InputArea extends Component {
  constructor () {
    super()
    this.handleTextUpdate = this.handleTextUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      text: ''
    }
  }
  handleTextUpdate (e) {
    this.setState({text: e.target.value})
  }
  handleSubmit (e) {
    if (e.keyCode === 13) {
      var newMessage = {
        text: this.state.text,
        user: 'User1' // read the username from props
      }
      this.props.dispatch(createMessage(newMessage))
      this.setState({text: ''})
    }
  }
  render () {
    return (
      <div id='input-area'>
        <textarea
          type='text'
          onChange={this.handleTextUpdate}
          onKeyUp={this.handleSubmit}
          value={this.state.text}>
        </textarea>
      </div>)
  }
}

export default InputArea