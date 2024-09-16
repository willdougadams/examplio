import type { Prisma, WidgetAttribute } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WidgetAttributeCreateArgs>({
  widgetAttribute: {
    one: {
      data: {
        name: 'String',
        value: 'String',
        type: 'HEIGHT',
        widget: {
          create: {
            name: 'String',
            owner: { create: { email: 'String2833057' } },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        value: 'String',
        type: 'HEIGHT',
        widget: {
          create: {
            name: 'String',
            owner: { create: { email: 'String2329596' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WidgetAttribute, 'widgetAttribute'>
