import React, { useRef, useEffect, useState } from 'react'

import { Box } from '@mui/material'

const rad = (deg: number) => deg * (Math.PI / 180)

const SineWave: React.FC<{
  width: number
  height: number
  amplitude: number
  frequency: number
  fill: string
  stroke: string
  strokeWidth: number
  start: number
}> = React.memo(
  ({
    width,
    height,
    amplitude,
    frequency,
    fill,
    stroke,
    strokeWidth,
    start,
  }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
      const ctx = canvasRef.current.getContext('2d')

      const lg = ctx.createLinearGradient(0, 0, 0, height)
      lg.addColorStop(0, '#3d29f500')
      lg.addColorStop(1, '#3d29f5aa')

      ctx.fillStyle = fill
      ctx.strokeStyle = strokeWidth === 0 ? 'transparent' : stroke
      ctx.lineWidth = strokeWidth

      draw(ctx, start, width, height, amplitude, frequency)
    }, [width, height, amplitude, frequency, fill, stroke, strokeWidth, start])

    const draw = (
      ctx: CanvasRenderingContext2D,
      start: number,
      width: number,
      height: number,
      amplitude: number,
      frequency: number
    ) => {
      ctx.clearRect(0, 0, width, height)
      const mid = height / 2
      const y = (d: number) => amplitude * Math.sin(rad(frequency * d))
      ctx.beginPath()
      for (let x = 0; x <= width; x += 1) {
        ctx.lineTo(x, mid + y(start + x))
      }
      ctx.stroke()
      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.fill()
    }

    return <canvas ref={canvasRef} id="wave" width={width} height={height} />
  }
)

const AnimatedSineWave: React.FC<{
  width: number
  height: number
  amplitude: number
  frequency: number
  fill: string
  stroke: string
  strokeWidth: number
  speed: number
}> = (props) => {
  const [start, setStart] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStart(
        (prevStart) => (prevStart + props.speed) % (360 / props.frequency)
      )
    }, 16)

    return () => clearInterval(intervalId)
  }, [props.frequency, props.speed])

  return <SineWave start={start} {...props} />
}

const WaveFooter: React.FC = () => {
  const config = {
    width: window.innerWidth,
    height: 180,
    amplitude: 10,
    frequency: 1,
    fill: '#3d29f588',
    stroke: 'transparent',
    strokeWidth: 0,
  }

  window.addEventListener('resize', () => {
    config.width = window.innerWidth
  })

  return (
    <Box>
      <Box>
        <Box style={{ position: 'fixed', bottom: -10, right: 0, left: 0 }}>
          <AnimatedSineWave speed={1} {...config} />
        </Box>
        <Box style={{ position: 'fixed', bottom: -10, right: 0, left: 0 }}>
          <AnimatedSineWave speed={3} {...config} frequency={0.5} />
        </Box>
      </Box>
    </Box>
  )
}

export default WaveFooter
