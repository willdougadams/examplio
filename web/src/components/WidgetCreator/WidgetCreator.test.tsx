import { render } from '@redwoodjs/testing/web'

import WidgetCreator from './WidgetCreator'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WidgetCreator', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WidgetCreator />)
    }).not.toThrow()
  })
})
