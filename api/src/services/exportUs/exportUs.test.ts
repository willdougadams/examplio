import type { ExportMe } from '@prisma/client'

import {
  exportUs,
  exportMe,
  createExportMe,
  updateExportMe,
  deleteExportMe,
} from './exportUs'
import type { StandardScenario } from './exportUs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('exportUs', () => {
  scenario('returns all exportUs', async (scenario: StandardScenario) => {
    const result = await exportUs()

    expect(result.length).toEqual(Object.keys(scenario.exportMe).length)
  })

  scenario('returns a single exportMe', async (scenario: StandardScenario) => {
    const result = await exportMe({ id: scenario.exportMe.one.id })

    expect(result).toEqual(scenario.exportMe.one)
  })

  scenario('creates a exportMe', async () => {
    const result = await createExportMe({
      input: { smell: 'FRAGRANT', temperment: 'LANGUID' },
    })

    expect(result.smell).toEqual('FRAGRANT')
    expect(result.temperment).toEqual('LANGUID')
  })

  scenario('updates a exportMe', async (scenario: StandardScenario) => {
    const original = (await exportMe({
      id: scenario.exportMe.one.id,
    })) as ExportMe
    const result = await updateExportMe({
      id: original.id,
      input: { smell: 'MALODOROUS' },
    })

    expect(result.smell).toEqual('MALODOROUS')
  })

  scenario('deletes a exportMe', async (scenario: StandardScenario) => {
    const original = (await deleteExportMe({
      id: scenario.exportMe.one.id,
    })) as ExportMe
    const result = await exportMe({ id: original.id })

    expect(result).toEqual(null)
  })
})
