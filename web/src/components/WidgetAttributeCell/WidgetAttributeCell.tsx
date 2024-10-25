import { MenuItem, Select } from '@mui/material'
import type {
  FindWidgetAttributeQuery,
  FindWidgetAttributeQueryVariables,
  WidgetAttributeTypes,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {
  UpdateWidgetAttributeInput,
  UpdateWidgetAttributeMutationVariables,
} from '../../../types/graphql'

export const QUERY = gql`
  query FindWidgetAttributeQuery($id: Int!) {
    widgetAttribute: widgetAttribute(id: $id) {
      id
      type
      value
      name
    }
  }
`

export const UPDATE_WIDGET_ATTRIBUTE = gql`
  mutation UpdateWidgetAttributeMutation(
    $id: Int!
    $input: UpdateWidgetAttributeInput!
  ) {
    updateWidgetAttribute(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindWidgetAttributeQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  widgetAttribute,
}: CellSuccessProps<
  FindWidgetAttributeQuery,
  FindWidgetAttributeQueryVariables
>) => {
  const [update, { loading, error }] = useMutation<
    UpdateWidgetAttributeInput,
    UpdateWidgetAttributeMutationVariables
  >(UPDATE_WIDGET_ATTRIBUTE, {
    onCompleted: () => {
      toast.success('Updated widget attribute!')
    },
    onError: () => {
      toast.error(
        `Oops, there was a problem with your submission: ${error.message}`
      )
    },
    refetchQueries: [{ query: QUERY, variables: { id: widgetAttribute.id } }],
    awaitRefetchQueries: true,
  })

  const types = [
    'HEIGHT',
    'WIDTH',
    'DURATION',
    'COLOR',
    'SMELL',
    'DISTORTION',
    'TEMPERMENT',
  ] as WidgetAttributeTypes[]

  return (
    <>
      <Select
        disabled={loading}
        defaultValue={widgetAttribute.type}
        onChange={(event) => {
          update({
            variables: {
              id: widgetAttribute.id,
              input: {
                type: event.target.value as WidgetAttributeTypes
              },
            },
          })
        }}
      >
        {types.map((type) => {
          return (
            <MenuItem
              key={type}
              value={type}
              selected={type === widgetAttribute.type}
            >
              {type}
            </MenuItem>
          )
        })}
      </Select>
    </>
  )
}
