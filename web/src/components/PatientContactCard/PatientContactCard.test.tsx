import { render } from '@redwoodjs/testing/web'

import PatientContactCard from './PatientContactCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PatientContactCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PatientContactCard />)
    }).not.toThrow()
  })
})
