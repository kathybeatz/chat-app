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
      let loadedChannels = state.all.filter(function (channel) {
        return channel.name !== action.json.name
      }).concat(action.json)
      return {
        ...state,
        all: loadedChannels
      }
    case 'REMOVE_CHANNEL':
      let updatedChannels = state.all.filter(function (channel) {
        return channel.name !== action.json.name
      }) // remove the channel from state that was removed from database
      return {
        ...state,
        all: updatedChannels
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