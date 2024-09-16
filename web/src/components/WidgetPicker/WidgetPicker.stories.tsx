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

import WidgetPicker from './WidgetPicker'

const meta: Meta<typeof WidgetPicker> = {
  component: WidgetPicker,
}

export default meta

type Story = StoryObj<typeof WidgetPicker>

export const Primary: Story = {}
