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

import LogoutButton from './LogoutButton'

const meta: Meta<typeof LogoutButton> = {
  component: LogoutButton,
}

export default meta

type Story = StoryObj<typeof LogoutButton>

export const Primary: Story = {}
