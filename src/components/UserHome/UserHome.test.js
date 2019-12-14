
import React from 'react'
import { shallow } from 'enzyme'

import UserHome from './UserHome.js'

// We will describe a block of tests
describe('UserHome component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<UserHome />)
    // We create an assertion within the test that checks if our component renders our name prop
    // expect(component.contains('Your name')).toBe(true)
  })
})
