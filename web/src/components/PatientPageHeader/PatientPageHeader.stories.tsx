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

import PatientPageHeader from './PatientPageHeader'

const meta: Meta<typeof PatientPageHeader> = {
  component: PatientPageHeader,
}

export default meta

type Story = StoryObj<typeof PatientPageHeader>

export const Primary: Story = {}
