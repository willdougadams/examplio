import { render } from '@redwoodjs/testing/web'

import PatientPage from './PatientPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PatientPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PatientPage />)
    }).not.toThrow()
  })
})
