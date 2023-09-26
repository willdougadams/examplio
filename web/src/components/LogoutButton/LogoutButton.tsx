import { LogoutOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'

import { useAuth } from 'src/auth'

const LogoutButton = () => {
  const { logOut } = useAuth()

  return (
    <Button onClick={logOut} startIcon={<LogoutOutlined />}>
      Logout
    </Button>
  )
}

export default LogoutButton
