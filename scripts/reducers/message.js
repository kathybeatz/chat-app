const initialState = {
  messageList: [],
};

export function message(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MSG':
      var updatedMessageList = state.messageList.concat([action.message])
      return {
        ...state,
        messageList: updatedMessageList
      }
    default:
      return state;
  }
}
