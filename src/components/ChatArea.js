import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMessages } from '../Actions/messages'
import ReactEmoji from 'react-emoji'

export class ChatArea extends Component {
  componentDidMount () {
    this.props.dispatch(fetchMessages()) //this.actions.receiveMessages(channel)
  }
  render () {
    // only show previous messages if they exist.
    // display messages of active channel

    let list = this.props.data.filter(data =>
      data.channel === this.props.channel
    ).map((data, index) => {
      return (
        <div className='message clearfix' key={index}>
          <img className='profile-image' src={data.user.imageURL} />
            <div className='message-content'>
              <a className='username' href=''>{data.user.name}</a>
              <span className='time'>{data.time}</span>
              <p className='message-body'>{ ReactEmoji.emojify(data.message) }</p>
            </div>
        </div>
      )
    })

    if (this.props.data.length >= 1) {
      return (
        <div id='messages-container'>
          {list}
        </div>
      )
    } else {
      return (
        <div id='messages-container'>
          Leave the first message!
        </div>
      )
    }
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.messages.data,
    channel: state.channels.active.name
  }
}

export default connect(mapStateToProps)(ChatArea)
// inject dispatch and listen to store
