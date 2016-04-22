import Firebase from 'firebase'

let fb = new Firebase('https://chatapp100.firebaseio.com/messages')

function receiveAuth (authData) {
  return {
    type: 'ADD_USER',
    data: authData
  }
}

export function authenticateUser () {
  return (dispatch) => {
    fb.authWithOAuthPopup("facebook", (error, authData) => {
      if (error) {
        console.log("Login Failed!", error)
      } else {
        dispatch(receiveAuth(authData))
        // console.log("Authenticated successfully with payload:", authData)
      }
    })
  }
}