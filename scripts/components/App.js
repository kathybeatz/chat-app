import React, { Component, PropTypes } from 'react';
import Messages from './Messages'
import InputArea from './InputArea'

const propTypes = {
  message: PropTypes.object.isRequired,
};

class App extends Component {
  render() {
    const { messageList } = this.props.message;
    return (
      <div className='content'>
        <Messages messageList={messageList}/>
        <InputArea dispatch={this.props.dispatch} />
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;