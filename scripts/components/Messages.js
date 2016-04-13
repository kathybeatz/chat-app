import React, { Component } from 'react'

class Messages extends Component {
  render () {
    // console.log(this.props)
    var list = this.props.messageList.map(function (msg, index) {
      return <p key={index}>{msg}</p>
    })

    return (
      <div className='messages-container'>{list}</div>)
  }
}

export default Messages