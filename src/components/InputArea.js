import React, { Component } from 'react'
import { connect } from 'react-redux'
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
        text: this.state.text
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
          value={this.state.text}
          maxLength='300'
          minLength='1'
          autoFocus>
        </textarea>
      </div>)
  }
}

// injecting dispatch into component and not listening to store
export default connect()(InputArea)