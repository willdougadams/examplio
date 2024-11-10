import { Box, keyframes, Typography } from "@mui/material"
import { FindWidgetQuery } from '../../../types/graphql';
import { useTheme } from '@mui/material'
const WidgetRenderer = ({ widget }: FindWidgetQuery) => {
  const theme = useTheme()
  const attributes = widget.widgetAttributes ?? []

  const height = attributes.find((w) => w.type === 'HEIGHT')?.value ?? 100
  const width = attributes.find((w) => w.type === 'WIDTH')?.value ?? 100
  const temperment = attributes.find((w) => w.type === 'TEMPERMENT')?.value ?? ''
  const duration = attributes.find((w) => w.type === 'DURATION')?.value ?? 1
  const color = attributes.find((w) => w.type === 'COLOR')?.value ?? '#F0F'
  const smell = attributes.find((w) => w.type === 'SMELL')?.value ?? ''
  const distortion = attributes.find((w) => w.type === 'DISTORTION')?.value ?? 'none'

  const wiggle = temperment.length * 5
  const rotate = smell.length * 5
  const frames = keyframes`
    from { transform: rotate(${rotate}deg) translate(0px, 0px); }
    to { transform: rotate(-${rotate}deg) translate(${wiggle}px, ${wiggle}px); }
  `
  const animation = `${frames} ${duration}s ease-in-out infinite alternate`

  return (
    <Box sx={{
      animation: `${animation};`,
      overflow: 'hidden',
      height: `${height}px`,
      width: `${width}px`,
      border: `${duration}px solid ${color}`,
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
