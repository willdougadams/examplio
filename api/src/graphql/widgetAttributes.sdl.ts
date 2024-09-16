export const schema = gql`
  type WidgetAttribute {
    id: Int!
    widgetId: Int!
    widget: Widget!
    name: String!
    value: String!
    type: WidgetAttributeTypes!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum WidgetAttributeTypes {
    HEIGHT
    WIDTH
    DURATION
    COLOR
    SMELL
    DISTORTION
    TEMPERMENT
  }

  type Query {
    widgetAttributes: [WidgetAttribute!]! @requireAuth
    widgetAttribute(id: Int!): WidgetAttribute @requireAuth
  }

  input CreateWidgetAttributeInput {
    widgetId: Int!
    name: String!
    value: String!
    type: WidgetAttributeTypes!
  }

  input UpdateWidgetAttributeInput {
    widgetId: Int
    name: String
    value: String
    type: WidgetAttributeTypes
  }

  type Mutation {
    createWidgetAttribute(input: CreateWidgetAttributeInput!): WidgetAttribute!
      @requireAuth
    updateWidgetAttribute(
      id: Int!
      input: UpdateWidgetAttributeInput!
    ): WidgetAttribute! @requireAuth
    deleteWidgetAttribute(id: Int!): WidgetAttribute! @requireAuth
  }
`
