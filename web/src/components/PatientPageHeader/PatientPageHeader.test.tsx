import { render } from '@redwoodjs/testing/web'

import PatientPageHeader from './PatientPageHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PatientPageHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PatientPageHeader />)
    }).not.toThrow()
  })
})
