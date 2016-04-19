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

function shouldFetchMessages(state) {
  // return true if state does not contain any messages
  return state.messages.data.length === 0
}

export function fetchMessages () {
  return (dispatch, getState) => {
    // listen to fb reference if state does not contain messages (eg. initial page load)
    if (shouldFetchMessages(getState())) {
      fb.on('child_added', function (dataSnapshot) {
        dispatch(receiveMessages(dataSnapshot.val()))
      })
    }
  }
}

function receiveMessages (dataSnapshot) {
  return {
    type: 'LOAD_MESSAGES',
    data: dataSnapshot
  }
}