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
    this.props.dispatch(createChannel(this.state.channel))
    this.props.hideModal()
  }
  render () {
    return (
      <div id='new-channel-modal' style={{'display': this.props.style}}>
        <div id='modal-container'>
          <button id='hide-modal-btn' onClick={this.props.hideModal}>x</button>
          <label htmlFor='create-new-channel-name'>Channel name</label>
          <input id='create-new-channel-name' maxLength='30' onChange={this.handleText}></input>
          <button id='create-channel-btn' onClick={this.handleSubmit}>Create Channel</button>
        </div>
      </div>
    )
  }
}

// injecting dispatch into component and not listening to store
export default connect()(NewChannelModal)
