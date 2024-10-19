import { Box, List } from '@mui/material'
import type { WidgetsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import WidgetCell from '../WidgetCell'

export const QUERY = gql`
  query WidgetsQuery {
    widgets {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Create some widgets to get started</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ widgets }: CellSuccessProps<WidgetsQuery>) => {
  const widgetListItems = widgets.map((widget) => {
    return <WidgetCell key={widget.id} id={widget.id} />
  })

  return (
    <Box>
      <List>{...widgetListItems}</List>
    </Box>
  )
}
