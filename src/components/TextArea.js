import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMessage } from '../Actions/messages';

class TextArea extends Component {
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
    const disabledBool = this.props.user.name === null ? true : false
    const placeholder = disabledBool ? 'Please log in with Facebook to leave a message' : ''

    return (
      <div id='create-msg-area'>
        <textarea
          placeholder={placeholder}
          disabled={disabledBool}
          type='text'
          onChange={this.handleTextUpdate}
          onKeyUp={this.handleSubmit}
          value={this.state.text}
          maxLength='1000'
          minLength='1'
          autoFocus>
        </textarea>
      </div>)
  }
}

// injecting dispatch into component and not listening to store
export default connect()(TextArea)