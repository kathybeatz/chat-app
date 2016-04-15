import React, { Component, PropTypes } from 'react';
import Messages from './Messages'
import InputArea from './InputArea'
import Banner from './Banner'
import Channels from './Channels'

const propTypes = {
  message: PropTypes.object.isRequired,
};

class App extends Component {
  render() {
    const { messageList } = this.props.message;
    return (
      <div id='content-wrapper' className='clearfix'>
        <Banner />
          <Channels />
          <Messages messageList={messageList}/>
        <div id='footer'>
          <div id='filter-feature'></div>
          <InputArea dispatch={this.props.dispatch} />
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
