import type { Meta, StoryObj } from '@storybook/react'

import WidgetsPage from './WidgetsPage'

const meta: Meta<typeof WidgetsPage> = {
  component: WidgetsPage,
}

export default meta

type Story = StoryObj<typeof WidgetsPage>

export const Primary: Story = {}
