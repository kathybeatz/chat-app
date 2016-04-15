import React, { Component } from 'react'
import { addMessage } from '../Actions/messages';

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
      this.props.dispatch(addMessage(this.state.text))
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