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

import PersonalInfoCard from './PersonalInfoCard'

const meta: Meta<typeof PersonalInfoCard> = {
  component: PersonalInfoCard,
}

export default meta

type Story = StoryObj<typeof PersonalInfoCard>

export const Primary: Story = {}
