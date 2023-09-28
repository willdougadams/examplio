import type { Meta, StoryObj } from '@storybook/react'

import PatientPage from './PatientPage'

const meta: Meta<typeof PatientPage> = {
  component: PatientPage,
}

export default meta

type Story = StoryObj<typeof PatientPage>

export const Primary: Story = {}
