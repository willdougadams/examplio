import { render } from '@redwoodjs/testing/web'

import NavButton from './NavButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavButton />)
    }).not.toThrow()
  })
})
