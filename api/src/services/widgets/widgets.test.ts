import type { Widget } from '@prisma/client'

import {
  widgets,
  widget,
  createWidget,
  updateWidget,
  deleteWidget,
} from './widgets'
import type { StandardScenario } from './widgets.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('widgets', () => {
  scenario('returns all widgets', async (scenario: StandardScenario) => {
    const result = await widgets()

    expect(result.length).toEqual(Object.keys(scenario.widget).length)
  })

  scenario('returns a single widget', async (scenario: StandardScenario) => {
    const result = await widget({ id: scenario.widget.one.id })

    expect(result).toEqual(scenario.widget.one)
  })

  scenario('creates a widget', async (scenario: StandardScenario) => {
    const result = await createWidget({
      input: { name: 'String', ownerId: scenario.widget.two.ownerId },
    })

    expect(result.name).toEqual('String')
    expect(result.ownerId).toEqual(scenario.widget.two.ownerId)
  })

  scenario('updates a widget', async (scenario: StandardScenario) => {
    const original = (await widget({ id: scenario.widget.one.id })) as Widget
    const result = await updateWidget({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a widget', async (scenario: StandardScenario) => {
    const original = (await deleteWidget({
      id: scenario.widget.one.id,
    })) as Widget
    const result = await widget({ id: original.id })

    expect(result).toEqual(null)
  })
})
