import { render } from '@redwoodjs/testing/web'

import PatientEmergencyContactCard from './PatientEmergencyContactCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PatientEmergencyContactCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PatientEmergencyContactCard />)
    }).not.toThrow()
  })
})
