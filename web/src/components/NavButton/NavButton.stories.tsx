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

import NavButton from './NavButton'

const meta: Meta<typeof NavButton> = {
  component: NavButton,
}

export default meta

type Story = StoryObj<typeof NavButton>

export const Primary: Story = {}
