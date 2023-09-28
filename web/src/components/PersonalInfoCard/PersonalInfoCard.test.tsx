import { render } from '@redwoodjs/testing/web'

import PersonalInfoCard from './PersonalInfoCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PersonalInfoCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PersonalInfoCard />)
    }).not.toThrow()
  })
})
