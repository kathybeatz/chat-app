import React from 'react'

const ChatHeader = (props) => {
  return (
    <div id="chat-header">
      <div id="user-menu">
        <span>Hi, {props.user.name}</span>
      </div>
      <div id="active-channel-name">
        <span>{props.active.name}</span>
      </div>
     {/* Add a drop down of the users in channel */}
    </div>
  )
}

export default ChatHeader