const initialState = {
  active: {
    name: 'Main'
  },
  all: []
}

export function channels (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CHANNEL':

      return {
        ...state
      }
    case 'LOAD_CHANNELS':
      let loadedChannels = state.all.concat(action.json)
      return {
        ...state,
        all: loadedChannels
      }
    case 'CHANGE_CHANNEL':
      return {
        ...state,
        active: { name: action.name }
      }
    default:
      return state
  }
}