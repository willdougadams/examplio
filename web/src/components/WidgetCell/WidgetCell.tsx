import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ListItem,
  ListItemText,
  Stack,
} from '@mui/material'
import type {
  CreateWidgetAttributeInput,
  FindWidgetQuery,
  FindWidgetQueryVariables,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WidgetAttributesCell from 'src/components/WidgetAttributesCell'

export const QUERY = gql`
  query FindWidgetQuery($id: Int!) {
    widget: widget(id: $id) {
      id
      name
      ownerId
      widgetAttributes {
        id
      }
    }
  }
`

const ADD_WIDGET_ATTRIBUTE = gql`
  mutation CreateWidgetAttribute($input: CreateWidgetAttributeInput!) {
    createWidgetAttribute(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindWidgetQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  widget,
}: CellSuccessProps<FindWidgetQuery, FindWidgetQueryVariables>) => {
  const [create, { loading, error }] = useMutation<CreateWidgetAttributeInput>(
    ADD_WIDGET_ATTRIBUTE,
    {
      onCompleted: () => {
        toast.success('Added new attribute!')
      },
      onError: () => {
        toast.error(
          `Oops, there was a problem with your submission: ${error.message}`
        )
      },
      refetchQueries: [{ query: QUERY, variables: { id: widget.id } }],
      awaitRefetchQueries: true,
    }
  )
  const handleAdd = () => {
    create({
      variables: {
        input: {
          widgetId: widget.id,
          name: 'New Attribute',
          value: 'New Value',
          type: 'COLOR',
        },
      },
    })
  }
  return (
    <ListItem key={widget.id}>
      <Accordion>
        <AccordionSummary>
          <ListItemText primary={widget.name} />
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            <Button onClick={handleAdd} disabled={loading}>
              Add Attribute
            </Button>
            <WidgetAttributesCell id={widget.id} />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </ListItem>
  )
}
