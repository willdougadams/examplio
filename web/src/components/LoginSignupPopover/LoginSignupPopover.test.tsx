import { render } from '@redwoodjs/testing/web'

import LoginSignupPopover from './LoginSignupPopover'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoginSignupPopover', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginSignupPopover />)
    }).not.toThrow()
  })
})
