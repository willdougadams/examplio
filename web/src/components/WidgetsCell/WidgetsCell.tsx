import type { WidgetsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import WidgetPicker from '../WidgetPicker/WidgetPicker'

export const QUERY = gql`
  query WidgetsQuery {
    widgets {
      id
      name
      widgetAttributes {
        id
        name
        type
      }
      ownerId
      owner {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ widgets }: CellSuccessProps<WidgetsQuery>) => {
  return <WidgetPicker widgets={widgets} />
}
