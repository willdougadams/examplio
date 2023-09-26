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

import ThemeToggle from './ThemeToggle'

const meta: Meta<typeof ThemeToggle> = {
  component: ThemeToggle,
}

export default meta

type Story = StoryObj<typeof ThemeToggle>

export const Primary: Story = {}
