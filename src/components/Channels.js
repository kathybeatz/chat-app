import React, { Component } from 'react'
import NewChannelModal from './NewChannelModal'
import { connect } from 'react-redux'
/*
  When user clicks new-channel-button,
  1) Show an input field
    a) user enters channel name
    b) update state with new channel
  2) Change channel to new channel
    a) show messages from that channel
*/
class Channels extends Component {
  constructor () {
    super()
    this.addNewChannelModal = this.addNewChannelModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.state = {
      inputDisplay: 'none' // determines display value of <NewChannelModal />
    }
  }
  addNewChannelModal () {
    this.setState({ inputDisplay: '' })
  }
  hideModal () {
    this.setState({ inputDisplay: 'none' })
  }
  render () {
    const { all } = this.props.channels
    let allChannels = all.map(function (channel, index) {
      return <li id='channel-item'><a href='' key={channel.id}>{channel.name}</a></li>
    })

    return (
      <div id='col_channels'>
        <span id='channels-header'>Channels (1)</span>
        <button id='new-channel-btn' onClick={this.addNewChannelModal}>+</button>
        <ul id='channel-list'>
          {allChannels}
        </ul>
        <NewChannelModal style={this.state.inputDisplay} hideModal={this.hideModal}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps)(Channels)