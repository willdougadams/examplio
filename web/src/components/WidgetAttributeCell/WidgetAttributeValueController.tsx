import { Box, MenuItem, Select, Slider } from "@mui/material"
import { FindWidgetAttributeQuery, UpdateWidgetAttributeInput, UpdateWidgetAttributeMutationVariables } from "types/graphql"
import { MuiColorInput } from 'mui-color-input'
import { useMutation } from "@redwoodjs/web"
import { QUERY, UPDATE_WIDGET_ATTRIBUTE } from "./WidgetAttributeCell"

interface WidgetAttributeValueControllerProps extends FindWidgetAttributeQuery {}


export const WidgetAttributeValueController = ({ widgetAttribute }: WidgetAttributeValueControllerProps) => {
  const [update, { loading, error }] = useMutation<
    UpdateWidgetAttributeInput,
    UpdateWidgetAttributeMutationVariables
  >(UPDATE_WIDGET_ATTRIBUTE, {
    refetchQueries: [{ query: QUERY, variables: { id: widgetAttribute.id } }],
    awaitRefetchQueries: true,
  })

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
            step={10}
            marks
            min={10}
            max={110}
            onChange={handleSliderUpdate}
          />
        }
        {
          widgetAttribute.type === 'TEMPERMENT' &&
            <Select
              defaultValue={widgetAttribute.value}
              onChange={(e) => handleStringUpdate(e.target.value)}
            >
              <MenuItem value="calm">Calm</MenuItem>
              <MenuItem value="excited">Excited</MenuItem>
              <MenuItem value="angry">Angry</MenuItem>
            </Select>
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
              value={widgetAttribute.value}
              onChange={(e) => handleStringUpdate(e)}
            />
        }
        {
          widgetAttribute.type === 'SMELL' &&
            <Select
              defaultValue={widgetAttribute.value}
              onChange={(e) => handleStringUpdate(e.target.value)}
            >
              <MenuItem value="good">Good</MenuItem>
              <MenuItem value="bad">Bad</MenuItem>
            </Select>
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
