import { render } from '@redwoodjs/testing/web'

import WidgetsPage from './WidgetsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WidgetsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WidgetsPage />)
    }).not.toThrow()
  })
})
