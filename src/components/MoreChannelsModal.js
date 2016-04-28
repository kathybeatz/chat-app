import React from 'react'

const MoreChannelsModal = (props) => {
  const { all, active, display } = props

  let allChannels = all.map(function (channel, index) {
    // use channel.id as key when we start randomizing ids
    if (channel.name === active.name) {
      return <li className='channel-item' key={index}><a className='active' href='#'>{channel.name}</a></li>
    } else {
      return <li className='channel-item' key={index}><a href='#'>{channel.name}</a></li>
    }
  })
  console.log(all)
  return (
    <div id='new-channel-modal' style={{'display': display}}>
      <div id='modal-container'>
        <button id='hide-modal-btn' onClick={props.hideMoreModal}>x</button>
        <div id='all-channels-container'>
          <ul id='channel-list' onClick={props.handleULclick}>
            {allChannels}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MoreChannelsModal