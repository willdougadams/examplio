import { useEffect } from 'react'

import { Logout, Person, Settings } from '@mui/icons-material'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import LoginButton from '../LoginButton/LoginButton'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
const UserControls = () => {
  const [displayName, setDisplayName] = React.useState<string>('')
  const { isAuthenticated, logOut, currentUser } = useAuth()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    if (isAuthenticated) {
      handleClose()
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (currentUser) {
      setDisplayName(currentUser.name)
    }
  }, [currentUser, isAuthenticated])

  if (!isAuthenticated) {
    return <LoginButton />
  }

  return (
    <List>
      <ListItem>
        <ListItemButton
          aria-controls={open ? 'user-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary={displayName} />
        </ListItemButton>
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>
            <ThemeToggle />
          </MenuItem>
          <MenuItem onClick={() => navigate(routes.settings())}>
            <Settings />
            Settings
          </MenuItem>
          <MenuItem onClick={logOut}>
            <Logout />
            Logout
          </MenuItem>
        </Menu>
      </ListItem>
    </List>
  )
}

export default UserControls
