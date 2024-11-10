import type { Prisma, ExportMe } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ExportMeCreateArgs>({
  exportMe: {
    one: { data: { smell: 'FRAGRANT', temperment: 'LANGUID' } },
    two: { data: { smell: 'FRAGRANT', temperment: 'LANGUID' } },
  },
})

export type StandardScenario = ScenarioData<ExportMe, 'exportMe'>
