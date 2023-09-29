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

import TabPanel from './TabPanel'

const meta: Meta<typeof TabPanel> = {
  component: TabPanel,
}

export default meta

type Story = StoryObj<typeof TabPanel>

export const Primary: Story = {}
