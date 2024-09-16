import type { Prisma, Widget } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WidgetCreateArgs>({
  widget: {
    one: {
      data: { name: 'String', owner: { create: { email: 'String9872818' } } },
    },
    two: {
      data: { name: 'String', owner: { create: { email: 'String6740588' } } },
    },
  },
})

export type StandardScenario = ScenarioData<Widget, 'widget'>
