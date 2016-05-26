import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import App from '../../src/components/App'

describe('<App />', () => {
  it('renders a #content-wrapper', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('#content-wrapper').length).toBe(1)
  })

  it('#content-wrapper has 4 children', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('#content-wrapper').children().length).toBe(4)
  })

  it('renders a #footer', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('#footer').length).toBe(1)
  })

})