import React, { Component } from 'react'
import MoreChannelsModal from './MoreChannelsModal'
import NewChannelModal from './NewChannelModal'
import { connect } from 'react-redux'
import { fetchChannels, changeChannel } from '../Actions/channels'

/*

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
    this.hideNewModal = this.hideNewModal.bind(this)
    this.handleULclick = this.handleULclick.bind(this)
    this.showMoreChannelsModal = this.showMoreChannelsModal.bind(this)
    this.state = {
      displayNewChannelModal: 'none', // determines display value of <NewChannelModal />
      displayMoreChannelsModal: 'none'
    }
  }
  componentDidMount () {
    this.props.dispatch(fetchChannels())
  }
  showNewChannelModal () {
    this.setState({ displayNewChannelModal: '' })
  }
  hideNewModal () {
    this.setState({ displayNewChannelModal: 'none' })
  }
  showMoreChannelsModal () {
    this.setState({ displayMoreChannelsModal: '' })
  }
  hideMoreModal () {
    this.setState({ displayMoreChannelsModal: 'none' })
  }
  handleULclick (e) {
    if (e.target.innerHTML.charAt(0) !== "<") {
      this.props.dispatch(changeChannel(e.target.innerHTML))
      this.hideMoreModal() // When user is on MoreChannelsModal and selects channel, hide the modal
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

    if (this.state.displayMoreChannelsModal === '') {
      return (
        <MoreChannelsModal
          all={all}
          active={active}
          display={this.state.displayMoreChannelsModal}
          hideMoreModal={this.hideMoreModal.bind(this)}
          handleULclick={this.handleULclick} />)
    } else if (this.state.displayNewChannelModal === '') {
      return (<NewChannelModal display={this.state.displayNewChannelModal} hideModal={this.hideNewModal}/>)
    } else {
      return (
        <div id='col_channels'>
          <div className='channels-header'>Channels ({all.length})
            <button id='new-channel-btn' onClick={this.showNewChannelModal}>+</button>
          </div>
          <ul id='channel-list' onClick={this.handleULclick}>
            {firstTenChannels}
          </ul>
          {/* return expr2 if there are > 10 channels */}
          {moreChannels && <button id='show-more-ch-btn' onClick={this.showMoreChannelsModal}>+ {all.length - 10} more</button>}
        </div>
      )
    }
  }
}

let mapStateToProps = (state) => {
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps)(Channels)