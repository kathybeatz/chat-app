import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMessages } from '../Actions/messages'

class ChatArea extends Component {
  componentDidMount () {
    // fetch messages from FireBase
    // ISSUE: dispatching this many times,
    // will cause duplicated messages in app state!!
    this.props.dispatch(fetchMessages()) //this.actions.receiveMessages(channel)
  }
  render () {
    // only show previous messages if they exist.

    var list = this.props.data.map(function (data, index) {

      return <span className='message-content' key={index}>
        <a className='username' href=''>{data.user}</a>
        <span className='time'>2:16PM</span>
        <p className='message-body'>{data.message}</p>
      </span>
    })

    if (this.props.data.length >= 1) {
      return (
        <div id='messages-container'>
          {/* <message icon> column */ }
          <span>{list}</span>
        </div>
      )
    } else {
      return (
        <div id='messages-container'>
          {/* <message icon> column */ }
          <span> Leave the first message! </span>
        </div>
      )
    }
  }
}

let mapStateToProps = (state) => {
  // <ChatArea rerenders when data updates
  return { data: state.messages.data }
}

export default connect(mapStateToProps)(ChatArea)
// inject dispatch and listen to store
