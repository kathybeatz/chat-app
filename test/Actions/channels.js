import expect from 'expect'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actionCreators from '../../src/Actions/channels'

describe('action creators for channels', () => {
  it('creates an action changes the active channel', () => {
    const channelName = 'Private Channel'
    const expectedAction = {
      type: 'CHANGE_CHANNEL',
      name: 'Private Channel'
    }
    expect(actionCreators.changeChannel(channelName)).toEqual(expectedAction)
  })
})

/*
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async action creators for channels', () => {
  afterEach(() => { // mocha hook that is called after each test
    nock.cleanAll() // clean up the prepared mocks
  })
  it('creates LOAD_CHANNELS when app first loads and when child is added', () => {
    nock('https://chatapp100.firebaseio.com')
    .get('/channels')
    .reply(200, { members: 'facebook:10209242138234756', name: 'YAYY!' })

    const expectedActions = [
      { type: 'LOAD_CHANNELS', json: { members: 'facebook:10209242138234756', name: 'YAYY!' } },
      { type: 'REMOVE_CHANNEL', json: { members: 'facebook:10209242138234756', name: 'YAYY!' } }
    ]

    const store = mockStore({ all: [ { members: 'facebook:10209242138234756', name: 'YAYY!' } ] })
    store.dispatch(actionCreators.fetchChannels())
    console.log(store.getActions())
    // return store.dispatch(actionCreators.fetchChannels()).toEqual(expectedActions)
  })
})

*/