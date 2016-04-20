import Firebase from 'firebase'
let fb = new Firebase('https://chatapp100.firebaseio.com/channels')

function addChannel () {
  return {
    type: 'ADD_CHANNEL'
  }
}

export function createChannel (name) {

  return (dispatch, getState) => {
    // array of any duplicates found
    let duplicates = getState().channels.all.filter(function (channel) {
      return channel.name === name
    })
    if (duplicates.length === 0) {
      // only add new channel if is not a duplicate in the state
      fb.push({ name })
      dispatch(addChannel())
      dispatch(changeChannel(name))
    }
  }
}

function receiveChannels (json) {
  return {
    type: 'LOAD_CHANNELS',
    json: json
  }
}

function shouldFetchChannels (state) {
  // return true if state does not contain any channels
  return state.channels.all.length === 0
}

export function fetchChannels () {
  return (dispatch, getState) => {
    // only listen to fb reference if state DOES NOT contain channels (eg. initial page load)
    if (shouldFetchChannels(getState())) {
      fb.on('child_added', function (dataSnapshot) {
        dispatch(receiveChannels(dataSnapshot.val()))
      })
    }
  }
}

export function changeChannel (name) {
  return {
    type: 'CHANGE_CHANNEL',
    name: name
  }
}