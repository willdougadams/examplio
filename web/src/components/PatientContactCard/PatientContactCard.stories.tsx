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

import PatientContactCard from './PatientContactCard'

const meta: Meta<typeof PatientContactCard> = {
  component: PatientContactCard,
}

export default meta

type Story = StoryObj<typeof PatientContactCard>

export const Primary: Story = {}
