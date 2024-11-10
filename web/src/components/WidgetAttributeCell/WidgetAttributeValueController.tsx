import { Box, MenuItem, Select, Slider, TextField } from "@mui/material"
import { FindWidgetAttributeQuery, UpdateWidgetAttributeInput, UpdateWidgetAttributeMutationVariables, WidgetSmellOptions } from "types/graphql"
import { MuiColorInput } from 'mui-color-input'
import { useMutation } from "@redwoodjs/web"
import { QUERY, UPDATE_WIDGET_ATTRIBUTE } from "./WidgetAttributeCell"
import { WidgetTempermentOptions } from '../../../types/graphql';

interface WidgetAttributeValueControllerProps extends FindWidgetAttributeQuery {}

export const WidgetAttributeValueController = ({ widgetAttribute }: WidgetAttributeValueControllerProps) => {
  const [update, { loading, error }] = useMutation<
    UpdateWidgetAttributeInput,
    UpdateWidgetAttributeMutationVariables
  >(UPDATE_WIDGET_ATTRIBUTE, {
    refetchQueries: [{ query: QUERY, variables: { id: widgetAttribute.id } }],
    awaitRefetchQueries: true,
  })

  const smells: WidgetSmellOptions[] = [
    'FRAGRANT',
    'ODIOUS',
    'AROMATIC',
    'PUNGENT',
    'LIGHTLY_SCENTED',
    'MUSKY',
    'ACRID',
    'MALODOROUS'
  ]

  const temperments: WidgetTempermentOptions[] = [
    'JOYFUL',
    'LANGUID',
    'LIVELY',
    'MELANCHOLY',
    'MELLOW',
    'RAPTUROUS'
  ]

  const handleSliderUpdate = (_, newValue: number) => {
    update({
      variables: {
        id: widgetAttribute.id,
        input: { value: `${newValue}` }
      }
    })
  }

  const handleStringUpdate = (newValue: string) => {
    update({
      variables: {
        id: widgetAttribute.id,
        input: { value: newValue }
      }
    })
  }

  return (
      <Box width={250}>
        {
          (widgetAttribute.type === 'HEIGHT' || widgetAttribute.type === 'WIDTH') &&
          <Slider
            valueLabelDisplay="auto"
            defaultValue={+widgetAttribute.value}
            step={25}
            marks
            min={100}
            max={1000}
            onChange={handleSliderUpdate}
          />
        }
        {
          widgetAttribute.type === 'TEMPERMENT' &&
            <TextField
              select
              size='small'
              defaultValue={widgetAttribute.value}
              onChange={(e) => handleStringUpdate(e.target.value)}
            >
              {
                temperments.map(temperment => (
                  <MenuItem key={temperment} value={temperment}>{temperment}</MenuItem>
                ))
              }
            </TextField>
        }
        {
          widgetAttribute.type === 'DURATION' &&
            <Slider
              valueLabelDisplay="auto"
              defaultValue={+widgetAttribute.value}
              step={0.1}
              marks
              min={0}
              max={1}
              onChange={handleSliderUpdate}
            />
        }
        {
          widgetAttribute.type === 'COLOR' &&
            <MuiColorInput
              format="hex"
              size='small'
              value={widgetAttribute.value}
              onChange={(e) => handleStringUpdate(e)}
            />
        }
        {
          widgetAttribute.type === 'SMELL' &&
            <TextField
              select
              size='small'
              defaultValue={widgetAttribute.value}
              onChange={(e) => handleStringUpdate(e.target.value)}
            >
              {
                smells.map(smell => (
                  <MenuItem key={smell} value={smell}>{smell}</MenuItem>
                ))
              }
            </TextField>
        }
        {
          widgetAttribute.type === 'DISTORTION' &&
            <Slider
              valueLabelDisplay="auto"
              defaultValue={+widgetAttribute.value}
              step={5}
              marks
              min={0}
              max={50}
              onChange={handleSliderUpdate}
            />
        }
      </Box>
  )
}
