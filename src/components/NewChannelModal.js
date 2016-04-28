import React, { Component } from 'react'
import { createChannel } from '../Actions/channels'
import { connect } from 'react-redux'

class NewChannelModal extends Component {
  constructor () {
    super()
    this.handleText = this.handleText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      channel: ''
    }
  }
  handleText (e) {
    this.setState({channel: e.target.value})
  }
  handleSubmit () {
    if (this.state.channel.length > 1) {
      this.props.dispatch(createChannel(this.state.channel))
      this.props.hideModal()
    }
  }
  render () {
    return (
      <div id='new-channel-modal' style={{'display': this.props.display}}>
        <div id='modal-container'>
          <button id='hide-modal-btn' onClick={this.props.hideModal}>x</button>
          <label htmlFor='create-new-channel-name'>Channel name</label>
          <input
            id='create-new-channel-name'
            onChange={this.handleText}
            min='2'
            maxLength='21'></input>
          <button id='create-channel-btn' onClick={this.handleSubmit}>Create Channel</button>
        </div>
      </div>
    )
  }
}

// injecting dispatch into component and not listening to store
export default connect()(NewChannelModal)
