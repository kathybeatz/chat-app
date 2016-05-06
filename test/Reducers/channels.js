import expect from 'expect'
import channelsReducer from '../../src/reducers/channels'

describe('channels reducer', () => {
  it('should return the initial state by default', () => {
    let state = {
      active: {
        name: 'Main'
      },
      all: []
    }
    expect(channelsReducer(state, 'NONEXISTENT_ACTIONTYPE')).toEqual(state)
  })

  it('should handle ADD_CHANNEL', () => {
    expect(channelsReducer({}, {type:'ADD_CHANNEL'})).toEqual({})
  })

  it('should handle LOAD_CHANNELS', () => {
    let action = {
      type:'LOAD_CHANNELS',
      json: {
        members: 'facebook:10209242138234756',
        name: 'Carpooling'
      }
    }
    let updatedState = {
      all: [{
        members: 'facebook:10209242138234756',
        name: 'Carpooling'
      }]
    }
    expect(channelsReducer({ all: [] }, action)).toEqual(updatedState)
  })

  it('should handle REMOVE_CHANNEL', () => {
    let state = {
      all: [{
        members: 'facebook:10209242138234756',
        name: 'Carpooling'
      }]
    }
    let action = {
      type: 'REMOVE_CHANNEL',
      json: {
        members: 'facebook:10209242138234756',
        name: 'Carpooling'
      }
    }
    expect(channelsReducer(state, action)).toEqual({ all: [] })
  })

  it('should handle CHANGE_CHANNEL', () => {
    let state = { active: { name: 'Main' } }
    let action = {
      type: 'CHANGE_CHANNEL',
      name: 'Textbook Exchange'
    }
    expect(channelsReducer(state, action)).toEqual({ active: { name: 'Textbook Exchange' } })
  })

})