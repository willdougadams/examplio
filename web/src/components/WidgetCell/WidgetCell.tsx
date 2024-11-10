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
import WidgetRenderer from '../WidgetRenderer/WidgetRenderer'
import { WidgetAttribute, WidgetAttributeTypes } from '../../../types/graphql';

export const QUERY = gql`
  query FindWidgetQuery($id: Int!) {
    widget: widget(id: $id) {
      id
      name
      ownerId
      widgetAttributes {
        id
        type
        value
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


export const defaultAttributeTypeValues = (type: WidgetAttributeTypes) => {
  switch (type) {
    case 'COLOR':
      return '#FF00FF'
    case 'DISTORTION':
      return '0'
    case 'DURATION':
      return '1'
    case 'HEIGHT':
      return '350'
    case 'SMELL':
      return 'good'
    case 'TEMPERMENT':
      return 'calm'
    case 'WIDTH':
      return '350'
    default:
      return ''
  }
}

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
          value: defaultAttributeTypeValues('COLOR'),
          type: 'COLOR',
        },
      },
    })
  }
  return (
    <ListItem key={widget.id}>
      <Stack direction={'row'} alignItems={'center'} spacing={15}>
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
      <WidgetRenderer widget={widget} />
      </Stack>
    </ListItem>
  )
}
