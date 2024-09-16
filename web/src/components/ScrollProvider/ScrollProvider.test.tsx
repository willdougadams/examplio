import { render } from '@redwoodjs/testing/web'

import ScrollProvider from './ScrollProvider'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ScrollProvider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ScrollProvider />)
    }).not.toThrow()
  })
})
