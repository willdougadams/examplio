import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import AssistWalkerIcon from '@mui/icons-material/AssistWalker'
import BlenderIcon from '@mui/icons-material/Blender'
import ContentCutIcon from '@mui/icons-material/ContentCut'
import { Box, Typography } from '@mui/material'

const commonStyles = {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '16px',
}

interface FrontContentProps {
  text: string
  bgImage: string
}

const FrontContent = ({ text, bgImage }: FrontContentProps) => {
  return (
    <Box
      style={{
        ...commonStyles,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        color: '#000',
      }}
    >
      <Typography variant="h4" width="75%">
        {text}
      </Typography>
    </Box>
  )
}

interface BackContentProps {
  text: string
  icon: React.ReactNode
}

const BackContent = ({ text, icon }: BackContentProps) => {
  return (
    <Box
      style={{
        ...commonStyles,
      }}
      gap="4px"
    >
      {icon}
      <Typography variant="body1">{text}</Typography>
    </Box>
  )
}

export const StreamlineFront = () => {
  return (
    <FrontContent
      text="Optimize Streamlining"
      bgImage="https://cdn.pixabay.com/photo/2019/06/06/16/02/technology-4256272_1280.jpg"
    />
  )
}

export const StreamlineBack = () => {
  return (
    <BackContent
      text="Hone workflow to a razor's edge, and cut through the competition"
      icon={<ContentCutIcon sx={{ fontSize: '64px' }} />}
    />
  )
}

export const SynergyFront = () => {
  return (
    <FrontContent
      text="Synergize Collaborations"
      bgImage="https://cdn.pixabay.com/photo/2023/07/18/16/25/rowing-8135184_1280.jpg"
    />
  )
}

export const SynergyBack = () => {
  return (
    <BackContent
      text="Thesis, antithesis, synthesis. The Hegelian dialectic is the key to
    unlocking your team's potential"
      icon={<AllInclusiveIcon sx={{ fontSize: '64px' }} />}
    />
  )
}

export const ErgonomicFront = () => {
  return (
    <FrontContent
      text="User-Friendly Ergonomics"
      bgImage="https://media.istockphoto.com/id/1348229084/photo/shoulder-pain-and-posture-man-suffering.jpg?s=1024x1024&w=is&k=20&c=2kKyB4CS2Y_nsB9s9E8-a2ZY4nI2_qqpzJsciFPZz08="
    />
  )
}

export const ErgonomicBack = () => {
  return (
    <BackContent
      text="Reduce eye sweat and carpe diem tunnel with our patented user-friendly ergonomic interface"
      icon={<AssistWalkerIcon sx={{ fontSize: '64px' }} />}
    />
  )
}

export const WheatgrassFront = () => {
  return (
    <FrontContent
      text="Wheatgrass Smoothie"
      bgImage="https://cdn.pixabay.com/photo/2015/03/20/17/49/green-682620_1280.jpg"
    />
  )
}

export const WheatgrassBack = () => {
  return (
    <BackContent
      text="Unbounded Vitality awaits!"
      icon={<BlenderIcon sx={{ fontSize: '64px' }} />}
    />
  )
}
