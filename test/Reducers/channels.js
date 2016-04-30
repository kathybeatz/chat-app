import expect from 'expect'
import channelsReducer from '../../src/reducers/channels'

describe('channels reducer', () => {
  it('should return the initial state by default', () => {
    expect(channelsReducer(undefined, {})).toEqual({
      active: {
        name: 'Main'
      },
      all: []
    })
  })

  it('should handle ADD_CHANNEL', () => {
    expect(channelsReducer({}, {type:'ADD_CHANNEL'})).toEqual({})
  })

  it('should handle LOAD_CHANNELS', () => {
    expect(
      channelsReducer({ all: [] }, {
        type:'LOAD_CHANNELS',
        json: {
          members: 'facebook:10209242138234756',
          name: 'Carpooling'
        }
      })
    ).toEqual(
      {
        all: [{
          members: 'facebook:10209242138234756',
          name: 'Carpooling'
        }]
      }
    )
  })

  it('should handle REMOVE_CHANNEL', () => {
    let state = {
      all: [{
        members: 'facebook:10209242138234756',
        name: 'Carpooling'
      }]
    }
    expect(
      channelsReducer(state, {
        type: 'REMOVE_CHANNEL',
        json: {
          members: 'facebook:10209242138234756',
          name: 'Carpooling'
        }
      })
    ).toEqual({ all: [] })
  })

  it('should handle CHANGE_CHANNEL', () => {
    expect(
      channelsReducer({ active: { name: 'Main' } }, {
        type: 'CHANGE_CHANNEL',
        name: 'Textbook Exchange'
      })
    ).toEqual({ active: { name: 'Textbook Exchange' } })
  })

})