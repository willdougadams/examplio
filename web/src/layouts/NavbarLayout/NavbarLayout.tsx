import React from 'react'

import { Home } from '@mui/icons-material'
import CampaignIcon from '@mui/icons-material/Campaign'
import WidgetsIcon from '@mui/icons-material/Widgets'
import { Drawer, Box, Divider, CssBaseline, List } from '@mui/material'

import { routes } from '@redwoodjs/router'

import NavButton from 'src/components/NavButton/NavButton'
import UserControls from 'src/components/UserControls/UserControls'

type NavbarLayoutProps = {
  children?: React.ReactNode
}

const drawerWidth = 240

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <UserControls />
        <Divider />
        <List>
          <NavButton to={routes.home()} icon={<Home />} label="Home" />
          <NavButton
            to={routes.widgets({ id: 1 })}
            icon={<WidgetsIcon />}
            label="Widgets"
          />
          <NavButton
            to={routes.contact()}
            icon={<CampaignIcon />}
            label="Contact"
          />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default NavbarLayout
