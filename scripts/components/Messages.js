import React, { Component } from 'react'

class Messages extends Component {
  render () {
    // console.log(this.props)
    var list = this.props.messageList.map(function (msg, index) {
      return <span className='message-content'>
        <a className='username' href=''>User1</a>
        <span className='time'>2:16PM</span>
        <p className='message-body' key={index}>{msg}</p>
      </span>
    })

    return (
      <div id='messages-container'>
        {/* <message icon> column */ }
        <span>{list}</span>
        <span className='message-content'>
          <a className='username' href=''>Anna</a><span className='time'>2:16PM</span>
          <p className='message-body'>Maecenas consectetur, massa vitae interdum suscipit, eros
          olor dapibus ante, ac scelerisque mi velit vitae urna.
          Pellentesque dictum tempus est sed auctor. Aliquam at pharetra
          diam. Pellentesque consectetur eros vel sem sodales, a sodales
          leo gravida. Aenean metus mauris, suscipit a est porttitor
          </p>
        </span>
        <span className='message-content'>
          <a className='username' href=''>Haylie</a><span className='time'>3:26PM</span>
          <p className='message-body'>est sed auctor. Aliquam at pharetra.
          </p>
        </span>
        <span className='message-content'>
          <a className='username' href=''>Anna</a><span className='time'>2:16PM</span>
          <p className='message-body'>Maecenas consectetur, massa vitae interdum suscipit, eros
          olor dapibus ante, ac scelerisque mi velit vitae urna.
          Pellentesque dictum tempus est sed auctor. Aliquam at pharetra
          diam. Pellentesque consectetur eros vel sem sodales, a sodales
          leo gravida. Aenean metus mauris, suscipit a est porttitor
          </p>
        </span>
        <span className='message-content'>
          <a className='username' href=''>Haylie</a><span className='time'>3:26PM</span>
          <p className='message-body'>est sed auctor. Aliquam at pharetra.
          </p>
        </span>
      </div>)
  }
}

export default Messages