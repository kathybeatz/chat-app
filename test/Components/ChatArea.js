import React from 'react'
import expect from 'expect'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import { ChatArea } from '../../src/components/ChatArea'

// Test props: Shallowly?
// A shallow render does not render props (data && channel)
describe('<ChatArea />', () => {
  const data = [
    {
      channel: 'Main',
      id: '1464162351234facebook:10209242138234756',
      message: 'How are you doing today?',
      time: 'Wed May 25 2016 00:45:51 GMT-0700 (PDT)',
      user: {
        id: 'facebook:10209242138234756',
        imageURL: 'https://facebook.com',
        name: 'Anna Zhu'
      }
    }]

  it('should render #messages-container', () => {
    const wrapper = shallow(<ChatArea data={data} channel={'Main'} />)

    expect(wrapper.find('#messages-container').type()).toBe('div')
    expect(wrapper.find('#messages-container').length).toBe(1)
  })

  it('calls componentDidMount', () => {
    var spy = sinon.spy(ChatArea.prototype, 'componentDidMount')
    const wrapper = mount(<ChatArea data={data} channel={'Main'} dispatch={() => {}} />)
    expect(spy.calledOnce).toBe(true)
  })
})