import { render } from '@redwoodjs/testing/web'

import FlashCard from './FlashCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashCard />)
    }).not.toThrow()
  })
})
