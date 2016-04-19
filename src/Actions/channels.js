import Firebase from 'firebase'
let fb = new Firebase('https://chatapp100.firebaseio.com/channels')

function addChannel (name, id) {
  return {
    type: 'ADD_CHANNEL',
    name: name,
    id: id
  }
}

export function createChannel (name) {
  let id = 0 // make this a unique id
  return (dispatch, getState) => {
    // find any duplicates in state
    let duplicates = getState().channels.all.filter(function (channel) {
      return channel.name === name
    })
    if (duplicates.length === 0) {
      // only add new channel if it is not already found in state
      dispatch(addChannel(name, id))
      fb.push({ name, id})
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