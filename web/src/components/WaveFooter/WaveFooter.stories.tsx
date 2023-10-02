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

import WaveFooter from './WaveFooter'

const meta: Meta<typeof WaveFooter> = {
  component: WaveFooter,
}

export default meta

type Story = StoryObj<typeof WaveFooter>

export const Primary: Story = {}
