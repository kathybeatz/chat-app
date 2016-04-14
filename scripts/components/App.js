import React, { Component, PropTypes } from 'react';
import Messages from './Messages'
import InputArea from './InputArea'
import Banner from './Banner'

const propTypes = {
  message: PropTypes.object.isRequired,
};

class App extends Component {
  render() {
    const { messageList } = this.props.message;
    return (
      <div id='content-wrapper'>
        <Banner />
        <Messages messageList={messageList}/>
        <div id="footer">
          <InputArea dispatch={this.props.dispatch} />
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
