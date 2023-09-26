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

import UserControls from './UserControls'

const meta: Meta<typeof UserControls> = {
  component: UserControls,
}

export default meta

type Story = StoryObj<typeof UserControls>

export const Primary: Story = {}
