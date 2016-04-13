export function addMessage (text) {
  return {
    type: 'ADD_MSG',
    message: text
  }
}