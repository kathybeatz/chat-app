import React, { Component } from 'react'

class NewChannelModal extends Component {
  // pass a function to button onlick that will return true
  render () {
    return (
      <div id='new-channel-modal' style={{'display': this.props.style}}>
        <button id='hide-modal-btn' onClick={this.props.hideModal}>x</button>
        <input></input>
      </div>
    )
  }
}
export default NewChannelModal