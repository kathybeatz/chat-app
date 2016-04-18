const initialState = {
  data: []
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
export function messages (state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      // { action.message, action.user }
      return {
        ...state,
        data: [ ...state.data ]
      }
    case 'LOAD_MESSAGES':
      return {
        ...state,
        data: [ ...state.data , action.data ]
      }
    default:
      return state;
  }
}
