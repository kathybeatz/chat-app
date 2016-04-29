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
      fb.push({
        name: name,
        members: getState().user.id
      })
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

export function fetchChannels () {
  return (dispatch, getState) => {
    fb.on('child_added', function (dataSnapshot) {
      dispatch(receiveChannels(dataSnapshot.val()))
    })
    fb.on('child_removed', function (dataSnapshot) {
      dispatch(removeChannel(dataSnapshot.val()))
    })
  }
}

function removeChannel (json) {
  return {
    type: 'REMOVE_CHANNEL',
    json: json // data of the removed child
  }
}

export function changeChannel (name) {
  return {
    type: 'CHANGE_CHANNEL',
    name: name
  }
}