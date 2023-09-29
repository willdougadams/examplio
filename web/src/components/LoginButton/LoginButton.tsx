import { Login } from '@mui/icons-material'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popover,
} from '@mui/material'

import LoginSignupPopover from '../LoginSignupPopover/LoginSignupPopover'

const LoginButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  return (
    <>
      <ListItem>
        <ListItemButton onClick={handleClick} aria-describedby={id}>
          <ListItemIcon>
            <Login />
          </ListItemIcon>
          <ListItemText primary="Login or Signup" />
        </ListItemButton>
      </ListItem>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Paper sx={{ p: 2 }}>
          <LoginSignupPopover />
        </Paper>
      </Popover>
    </>
  )
}

export default LoginButton
