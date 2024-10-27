import type { FindWidgetAttributesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import WidgetAttributeCell from '../WidgetAttributeCell'
import { Stack } from '@mui/material'

export const QUERY = gql`
  query FindWidgetAttributesQuery($id: Int!) {
    widget: widget(id: $id) {
      id
      widgetAttributes {
        id
        name
        type
        value
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ widget }: CellSuccessProps<FindWidgetAttributesQuery>) => {
  return (
    <Stack>
      {(widget.widgetAttributes ?? []).map((item) => {
        return <WidgetAttributeCell key={item.id} id={item.id} />
      })}
    </Stack>
  )
}
