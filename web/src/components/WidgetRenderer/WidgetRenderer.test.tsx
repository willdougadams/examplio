import { render } from '@redwoodjs/testing/web'

import WidgetRenderer from './WidgetRenderer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WidgetRenderer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WidgetRenderer />)
    }).not.toThrow()
  })
})
