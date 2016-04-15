import React, { Component } from 'react'

const Messages = (props) => {

  var list = props.messagesList.map(function (msg, index) {
      return <span className='message-content' key={index}>
        <a className='username' href=''>User1</a>
        <span className='time'>2:16PM</span>
        <p className='message-body'>{msg}</p>
      </span>
  })

  return <div id='messages-container'>
    {/* <message icon> column */ }
    <span>{list}</span>
  </div>
}

export default Messages