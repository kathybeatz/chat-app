import Firebase from 'firebase'
let fb = new Firebase('https://chatapp100.firebaseio.com/messages')

function addMessage () {
  return {
    type: 'ADD_MESSAGE'
  }
}

export function createMessage (data) {
  return dispatch => {
    dispatch(addMessage())
    fb.push({
      message: data.text,
      user: data.user
    })
  }
}

export function fetchMessages (data) {
  // Called when <ChatArea /> first mounts and when
  // a new message is added.
  console.log('fetching')
  return dispatch => {
    fb.on('child_added', function (dataSnapshot) {
      console.log(dataSnapshot.val())
      dispatch(receiveMessages(dataSnapshot.val()))
    })
  }
}

function receiveMessages (dataSnapshot) {
  return {
    type: 'LOAD_MESSAGES',
    data: dataSnapshot
  }
}