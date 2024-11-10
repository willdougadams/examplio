import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const exportUs: QueryResolvers['exportUs'] = () => {
  return db.exportMe.findMany()
}

export const exportMe: QueryResolvers['exportMe'] = ({ id }) => {
  return db.exportMe.findUnique({
    where: { id },
  })
}

export const createExportMe: MutationResolvers['createExportMe'] = ({
  input,
}) => {
  return db.exportMe.create({
    data: input,
  })
}

export const updateExportMe: MutationResolvers['updateExportMe'] = ({
  id,
  input,
}) => {
  return db.exportMe.update({
    data: input,
    where: { id },
  })
}

export const deleteExportMe: MutationResolvers['deleteExportMe'] = ({ id }) => {
  return db.exportMe.delete({
    where: { id },
  })
}
