import { Edit } from '@mui/icons-material'
import {
  Box,
  Card,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Typography,
} from '@mui/material'

import { Patient, mockUrl } from 'src/pages/PatientPage/PatientPage'

interface PersonalInfoCardProps {
  patient: Patient
}

const PersonalInfoCard = ({ patient }: PersonalInfoCardProps) => {
  const [editMode, setEditMode] = React.useState(false)
  const [editedPatient, setEditedPatient] = React.useState(patient)

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedPatient({
      ...editedPatient,
      [e.target.name]: e.target.value,
    })
  }

  const handleEditToggle = () => {
    if (editMode) {
      // do actual saving here
      console.log(`saving updates: ${JSON.stringify(editedPatient)}`)
      fetch(`${mockUrl}/Patients/${patient.id}`, {
        method: 'PUT',
        body: JSON.stringify(editedPatient),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setEditedPatient(data)
        })
    }
    setEditMode(!editMode)
  }

  return (
    <Card sx={{ width: '30%', padding: '16px' }}>
      <Box display="flex" gap="8px">
        <Typography variant="h6">Personal Information</Typography>
        <IconButton onClick={handleEditToggle}>
          <Edit fontSize="small" />
        </IconButton>
      </Box>
      <Box display="flex">
        <FormControl sx={{ width: '50%' }}>
          <FormLabel>First Name</FormLabel>
          {editMode ? (
            <Input
              value={editedPatient.firstName}
              name="firstName"
              onChange={handleUpdate}
            />
          ) : (
            <Typography>{editedPatient.firstName}</Typography>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          {editMode ? (
            <Input
              value={editedPatient.lastName}
              name="lastName"
              onChange={handleUpdate}
            />
          ) : (
            <Typography>{editedPatient.lastName}</Typography>
          )}
        </FormControl>
      </Box>
      <Box>
        <FormControl sx={{ width: '50%' }}>
          <FormLabel>Date of Birth</FormLabel>
          {editMode ? (
            <Input
              value={editedPatient.dateOfBirth}
              name="dateOfBirth"
              onChange={handleUpdate}
            />
          ) : (
            <Typography>
              {`${new Date(editedPatient.dateOfBirth)
                .getMonth()
                .toString()}/${new Date(editedPatient.dateOfBirth)
                .getDate()
                .toString()}/${new Date(editedPatient.dateOfBirth)
                .getFullYear()
                .toString()}`}
            </Typography>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Race</FormLabel>
          {editMode ? (
            <Input
              value={editedPatient.race}
              name="race"
              onChange={handleUpdate}
            />
          ) : (
            <Typography>{editedPatient.race}</Typography>
          )}
        </FormControl>
      </Box>
      <Box display="flex">
        <FormControl sx={{ width: '50%' }}>
          <FormLabel>Gender</FormLabel>
          {editMode ? (
            <Input
              value={editedPatient.gender === 'male' ? 'Male' : 'Female'}
              name="gender"
              onChange={handleUpdate}
            />
          ) : (
            <Typography>{editedPatient.gender}</Typography>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>SSN</FormLabel>
          {editMode ? (
            <Input
              value={editedPatient.socialSecurityNumber}
              name="socialSecurityNumber"
              onChange={handleUpdate}
            />
          ) : (
            <Typography>{editedPatient.socialSecurityNumber}</Typography>
          )}
        </FormControl>
      </Box>
    </Card>
  )
}

export default PersonalInfoCard
