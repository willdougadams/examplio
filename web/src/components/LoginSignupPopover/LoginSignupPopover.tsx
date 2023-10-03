import { Box, Tabs, Tab } from '@mui/material'

import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import TabPanel from '../TabPanel/TabPanel'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const LoginSignupPopover = () => {
  const [tab, setTab] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Signup" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0} name="login">
        <SignIn />
      </TabPanel>
      <TabPanel value={tab} index={1} name="signup">
        <SignUp />
      </TabPanel>
    </Box>
  )
}

export default LoginSignupPopover
