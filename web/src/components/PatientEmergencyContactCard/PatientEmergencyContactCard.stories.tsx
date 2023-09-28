// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import PatientEmergencyContactCard from './PatientEmergencyContactCard'

const meta: Meta<typeof PatientEmergencyContactCard> = {
  component: PatientEmergencyContactCard,
}

export default meta

type Story = StoryObj<typeof PatientEmergencyContactCard>

export const Primary: Story = {}
