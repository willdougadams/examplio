export const schema = gql`
  type Widget {
    id: Int!
    name: String!
    ownerId: Int!
    owner: User!
    createdAt: DateTime!
    updatedAt: DateTime!
    widgetAttributes: [WidgetAttribute]!
  }

  type Query {
    widgets: [Widget!]! @requireAuth
    widget(id: Int!): Widget @requireAuth
  }

  input CreateWidgetInput {
    name: String!
    ownerId: Int!
  }

  input UpdateWidgetInput {
    name: String
    ownerId: Int
  }

  type Mutation {
    createWidget(input: CreateWidgetInput!): Widget! @requireAuth
    updateWidget(id: Int!, input: UpdateWidgetInput!): Widget! @requireAuth
    deleteWidget(id: Int!): Widget! @requireAuth
  }
`
