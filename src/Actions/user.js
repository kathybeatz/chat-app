import Firebase from 'firebase'
let fb = new Firebase('https://chatapp100.firebaseio.com/')

function receiveAuth (authData) {
  return {
    type: 'ADD_USER',
    data: authData
  }
}

export function authenticateUser () {
  return (dispatch) => {
    // Authenticate with pop up
    fb.authWithOAuthPopup("facebook", (error, authData) => {
      if (error) {
        console.log("Login Failed!", error)
      } else {
        dispatch(saveUser(authData)) // save user data to database
        dispatch(receiveAuth(authData)) // save it to app state
        // console.log("Authenticated successfully with payload:", authData)
      }
    })
  }
}

function saveUser (authData) {
  return () =>
    // set uid as the key, so only unique users will be added to database
    fb.child('users').child(authData.uid).set({
    provider: authData.provider,
    name: authData.facebook.displayName
  })
}

export function unauthenticate () {
  return (dispatch) =>
  dispatch(signOut())
  fb.unauth // explicity end session
}

function signOut () {
  return {
    type: 'SIGN_OUT'
  }
}