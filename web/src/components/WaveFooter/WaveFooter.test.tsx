import { render } from '@redwoodjs/testing/web'

import WaveFooter from './WaveFooter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WaveFooter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WaveFooter />)
    }).not.toThrow()
  })
})
