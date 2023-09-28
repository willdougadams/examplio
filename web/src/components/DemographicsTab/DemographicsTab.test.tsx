import { render } from '@redwoodjs/testing/web'

import DemographicsTab from './DemographicsTab'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DemographicsTab', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DemographicsTab />)
    }).not.toThrow()
  })
})
