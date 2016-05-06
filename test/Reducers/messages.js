import expect from 'expect'
import messagesReducer from '../../src/reducers/messages'

describe('messages reducer', () => {
  it('should return the initial state by default', () => {
    let state = {
      data: []
    }
    expect(messagesReducer(state, 'NONEXISTENT_ACTIONTYPE')).toEqual(state)
  })

  it('should handle ADD_MESSAGE', () => {
    expect(messagesReducer(undefined, { type: 'ADD_MESSAGE' })).toEqual({data: []})
  })

  it('should handle LOAD_MESSAGES', () => {
    let state = {
      data: []
    }
    let updatedState = {
      data: [{
        channel: "For sale",
        id: "1461896652437facebook:10209242138234756",
        message: "Hello!",
        time: "Thu Apr 28 2016 19:24:12 GMT-0700 (PDT)",
        user: {}
      }]
    }
    let action = { type: 'LOAD_MESSAGES', json: {
        channel: "For sale",
        id: "1461896652437facebook:10209242138234756",
        message: "Hello!",
        time: "Thu Apr 28 2016 19:24:12 GMT-0700 (PDT)",
        user: {}
      }
    }
    expect(messagesReducer(state, action)).toEqual(updatedState)
  })

  it('should handle REMOVE_MESSAGE', () => {
    let state = {
      data: [{
        channel: "For sale",
        id: "1461896652437facebook:10209242138234756",
        message: "Hello!",
        time: "Thu Apr 28 2016 19:24:12 GMT-0700 (PDT)",
        user: {}
      }]
    }
    let action = { type: 'REMOVE_MESSAGE', json: {
        channel: "For sale",
        id: "1461896652437facebook:10209242138234756",
        message: "Hello!",
        time: "Thu Apr 28 2016 19:24:12 GMT-0700 (PDT)",
        user: {}
      }
    }
    expect(messagesReducer(state, action)).toEqual({ data: [] })
  })
})