import React, { useState, CSSProperties } from 'react'

import styled from '@emotion/styled'
import { Paper } from '@mui/material'

interface FlashcardProps {
  front: React.ReactNode
  back: React.ReactNode
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  perspective: 1000px;
  position: relative;
  margin: 16px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const Flashcard: React.FC<FlashcardProps> = ({ front, back }) => {
  const [isFlipped, setFlipped] = useState(false)

  const commonStyles: CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const frontStyles: CSSProperties = {
    ...commonStyles,
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    transition: 'transform 0.6s ease-out',
  }

  const backStyles: CSSProperties = {
    ...commonStyles,
    transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)',
    transition: 'transform 0.6s ease-out',
  }

  return (
    <Container onClick={() => setFlipped(!isFlipped)}>
      <Paper style={frontStyles}>{front}</Paper>
      <Paper style={backStyles}>{back}</Paper>
    </Container>
  )
}

export default Flashcard
