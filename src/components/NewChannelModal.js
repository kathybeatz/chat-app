import React, { Component } from 'react'

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
      this.props.addNewChannel(this.state.channel)
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
            placeholder='Name must be unique and greater than 2 characters'
            min='2'
            maxLength='21'></input>
          <button id='create-channel-btn' onClick={this.handleSubmit}>Create Channel</button>
        </div>
      </div>
    )
  }
}

export default NewChannelModal
