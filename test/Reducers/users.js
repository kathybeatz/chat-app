import expect from 'expect'
import userReducer from '../../src/reducers/user'

describe('user reducer', () => {
  it('should return the initial state by default', () => {
    let state = {
      id: null,
      name: null,
      imageURL: null
    }
    expect(userReducer(state, 'NONEXISTENT_ACTIONTYPE')).toEqual(state)
  })

  it('should handle ADD_USER', () => {
    let state = {
      id: null,
      name: null,
      imageURL: null
    }
    let action = {
      type: 'ADD_USER',
      data: {
        provider: "facebook",
        uid: "facebook:10209242138234756",
        facebook: {
          displayName: "Anna Zhu",
          profileImageURL: "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/10259970_10208345126890033_5014447341408091506_n.jpg?oh=2ba8a64826ed1023ee24a9a85f489c4b&oe=57AF3A51"
        },
        token: "",
        auth: {}
      }
    }
    let updatedState = {
      id: "facebook:10209242138234756",
      name: "Anna Zhu",
      imageURL: "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/10259970_10208345126890033_5014447341408091506_n.jpg?oh=2ba8a64826ed1023ee24a9a85f489c4b&oe=57AF3A51"
    }
    expect(userReducer(state, action)).toEqual(updatedState)
  })

  it('should handle SIGN_OUT', () => {
    let state = {
      id: "facebook:10209242138234756",
      name: "Anna Zhu",
      imageURL: "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/10259970_10208345126890033_5014447341408091506_n.jpg?oh=2ba8a64826ed1023ee24a9a85f489c4b&oe=57AF3A51"
    }
    let updatedState = {
      id: null,
      name: null,
      imageURL: null
    }
    expect(userReducer(state, { type: 'SIGN_OUT' })).toEqual(updatedState)
  })
})