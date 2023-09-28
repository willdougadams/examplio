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

import DemographicsTab from './DemographicsTab'

const meta: Meta<typeof DemographicsTab> = {
  component: DemographicsTab,
}

export default meta

type Story = StoryObj<typeof DemographicsTab>

export const Primary: Story = {}
