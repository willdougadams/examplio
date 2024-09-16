import type {
  QueryResolvers,
  MutationResolvers,
  WidgetRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const widgets: QueryResolvers['widgets'] = () => {
  return db.widget.findMany()
}

export const widget: QueryResolvers['widget'] = ({ id }) => {
  return db.widget.findUnique({
    where: { id },
  })
}

export const createWidget: MutationResolvers['createWidget'] = ({ input }) => {
  return db.widget.create({
    data: input,
  })
}

export const updateWidget: MutationResolvers['updateWidget'] = ({
  id,
  input,
}) => {
  return db.widget.update({
    data: input,
    where: { id },
  })
}

export const deleteWidget: MutationResolvers['deleteWidget'] = ({ id }) => {
  return db.widget.delete({
    where: { id },
  })
}

export const Widget: WidgetRelationResolvers = {
  owner: (_obj, { root }) => {
    return db.widget.findUnique({ where: { id: root?.id } }).owner()
  },
  widgetAttributes: (_obj, { root }) => {
    return db.widget.findUnique({ where: { id: root?.id } }).widgetAttributes()
  },
}
