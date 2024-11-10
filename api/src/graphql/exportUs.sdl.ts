export const schema = gql`
  type ExportMe {
    id: Int!
    smell: WidgetSmellOptions!
    temperment: WidgetTempermentOptions!
  }

  enum WidgetSmellOptions {
    FRAGRANT
    ODIOUS
    AROMATIC
    PUNGENT
    LIGHTLY_SCENTED
    MUSKY
    ACRID
    MALODOROUS
  }

  enum WidgetTempermentOptions {
    LANGUID
    MELANCHOLY
    LIVELY
    MELLOW
    JOYFUL
    RAPTUROUS
  }

  type Query {
    exportUs: [ExportMe!]! @requireAuth
    exportMe(id: Int!): ExportMe @requireAuth
  }

  input CreateExportMeInput {
    smell: WidgetSmellOptions!
    temperment: WidgetTempermentOptions!
  }

  input UpdateExportMeInput {
    smell: WidgetSmellOptions
    temperment: WidgetTempermentOptions
  }

  type Mutation {
    createExportMe(input: CreateExportMeInput!): ExportMe! @requireAuth
    updateExportMe(id: Int!, input: UpdateExportMeInput!): ExportMe!
      @requireAuth
    deleteExportMe(id: Int!): ExportMe! @requireAuth
  }
`
