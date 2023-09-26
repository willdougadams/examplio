import { render } from '@redwoodjs/testing/web'

import UserControls from './UserControls'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserControls', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserControls />)
    }).not.toThrow()
  })
})
