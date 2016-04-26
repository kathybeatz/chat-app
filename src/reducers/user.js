const initialState = {
  id: null,
  name: null,
  imageURL: null
}

export function user (state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        id: action.data.uid,
        name: action.data.facebook.displayName,
        imageURL: action.data.facebook.profileImageURL
      }
    case 'SIGN_OUT':
      return {
        ...state,
        id: null,
        name: null,
        imageURL: null
      }
    default:
      return state
  }
}