import { Box, Typography } from "@mui/material"
import { FindWidgetQuery, FindWidgetQueryVariables, Widget } from '../../../types/graphql';

interface WidgetRendererProps {
  widget: FindWidgetQuery
}

const WidgetRenderer = ({ widget }: WidgetRendererProps) => {

  const attributes = widget.widget?.widgetAttributes ?? []

  const height = attributes.find((w) => w.type === 'HEIGHT')?.value ?? 100
  const width = attributes.find((w) => w.type === 'WIDTH')?.value ?? 100
  const temperment = attributes.find((w) => w.type === 'TEMPERMENT')?.value ?? 'calm'
  const duration = attributes.find((w) => w.type === 'DURATION')?.value ?? 10
  const color = attributes.find((w) => w.type === 'COLOR')?.value ?? 'blue'
  const smell = attributes.find((w) => w.type === 'SMELL')?.value ?? 'good'
  const distortion = attributes.find((w) => w.type === 'DISTORTION')?.value ?? 'none'

  return (
    <Box sx={{
      overflow: 'hidden',
      height: `${height}px`,
      width: `${width}px`,
      border: `${duration}px solid pink`,
      padding: '1rem',
      margin: '1rem',
    }}>
      <Typography>{JSON.stringify(widget)}</Typography>
    </Box>
  )
}

export default WidgetRenderer
