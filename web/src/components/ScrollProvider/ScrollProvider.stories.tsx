// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import ScrollProvider from './ScrollProvider'

const meta: Meta<typeof ScrollProvider> = {
  component: ScrollProvider,
}

export default meta

type Story = StoryObj<typeof ScrollProvider>

export const Primary: Story = {}
