import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import Login from '../../src/components/Login'

describe('<Login />', () => {
  it('renders ', () => {
    const user = {
      id: '0123456',
      imageURL: 'https://image.com',
      name: 'Anna Zhu'
    }

    const wrapper = mount(<Login user={user}/>)
    expect(wrapper.props().user.name).toBe('Anna Zhu')
  })
})