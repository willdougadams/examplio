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

import WidgetCreator from './WidgetCreator'

const meta: Meta<typeof WidgetCreator> = {
  component: WidgetCreator,
}

export default meta

type Story = StoryObj<typeof WidgetCreator>

export const Primary: Story = {}
