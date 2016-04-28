import React, { Component } from 'react'
import NewChannelModal from './NewChannelModal'
import { connect } from 'react-redux'
import { fetchChannels, changeChannel } from '../Actions/channels'
/*
  When user clicks new-channel-button,
  1) Show an input field
    a) user enters channel name
    b) update state with new channel
  2) Change channel to new channel
    a) show messages from that channel

  When user clicks on a channel
  1) Handle event through UL.
  * Expand the button to the full size of list element so the user only clicks button element.
  * Temporary solution is to dispatch action with innerHTML that doesn't
    begin with "<"

*/
class Channels extends Component {
  constructor () {
    super()
    this.showNewChannelModal = this.showNewChannelModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.handleULclick = this.handleULclick.bind(this)
    this.showMoreChannelsModal = this.showMoreChannelsModal.bind(this)
    this.state = {
      displayNewChannelModal: 'none' // determines display value of <NewChannelModal />
    }
  }
  componentDidMount () {
    this.props.dispatch(fetchChannels())
  }
  showNewChannelModal () {
    this.setState({ displayNewChannelModal: '' })
  }
  hideModal () {
    this.setState({ displayNewChannelModal: 'none' })
  }
  showMoreChannelsModal () {}
  handleULclick (e) {
    if (e.target.innerHTML.charAt(0) !== "<") {
      this.props.dispatch(changeChannel(e.target.innerHTML))
    }
  }
  render () {
    const { all, active } = this.props.channels
    const moreChannels = all.length > 10

    let firstTenChannels = all.slice(0,10).map(function (channel, index) {
      // use channel.id as key when we start randomizing ids
      if (channel.name === active.name) {
        return <li className='channel-item' key={index}><a className='active' href='#'>{channel.name}</a></li>
      } else {
        return <li className='channel-item' key={index}><a href='#'>{channel.name}</a></li>
      }
    })
    return (
      <div id='col_channels'>
        <button className='channels-header' onClick={this.showMoreChannelsModal}>Channels</button>({all.length})
        <button id='new-channel-btn' onClick={this.showNewChannelModal}>+</button>
        <ul id='channel-list' onClick={this.handleULclick}>
          {firstTenChannels}
        </ul>
        <NewChannelModal display={this.state.displayNewChannelModal} hideModal={this.hideModal}/>
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