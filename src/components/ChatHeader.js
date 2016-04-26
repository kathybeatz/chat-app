import React, { Component } from 'react'

class ChatHeader extends Component {
  constructor () {
    super()
    this.handleShowMenu = this.handleShowMenu.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
    this.state = {
      style: 'none'
    }
  }
  handleSignOut () {
    console.log('sign out')
  }
  handleShowMenu () {
    this.setState({ style: ''})
  }
  handleHideMenu () {
    // why can't I bind this func in constructor?
    this.setState({ style: 'none'})
  }
  render () {

    return (
      <div id='chat-header'>
        <div id='user-menu'>
          <button onClick={this.handleShowMenu} onBlur={this.handleHideMenu.bind(this)}>Hi, {this.props.user.name}<div className="arrow-down">&#9660;</div></button>
          <div id='signout-dropdown' style={{'display': this.state.style}}>
            <a href='#'onClick={this.handleSignOut}>Sign out</a>
          </div>
        </div>
        <div id='active-channel-name'>
          <span>{this.props.active.name}</span>
        </div>
       {/* Add a drop down of the users in channel */}
      </div>
    )
  }
}

export default ChatHeader