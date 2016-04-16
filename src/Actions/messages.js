import Firebase from 'firebase'
let fb = new Firebase('https://chatapp100.firebaseio.com/messages')

function addMessage (data) {
  return {
    type: 'ADD_MSG',
    message: data.text,
    user: data.user
  }
}

export function createMessage (data) {
  return dispatch => {
    dispatch(addMessage(data))
    fb.push({
      message: data.text,
      user: data.user
    })
  }
}