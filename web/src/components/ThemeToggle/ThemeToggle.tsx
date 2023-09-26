import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, Switch } from '@mui/material'

import { AppContext } from 'src/App'

const ThemeToggle = () => {
  const { dark, toggleDark } = React.useContext(AppContext)
  return (
    <Box display="flex" alignItems={'center'}>
      <LightModeIcon />
      <Switch onChange={toggleDark} checked={dark} />
      <DarkModeIcon />
    </Box>
  )
}

export default ThemeToggle
