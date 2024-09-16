import { render } from '@redwoodjs/testing/web'

import WidgetPicker from './WidgetPicker'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WidgetPicker', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WidgetPicker />)
    }).not.toThrow()
  })
})
