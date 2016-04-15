import React, { PropTypes } from 'react'
import Messages from './Messages'
import InputArea from './InputArea'
import Banner from './Banner'
import Channels from './Channels'

const propTypes = {
  chat: PropTypes.object.isRequired,
}

const App = (props) => {
  const { messagesList } = this.props.chat
  return (
    <div id='content-wrapper' className='clearfix'>
      <Banner />
      <Channels />
      <Messages messagesList={messagesList}/>
      <div id='footer'>
        <div id='filter-feature'></div>
        <InputArea dispatch={this.props.dispatch} />
      </div>
    </div>
  )
}

App.propTypes = propTypes

export default App
