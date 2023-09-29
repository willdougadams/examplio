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

import LoginSignupPopover from './LoginSignupPopover'

const meta: Meta<typeof LoginSignupPopover> = {
  component: LoginSignupPopover,
}

export default meta

type Story = StoryObj<typeof LoginSignupPopover>

export const Primary: Story = {}
