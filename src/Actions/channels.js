export function addChannel (channel) {
  return {
    type: 'ADD_CHANNEL',
    name: channel
  }
}