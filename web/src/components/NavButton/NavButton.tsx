import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import { navigate, useMatch } from '@redwoodjs/router'
interface NavButtonProps {
  to: string
  icon?: React.ReactNode
  label: string
}

const NavButton = ({ to, icon, label }: NavButtonProps) => {
  const pathMatch = useMatch(to)
  return (
    <ListItem key={label} disablePadding>
      <ListItemButton onClick={() => navigate(to)} selected={pathMatch.match}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  )
}

export default NavButton
