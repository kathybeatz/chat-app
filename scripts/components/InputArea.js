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
  handleSubmit () {
    // dispatch action to save text as message
    this.props.dispatch(addMessage(this.state.text))
    this.setState({text: ''})
  }
  render () {
    return (
      <div className='input-area'>
        <input
          type='text'
          placeholder='type here'
          onChange={this.handleTextUpdate}
          value={this.state.text}>
        </input>
        <button
          type='submit'
          onClick={this.handleSubmit}>go</button>
      </div>)
  }
}

export default InputArea