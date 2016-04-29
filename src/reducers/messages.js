const initialState = {
  data: []
}

export function messages (state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state
      }
    case 'LOAD_MESSAGES':
      let loadedData = state.data.filter(function (obj) {
        return obj.id !== action.json.id
      }).concat(action.json)
      // Preventing duplicates in state...
      // Create an array with messages of unique ID's
      // Add JSON data of newly added child to array state
      return {
        ...state,
        data: loadedData
      }
    case 'REMOVE_MESSAGE':
      let updatedData = state.data.filter(function (obj) {
        return obj.id !== action.json.id
      })
      return {
        ...state,
        data: updatedData
      }
    default:
      return state;
  }
}
