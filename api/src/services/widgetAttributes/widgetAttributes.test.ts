import type { WidgetAttribute } from '@prisma/client'

import {
  widgetAttributes,
  widgetAttribute,
  createWidgetAttribute,
  updateWidgetAttribute,
  deleteWidgetAttribute,
} from './widgetAttributes'
import type { StandardScenario } from './widgetAttributes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('widgetAttributes', () => {
  scenario(
    'returns all widgetAttributes',
    async (scenario: StandardScenario) => {
      const result = await widgetAttributes()

      expect(result.length).toEqual(
        Object.keys(scenario.widgetAttribute).length
      )
    }
  )

  scenario(
    'returns a single widgetAttribute',
    async (scenario: StandardScenario) => {
      const result = await widgetAttribute({
        id: scenario.widgetAttribute.one.id,
      })

      expect(result).toEqual(scenario.widgetAttribute.one)
    }
  )

  scenario('creates a widgetAttribute', async (scenario: StandardScenario) => {
    const result = await createWidgetAttribute({
      input: {
        widgetId: scenario.widgetAttribute.two.widgetId,
        name: 'String',
        value: 'String',
        type: 'HEIGHT',
      },
    })

    expect(result.widgetId).toEqual(scenario.widgetAttribute.two.widgetId)
    expect(result.name).toEqual('String')
    expect(result.value).toEqual('String')
    expect(result.type).toEqual('HEIGHT')
  })

  scenario('updates a widgetAttribute', async (scenario: StandardScenario) => {
    const original = (await widgetAttribute({
      id: scenario.widgetAttribute.one.id,
    })) as WidgetAttribute
    const result = await updateWidgetAttribute({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a widgetAttribute', async (scenario: StandardScenario) => {
    const original = (await deleteWidgetAttribute({
      id: scenario.widgetAttribute.one.id,
    })) as WidgetAttribute
    const result = await widgetAttribute({ id: original.id })

    expect(result).toEqual(null)
  })
})
