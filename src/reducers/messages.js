const initialState = {
  data: [],
};
/*

state = {
  messages: {
    data: [
      {
        user: 'Anna',
        text: 'hello there!!'
      },
      {
        user: 'hayliebear',
        text: 'wassuuup'
      },
      {
        user: 'mommybear',
        text: 'yallow!'
      }
    ]
  }
}
*/
export function messages(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MSG':
      var updatedData = state.data.concat([action.message])
      return {
        ...state,
        data: updatedData
      }
    default:
      return state;
  }
}
