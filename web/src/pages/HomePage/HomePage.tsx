import { Lightbulb } from '@mui/icons-material'
import BlenderIcon from '@mui/icons-material/Blender'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf'
import MoodIcon from '@mui/icons-material/Mood'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <Box>
      <MetaTags title="Home" description="Home page" />
      <Typography variant="h4">Welcome to Examplio</Typography>
      <Typography variant="h6" sx={{ marginLeft: '16px' }}>
        The industry-leading B2B SaaS platform for fizzing your widgets and
        buzzing your wuzzits
      </Typography>
      <Divider sx={{ marginBottom: '32px' }} />
      <Typography variant="h5">What can Examplio do for you?</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Lightbulb />
          </ListItemIcon>
          <ListItemText primary="Optimize Streamlining" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EnergySavingsLeafIcon />
          </ListItemIcon>
          <ListItemText primary="Synergize Collaborations" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MoodIcon />
          </ListItemIcon>
          <ListItemText primary="User-Friendly Ergonomics" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BlenderIcon />
          </ListItemIcon>
          <ListItemText primary="Wheatgrass Smoothie" />
        </ListItem>
      </List>
    </Box>
  )
}

export default HomePage
