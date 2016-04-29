import Firebase from 'firebase'
let fb = new Firebase('https://chatapp100.firebaseio.com/messages')

function addMessage () {
  return {
    type: 'ADD_MESSAGE'
  }
}

export function createMessage (data) {
  return (dispatch, getState) => {
    let date = new Date()
    dispatch(addMessage())
    fb.push({
      id: `${Date.now()}${getState().user.id}`, // time + UID of user
      message: data.text,
      user: getState().user,
      channel: getState().channels.active.name,
      time: date.toString()
    })
  }
}

export function fetchMessages () {
  return (dispatch, getState) => {
    fb.on('child_added', function (dataSnapshot) {
      dispatch(receiveMessages(dataSnapshot.val()))
    })
    fb.on('child_removed', function (dataSnapshot) {
      dispatch(removeMessage(dataSnapshot.val()))
    })
  }
}

function receiveMessages (json) {
  return {
    type: 'LOAD_MESSAGES',
    json: json
  }
}

function removeMessage (json) {
  return {
    type: 'REMOVE_MESSAGE',
    json: json // data of the removed child
  }
}