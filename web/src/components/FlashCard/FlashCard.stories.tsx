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

import FlashCard from './FlashCard'

const meta: Meta<typeof FlashCard> = {
  component: FlashCard,
}

export default meta

type Story = StoryObj<typeof FlashCard>

export const Primary: Story = {}
