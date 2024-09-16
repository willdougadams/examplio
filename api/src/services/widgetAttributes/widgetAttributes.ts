import type {
  QueryResolvers,
  MutationResolvers,
  WidgetAttributeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const widgetAttributes: QueryResolvers['widgetAttributes'] = () => {
  return db.widgetAttribute.findMany()
}

export const widgetAttribute: QueryResolvers['widgetAttribute'] = ({ id }) => {
  return db.widgetAttribute.findUnique({
    where: { id },
  })
}

export const createWidgetAttribute: MutationResolvers['createWidgetAttribute'] =
  ({ input }) => {
    return db.widgetAttribute.create({
      data: input,
    })
  }

export const updateWidgetAttribute: MutationResolvers['updateWidgetAttribute'] =
  ({ id, input }) => {
    return db.widgetAttribute.update({
      data: input,
      where: { id },
    })
  }

export const deleteWidgetAttribute: MutationResolvers['deleteWidgetAttribute'] =
  ({ id }) => {
    return db.widgetAttribute.delete({
      where: { id },
    })
  }

export const WidgetAttribute: WidgetAttributeRelationResolvers = {
  widget: (_obj, { root }) => {
    return db.widgetAttribute.findUnique({ where: { id: root?.id } }).widget()
  },
}
