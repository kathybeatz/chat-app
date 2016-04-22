const initialState = {
  id: '',
  name: '',
  imageURL: ''
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
    default:
      return state
  }
}