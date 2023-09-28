import { Mail, Phone } from '@mui/icons-material'
import { Avatar, Box, Typography } from '@mui/material'

interface PatientPageHeaderProps {
  fullName: string
  age: number
  gender: 'Female' | 'Male'
  email: string
  phone: string
  avitarUrl: string
}

const PatientPageHeader = ({
  fullName,
  age,
  gender,
  email,
  phone,
  avitarUrl,
}: PatientPageHeaderProps) => {
  return (
    <Box display="flex">
      <Avatar
        sx={{ width: 'auto', height: '85%' }}
        alt={fullName}
        src={avitarUrl}
      />
      <Box gap="8px">
        <Typography variant="body1">{fullName}</Typography>
        <Typography variant="body2">
          ({age}y) {gender}
        </Typography>
        <Box display="flex">
          <Mail fontSize={'small'} />
          <Typography variant="body2">{email}</Typography>
        </Box>
        <Box display="flex">
          <Phone fontSize={'small'} />
          <Typography variant="body2">{phone}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PatientPageHeader
