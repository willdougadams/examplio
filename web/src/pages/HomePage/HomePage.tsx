import { Box, Divider, Typography } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import Flashcard from 'src/components/FlashCard/FlashCard'
import WaveFooter from 'src/components/WaveFooter/WaveFooter'

import {
  ErgonomicBack,
  ErgonomicFront,
  StreamlineBack,
  StreamlineFront,
  SynergyBack,
  SynergyFront,
  WheatgrassBack,
  WheatgrassFront,
} from './CardContents'

const HomePage = () => {
  return (
    <Box>
      <MetaTags title="Home" description="Home page" />
      <Box display={'flex'} justifyContent={'center'}>
        <Typography variant="h1" textAlign="center">
          Welcome to
        </Typography>
        <Typography variant="h1" textAlign="center" width={'1rem'} />
        <Typography fontFamily={'Itim'} variant="h1" textAlign="center">
          Examplio
        </Typography>
      </Box>
      <Typography variant="h4" textAlign="center" marginX="15%">
        The example cloud platform for very serious professionals fizzing
        widgets and buzzing wuzzos at the speed of light!
      </Typography>
      <Divider sx={{ marginY: '32px' }} />
      <Box display={'flex'} justifyContent={'center'}>
        <Typography variant="h5" textAlign="center">
          What can
        </Typography>
        <Typography variant="h5" textAlign="center" width={'0.5rem'} />
        <Typography fontFamily={'Itim'} variant="h5" textAlign="center">
          Examplio
        </Typography>
        <Typography variant="h5" textAlign="center" width={'0.5rem'} />
        <Typography variant="h5" textAlign="center">
          do for you?
        </Typography>
      </Box>
      <Box display={'flex'} justifyContent={'space-around'} paddingTop={'32px'}>
        <Flashcard front={<StreamlineFront />} back={<StreamlineBack />} />
        <Flashcard front={<SynergyFront />} back={<SynergyBack />} />
        <Flashcard front={<ErgonomicFront />} back={<ErgonomicBack />} />
        <Flashcard front={<WheatgrassFront />} back={<WheatgrassBack />} />
      </Box>
      <WaveFooter />
    </Box>
  )
}

export default HomePage
