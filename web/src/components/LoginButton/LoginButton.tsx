import { LoginOutlined } from '@mui/icons-material'

import NavButton from '../NavButton/NavButton'

const LoginButton = () => {
  return <NavButton to="/login" icon={<LoginOutlined />} label="Login" />
}

export default LoginButton
