import { Box, keyframes, Typography } from "@mui/material"
import { FindWidgetQuery } from '../../../types/graphql';

const WidgetRenderer = ({ widget }: FindWidgetQuery) => {
  const attributes = widget.widgetAttributes ?? []

  const height = attributes.find((w) => w.type === 'HEIGHT')?.value ?? 100
  const width = attributes.find((w) => w.type === 'WIDTH')?.value ?? 100
  const temperment = attributes.find((w) => w.type === 'TEMPERMENT')?.value ?? 'calm'
  const duration = attributes.find((w) => w.type === 'DURATION')?.value ?? 1
  const color = attributes.find((w) => w.type === 'COLOR')?.value ?? 'blue'
  const smell = attributes.find((w) => w.type === 'SMELL')?.value ?? 'good'
  const distortion = attributes.find((w) => w.type === 'DISTORTION')?.value ?? 'none'

  const wiggle = temperment.length * 5
  const slide = keyframes`
    from { transform: translate(${-wiggle}, ${-wiggle}); }
    to { transform: translate(${wiggle}px, ${wiggle}px); }
  `
  const slideAnimation = `${slide} ${duration}s ease-in-out infinite alternate`

  const rotate = smell.length * 5
  const spin = keyframes`
    from { transform: rotate(${rotate}deg); }
    to { transform: rotate(-${rotate}deg); }
  `
  const spinAnimation = `${spin} ${duration}s ease-in-out infinite alternate`

  return (
    <Box sx={{
      animation: `${slideAnimation}, ${spinAnimation};`,
      overflow: 'hidden',
      height: `${height}px`,
      width: `${width}px`,
      border: `${duration}px solid pink`,
      padding: '1rem',
      margin: '1rem',
      borderRadius: `${distortion.length * 5}px`,
    }}>
      <Typography>
        {widget.name ?? 'Widget'}
      </Typography>
    </Box>
  )
}

export default WidgetRenderer
